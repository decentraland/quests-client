import { engine, Entity, Schemas } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'

export type QuestHudOptions = {
  /**
   *  Color for Background in HEX
   */
  backgoundHexColor?: string
  /**
   * Font size in pixels for HUD title
   */
  titleFontSize?: number
  /**
   * Font size in pixels for tasks descriptions
   */
  descriptionFontSize?: number
}

export function createQuestHUD(opts: QuestHudOptions) {
  let quest: { name: string; tasks: { done: boolean; description: string }[] } | null = null
  let entity: Entity | null = null

  ReactEcsRenderer.setUiRenderer(() => uiComponent(opts))

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
    rerender: () => ReactEcsRenderer.setUiRenderer(() => uiComponent(opts))
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

const questUI = (
  quest: { name: string; tasks: readonly { done: boolean; description: string }[] },
  stylingOpts: QuestHudOptions
) => (
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
      color: stylingOpts.backgoundHexColor
        ? Color4.fromHexString(stylingOpts.backgoundHexColor)
        : Color4.create(0, 0, 0, 0.9)
    }}
  >
    <Label
      uiTransform={{
        width: '100%',
        minHeight: 12
      }}
      textAlign="middle-left"
      value={`Quest's Name: ${quest.name}`}
      fontSize={stylingOpts.titleFontSize || 12}
    />
    <UiEntity
      uiTransform={{
        flexDirection: 'column',
        width: '100%',
        padding: { top: 10, bottom: 10 },
        overflow: 'hidden'
      }}
    >
      {[...quest.tasks].map((t) => task(t, stylingOpts.descriptionFontSize))}
    </UiEntity>
  </UiEntity>
)

const task = (task: { done: boolean; description: string }, fontSize?: number) => (
  <Label
    uiTransform={{
      overflow: 'hidden',
      padding: { top: 10, bottom: 10 }
    }}
    textAlign="middle-left"
    value={`${task.done ? 'X' : 'O'} ${task.description}`}
    fontSize={fontSize || 10}
  />
)

const uiComponent = (props: QuestHudOptions) => (
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
    {[...engine.getEntitiesWith(QuestComponent)].map(([_, quest]) => questUI(quest, props))}
  </UiEntity>
)
