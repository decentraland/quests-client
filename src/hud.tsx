import { engine, Entity, Schemas } from '@dcl/sdk/ecs'
import { Color4 } from '@dcl/sdk/math'
import ReactEcs, {
  Button,
  Label,
  ReactEcsRenderer,
  UiBackgroundProps,
  UiButtonProps,
  UiEntity,
  UiLabelProps,
  UiTransformProps,
  EntityPropTypes
} from '@dcl/sdk/react-ecs'
import { QuestInstance } from './client'

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

type LabelProps = EntityPropTypes & UiLabelProps

export type QuestHudOptions = {
  autoRender?: boolean
  /**
   * Styles for the whole left side panel
   */
  leftSidePanel?: UiTransformProps
  /**
   * Quest Box Style.
   */
  questBox?: {
    uiBackground?: UiBackgroundProps
    uiTransform?: UiTransformProps
  }
  /**
   * Quest Name Container
   *
   * The label inside is also modifiable with `label`
   *
   */
  questNameContainer?: {
    uiTransform?: UiTransformProps
    label?: LabelProps
  }
  /**
   * Current Steps Container
   *
   * the labels are modifiable with `labels`
   *
   */
  stepsContainer?: {
    uiTransform: UiTransformProps
    labels?: {
      labelUiEntity?: UiTransformProps
      props?: LabelProps
    }
    showTasksButton?: {
      buttonUiEntity: UiTransformProps
      buttonProps?: UiButtonProps
    }
  }
  /**
   * Step Tasks Box
   */
  tasksBox?: {
    uiTransform?: UiTransformProps
    uiBackground?: UiBackgroundProps
    labels?: {
      labelUiEntity?: UiTransformProps
      props?: LabelProps
    }
  }
  /**
   * Next steps styling
   */
  nextSteps?: {
    nextTitleUiEntity?: UiTransformProps
    nextTitleProps?: LabelProps
    labels?: {
      labelUiEntity?: UiTransformProps
      props?: LabelProps
    }
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

type HUDState = {
  hideHUD: boolean
  showTask: QuestUI['steps'][number]['tasks'] | null
}

type HUDStateHandlers = [() => HUDState, (newState: Partial<HUDState>) => void]

type QuestHUD = {
  upsert: (instance: QuestInstance) => void
  getHUDComponent: () => () => ReactEcs.JSX.Element
  render: () => void
}

export function createQuestHUD(opts?: QuestHudOptions): QuestHUD {
  let quest: QuestUI | null = null
  let entity: Entity | null = null

  let state: HUDState = {
    hideHUD: false,
    showTask: null
  }

  function getState() {
    return { ...state }
  }

  function setState(newState: Partial<HUDState>) {
    state = {
      ...state,
      ...newState
    }
  }

  if (opts?.autoRender) {
    ReactEcsRenderer.setUiRenderer(() => HUDPanel([getState, setState], opts))
  }

  return {
    upsert: (instance: QuestInstance) => {
      const questUIData = generateQuestUI(instance)
      if (entity && quest) {
        QuestComponent.createOrReplace(entity, {
          ...questUIData
        })
        quest = { ...questUIData }
      } else {
        const questEntity = engine.addEntity()
        QuestComponent.create(questEntity, { ...questUIData })
        entity = questEntity
        quest = { ...questUIData }
      }
    },
    getHUDComponent: () => () => HUDPanel([getState, setState], opts),
    render: () => ReactEcsRenderer.setUiRenderer(() => HUDPanel([getState, setState], opts))
  }
}

const defaultHudBox: UiTransformProps = {
  flexDirection: 'column',
  justifyContent: 'flex-start',
  margin: { left: 10 },
  positionType: 'absolute',
  position: { top: '28%' }
}

export const HUDPanel = (handlers: HUDStateHandlers, props?: QuestHudOptions) => {
  const [getState, setState] = handlers

  const { showTask, hideHUD } = getState()

  return (
    <UiEntity
      uiTransform={{
        ...defaultHudBox,
        ...(props?.leftSidePanel || {})
      }}
    >
      {!showTask
        ? [...engine.getEntitiesWith(QuestComponent)].map(([_, quest]) =>
            QuestProgress(
              {
                name: quest.name,
                steps: [...(quest.steps as unknown as QuestUI['steps'])],
                nextSteps: [...(quest.nextSteps as unknown as QuestUI['nextSteps'])]
              },
              handlers,
              props
            )
          )
        : StepTasks(handlers, props)}
      <UiEntity uiTransform={{ display: 'flex' }}>
        {!showTask ? (
          <Button
            value={hideHUD ? 'Show Quest Progress' : 'Hide'}
            variant="primary"
            uiTransform={{ width: !hideHUD ? 80 : 120, height: !hideHUD ? 20 : 30, margin: 4 }}
            onMouseDown={() => setState({ ...getState(), hideHUD: !hideHUD })}
          />
        ) : (
          <Button
            value="Close"
            variant="primary"
            uiTransform={{ width: 80, height: 20, margin: 4 }}
            onMouseDown={() => setState({ ...getState(), showTask: null })}
          />
        )}
      </UiEntity>
    </UiEntity>
  )
}

const QuestProgress = (quest: QuestUI, handlers: HUDStateHandlers, stylingOpts?: QuestHudOptions) => {
  const [getState] = handlers

  return (
    <UiEntity
      uiTransform={{
        display: getState().hideHUD ? 'none' : 'flex',
        flexDirection: 'column',
        padding: 10,
        minWidth: 180,
        maxWidth: 400,
        width: 180,
        ...stylingOpts?.questBox?.uiTransform
      }}
      uiBackground={{
        color: Color4.create(0, 0, 0, 0.9),
        ...stylingOpts?.questBox?.uiBackground
      }}
    >
      <UiEntity uiTransform={{ margin: { bottom: 10 }, ...stylingOpts?.questNameContainer?.uiTransform }}>
        <Label
          textAlign="middle-left"
          fontSize={12}
          value={`Quest: ${quest.name}`}
          {...stylingOpts?.questNameContainer?.label}
        />
      </UiEntity>
      <UiEntity
        uiTransform={{
          flexDirection: 'column',
          padding: { top: 10, bottom: 10 },
          ...stylingOpts?.stepsContainer?.uiTransform
        }}
      >
        {[...quest.steps].map((s) => CurrentStep(s, handlers, stylingOpts))}
      </UiEntity>
      <UiEntity
        uiTransform={{
          display: 'flex',
          flexDirection: 'column',
          margin: { bottom: 10 },
          ...stylingOpts?.nextSteps?.nextTitleUiEntity
        }}
      >
        <Label
          uiTransform={{
            padding: { bottom: 10 },
            margin: { bottom: 10 },
            ...stylingOpts?.nextSteps?.nextTitleProps?.uiTransform
          }}
          textAlign="middle-left"
          fontSize={12}
          value="Next: "
          {...stylingOpts?.nextSteps?.nextTitleProps}
        />
        {[...quest.nextSteps].map((next) => (
          <UiEntity uiTransform={{ margin: { bottom: 5 }, ...stylingOpts?.nextSteps?.labels?.labelUiEntity }}>
            <Label textAlign="middle-left" fontSize={11} value={next} {...stylingOpts?.nextSteps?.labels?.props} />
          </UiEntity>
        ))}
      </UiEntity>
    </UiEntity>
  )
}

const CurrentStep = (step: QuestUI['steps'][number], handlers: HUDStateHandlers, stylingOpts?: QuestHudOptions) => {
  return (
    <UiEntity uiTransform={{ flexDirection: 'column', ...stylingOpts?.stepsContainer?.labels?.labelUiEntity }}>
      <Label
        uiTransform={{
          overflow: 'hidden',
          padding: { top: 10, bottom: 10 },
          ...stylingOpts?.stepsContainer?.labels?.props?.uiTransform
        }}
        textAlign="middle-left"
        fontSize={12}
        value={`Step: ${step.name}`}
        {...stylingOpts?.stepsContainer?.labels?.props}
      />
      <ShowTasksButton tasks={step.tasks} handlers={handlers} stylingOpts={stylingOpts} />
    </UiEntity>
  )
}

const ShowTasksButton = ({
  tasks,
  handlers,
  stylingOpts
}: {
  tasks: QuestUI['steps'][number]['tasks']
  handlers: HUDStateHandlers
  stylingOpts?: QuestHudOptions
}) => {
  const [getState, setState] = handlers
  return (
    <UiEntity uiTransform={{ display: 'flex', ...stylingOpts?.stepsContainer?.showTasksButton?.buttonUiEntity }}>
      <Button
        value="Show tasks"
        variant="primary"
        uiTransform={{ width: 80, height: 20, margin: 4 }}
        onMouseDown={() => {
          setState({ ...getState(), showTask: tasks })
        }}
        {...stylingOpts?.stepsContainer?.showTasksButton?.buttonProps}
      />
    </UiEntity>
  )
}

const StepTasks = ([getState]: HUDStateHandlers, stylingOpts?: QuestHudOptions) => {
  const showTask = getState().showTask
  return (
    <UiEntity
      uiTransform={{
        flexDirection: 'column',
        padding: 10,
        minWidth: 180,
        maxWidth: 400,
        width: 180,
        ...stylingOpts?.tasksBox?.uiTransform
      }}
      uiBackground={{
        color: Color4.create(0, 0, 0, 0.9),
        ...stylingOpts?.tasksBox?.uiBackground
      }}
    >
      {showTask != null ? showTask.map((t) => Task(t, stylingOpts)) : null}
    </UiEntity>
  )
}

const Task = (task: QuestUI['steps'][number]['tasks'][number], stylingOpts?: QuestHudOptions) => (
  <UiEntity
    uiTransform={{
      flexDirection: 'column',
      margin: { bottom: 10 },
      ...stylingOpts?.tasksBox?.labels?.labelUiEntity
    }}
  >
    <Label
      textAlign="middle-left"
      fontSize={12}
      value={`${task.done ? 'DONE: ' : 'TODO: '} ${task.description}`}
      uiTransform={{ padding: { bottom: 10 } }}
      {...stylingOpts?.tasksBox?.labels?.props}
    />
  </UiEntity>
)

function generateQuestUI(questInstance: QuestInstance): QuestUI {
  const steps: QuestUI['steps'] = []
  const nextSteps = []
  if (questInstance.quest.definition?.steps) {
    for (const step of questInstance.quest.definition?.steps) {
      if (questInstance.state.currentSteps[step.id]) {
        const content = questInstance.state.currentSteps[step.id]
        const newTasks = step.tasks.map((task) => {
          return {
            description: task.description,
            done: !!content.tasksCompleted.find((t) => t.id == task.id)
          }
        })
        steps.push({ name: step.description, tasks: newTasks })
        nextSteps.push(
          ...questInstance.quest.definition?.connections
            .filter((conn) => conn.stepFrom === step.id)
            .map(
              (conn) =>
                questInstance.quest.definition?.steps.find((step) => step.id === conn.stepTo)?.description ||
                '(Step without description)'
            )
        )
      }
    }
  }
  const ui = { name: questInstance.quest.name, steps, nextSteps }
  return ui
}
