import { engine, IEngine, InputAction, inputSystem, Transform } from '@dcl/sdk/ecs'
import { onPlayerExpressionObservable } from '@dcl/sdk/observables'
import mitt from 'mitt'

function getPlayerParcel(): { x: string; y: string } {
  const playerPosition = Transform.getOrNull(engine.PlayerEntity)
  const { z } = playerPosition?.position ?? { z: 0 }
  let { x, y } = playerPosition?.position ?? { x: 0, y: 0, z }

  x = Math.floor(x / 16)
  y = Math.floor(z / 16)
  return { x: `${x}`, y: `${y}` }
}

type ActionType = 'location' | 'jump' | 'emote'

type LocationActionType = {
  type: 'LOCATION'
  parameters: {
    x: string
    y: string
  }
}

type JumpActionType = {
  type: 'JUMP'
  parameters: {
    x: string
    y: string
  }
}

type EmoteActionType = {
  type: 'EMOTE'
  parameters: {
    x: string
    y: string
    id: string
  }
}

type All = LocationActionType | JumpActionType | EmoteActionType

type InverseExclude<T, U> = T extends U ? T : U

type ActionNarrowing<S extends ActionType> = S extends 'location'
  ? LocationActionType
  : S extends 'jump'
  ? JumpActionType
  : S extends 'emote'
  ? EmoteActionType
  : never

/**
 * Track common actions such as ```LOCATION```, ```EMOTE``` and ```JUMP```. You are able to track all of them or only a set of them.
 * When an action is done by the user, the given callback is executed. You may want to send the event to the Quests Service through ```QuestsClient.sendEvent```
 * @param engine SDK Engine
 * @param onActionCallback Callback to execute when an action is done by the user
 * @param type Possible:```all``` | ```location``` | ```jump``` | ```emote```
 */
export function initActionsTracker<T extends ActionType>(
  engine: IEngine,
  onActionCallback: (action: InverseExclude<All, ActionNarrowing<T>>) => void,
  ...type: T[]
) {
  let lastPosition = { x: '0', y: '0' }
  let jumping = false

  const commonActionsEmitter = mitt<{ action: InverseExclude<All, ActionNarrowing<T>> }>()

  function checkUserPosition() {
    const position = getPlayerParcel()
    if (position.x === lastPosition.x && position.y === lastPosition.y) return
    lastPosition = position
    const action: LocationActionType = {
      type: 'LOCATION',
      parameters: {
        x: position.x,
        y: position.y
      }
    }
    commonActionsEmitter.emit('action', action as unknown as any)
  }

  function checkUserJump() {
    if (inputSystem.isPressed(InputAction.IA_JUMP)) {
      if (!jumping) {
        jumping = true
        const position = getPlayerParcel()
        const action: JumpActionType = {
          type: 'JUMP',
          parameters: {
            x: position.x,
            y: position.y
          }
        }
        commonActionsEmitter.emit('action', action as unknown as any)
        jumping = false
      }
    } else {
      jumping = false
    }
  }

  function checkEmotes() {
    onPlayerExpressionObservable.add(({ expressionId }) => {
      const position = getPlayerParcel()
      const action: EmoteActionType = {
        type: 'EMOTE',
        parameters: {
          id: expressionId,
          x: position.x,
          y: position.y
        }
      }
      commonActionsEmitter.emit('action', action as unknown as any)
    })
  }

  if (type.includes('location' as T)) {
    engine.addSystem(checkUserPosition)
  }

  if (type.includes('jump' as T)) {
    engine.addSystem(checkUserJump)
  }

  if (type.includes('emote' as T)) {
    checkEmotes()
  }

  commonActionsEmitter.on('action', (action) => {
    onActionCallback(action)
  })
}
