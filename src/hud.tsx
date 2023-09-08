import { engine, Entity, Schemas } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Label, ReactEcsRenderer, UiEntity, UiLabelProps, UiTransformProps } from '@dcl/sdk/react-ecs'

export type QuestHudOptions = {
  /**
   * Styles for the main box
   */
  hudBox?: UiTransformProps
  /**
   *  Color for Background in HEX
   */
  backgoundHexColor?: string
  /**
   * Quest Name font size
   */
  questTitle?: {
    uiTransform?: UiTransformProps
    labelProps?: UiLabelProps
  }
  stepsContainer?: UiTransformProps
  /**
   * Steps title font size
   */
  stepsTitle?: {
    uiTransform?: UiTransformProps
    labelProps?: UiLabelProps
  }
  /**
   * Font size in pixels for tasks descriptions
   */
  taskDescription?: {
    uiTransform?: UiTransformProps
    labelProps?: UiLabelProps
  }
  /**
   * Next steps styling
   */
  nextSteps?: {
    uiTransform?: UiTransformProps
    labelProps?: UiLabelProps
  }
}

export function createQuestHUD(opts?: QuestHudOptions) {
  let quest: QuestUI | null = null
  let entity: Entity | null = null

  ReactEcsRenderer.setUiRenderer(() => uiComponent(opts))

  return {
    upsert: (newQuest: QuestUI) => {
      if (entity && quest) {
        QuestComponent.createOrReplace(entity, {
          ...newQuest
        })
        quest = { ...newQuest }
      } else {
        const questEntity = engine.addEntity()
        QuestComponent.create(questEntity, { ...newQuest })
        entity = questEntity
        quest = { ...newQuest }
      }
    },
    rerender: () => ReactEcsRenderer.setUiRenderer(() => uiComponent(opts))
  }
}

const QuestComponent = engine.defineComponent('dcl:quests:QuestComponent', {
  name: Schemas.String,
  steps: Schemas.Array(
    Schemas.Map({
      name: Schemas.String,
      tasks: Schemas.Array(
        Schemas.Map({
          done: Schemas.Boolean,
          description: Schemas.String
        })
      )
    })
  ),
  nextSteps: Schemas.Array(Schemas.String)
})

export type QuestUI = {
  name: string
  steps: {
    name: string
    tasks: {
      done: boolean
      description: string
    }[]
  }[]
  nextSteps: string[]
}

const questUI = (quest: QuestUI, stylingOpts?: QuestHudOptions) => (
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
      color: stylingOpts?.backgoundHexColor
        ? Color4.fromHexString(stylingOpts.backgoundHexColor)
        : Color4.create(0, 0, 0, 0.9)
    }}
  >
    <Label
      uiTransform={{
        width: '100%',
        minHeight: 12,
        ...stylingOpts?.questTitle?.uiTransform
      }}
      textAlign="middle-left"
      fontSize={12}
      value={`Quest's Name: ${quest.name}`}
      {...stylingOpts?.questTitle?.labelProps}
    />
    <UiEntity
      uiTransform={{
        flexDirection: 'column',
        width: '100%',
        padding: { top: 10, bottom: 10 },
        overflow: 'hidden',
        ...stylingOpts?.stepsContainer
      }}
    >
      {[...quest.steps].map((s) => step(s, stylingOpts))}
    </UiEntity>
    <Label
      uiTransform={{
        width: '100%',
        minHeight: 12,
        ...stylingOpts?.nextSteps?.uiTransform
      }}
      textAlign="middle-left"
      fontSize={12}
      value={`Next steps: ${quest.nextSteps.join(', ')}`}
      {...stylingOpts?.nextSteps?.labelProps}
    />
  </UiEntity>
)

const step = (step: QuestUI['steps'][number], stylingOpts?: QuestHudOptions) => {
  return (
    <UiEntity>
      <Label
        uiTransform={{
          overflow: 'hidden',
          padding: { top: 10, bottom: 10 },
          ...stylingOpts?.stepsTitle?.uiTransform
        }}
        textAlign="middle-left"
        fontSize={10}
        value={`Current step: ${step.name}`}
        {...stylingOpts?.stepsTitle?.labelProps}
      />
      {[...step.tasks].map((t) => task(t, stylingOpts))}
    </UiEntity>
  )
}

const task = (task: QuestUI['steps'][number]['tasks'][number], stylingOpts?: QuestHudOptions) => (
  <Label
    uiTransform={{
      overflow: 'hidden',
      padding: { top: 10, bottom: 10 },
      ...stylingOpts?.taskDescription?.uiTransform
    }}
    textAlign="middle-left"
    fontSize={10}
    value={`${task.done ? 'X' : 'O'} ${task.description}`}
    {...stylingOpts?.taskDescription?.labelProps}
  />
)

const uiComponent = (props?: QuestHudOptions) => (
  <UiEntity
    uiTransform={{
      ...defaultHudBox,
      ...(props?.hudBox || {})
    }}
  >
    {[...engine.getEntitiesWith(QuestComponent)].map(([_, quest]) =>
      questUI(
        {
          name: quest.name,
          steps: [...(quest.steps as unknown as QuestUI['steps'])],
          nextSteps: [...(quest.steps as unknown as QuestUI['nextSteps'])]
        },
        props
      )
    )}
  </UiEntity>
)

const defaultHudBox: UiTransformProps = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: 250,
  margin: { left: 10 },
  positionType: 'absolute',
  position: { top: '28%' }
}
