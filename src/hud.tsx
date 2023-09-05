import { engine, Entity, Schemas } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

export function createQuestHUD() {
  let quest: { name: string; tasks: { done: boolean; description: string }[] } | null = null
  let entity: Entity | null = null

  ReactEcsRenderer.setUiRenderer(uiComponent)

  return {
    upsert: (name: string, tasks: { done: boolean; description: string }[]) => {
      if (entity && quest) {
        QuestComponent.createOrReplace(entity, { name: quest.name, tasks })
        quest = { name: quest.name, tasks }
      } else {
        const questEntity = engine.addEntity()
        QuestComponent.create(questEntity, { name, tasks })
        entity = questEntity
        quest = { name, tasks }
      }
    },
    rerender: () => ReactEcsRenderer.setUiRenderer(uiComponent)
  }
}

const QuestComponent = engine.defineComponent('dcl:quests:QuestComponent', {
  name: Schemas.String,
  tasks: Schemas.Array(
    Schemas.Map({
      done: Schemas.Boolean,
      description: Schemas.String
    })
  )
})

const questUI = (quest: { name: string; tasks: readonly { done: boolean; description: string }[] }) => (
  <UiEntity
    uiTransform={{
      flexDirection: 'column',
      width: '100%',
      minHeight: 20,
      maxHeight: 100,
      padding: 10,
      margin: 0
    }}
    uiBackground={{
      color: Color4.create(0, 0, 0, 0.9)
    }}
  >
    <Label
      uiTransform={{
        width: '100%',
        minHeight: 12
      }}
      textAlign="middle-left"
      value={`Quest's Name: ${quest.name}`}
      fontSize={12}
    />
    <UiEntity
      uiTransform={{
        flexDirection: 'column',
        width: '100%',
        padding: { top: 10, bottom: 10 },
        overflow: 'hidden'
      }}
    >
      {[...quest.tasks].map(task)}
    </UiEntity>
  </UiEntity>
)

const task = (task: { done: boolean; description: string }) => (
  <Label
    uiTransform={{
      overflow: 'hidden',
      padding: { top: 10, bottom: 10 }
    }}
    textAlign="middle-left"
    value={`${task.done ? 'X' : 'O'} ${task.description}`}
    fontSize={10}
  />
)

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      minWidth: 250,
      margin: { left: 10 },
      positionType: 'absolute',
      position: { top: '28%' }
    }}
  >
    {[...engine.getEntitiesWith(QuestComponent)].map(([_, quest]) => questUI(quest))}
  </UiEntity>
)
