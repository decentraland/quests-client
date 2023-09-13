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
import { QuestInstanceRequired } from './client'

export type QuestUI = {
  name: string
  steps: {
    id: string
    description: string
    tasks: {
      done: boolean
      description: string
    }[]
  }[]
  nextSteps: string[]
  done: boolean
}

type LabelProps = EntityPropTypes & UiLabelProps

export type QuestHudOptions = {
  /**
   * Render the UI Automatically
   */
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
  /**
   * Quest Completion label
   */
  questCompletionLabel?: {
    uiTransform?: UiTransformProps
    label?: LabelProps
  }
  /**
   * "Show Quest Progress" and "Hide" toggle button
   */
  showHideToggleButton?: UiButtonProps
  /**
   * "Close" button when you click on "Show Tasks"
   */
  closeTasksBoxButton?: UiButtonProps
}

const QuestComponent = engine.defineComponent('dcl:quests:QuestComponent', {
  name: Schemas.String,
  steps: Schemas.Array(
    Schemas.Map({
      id: Schemas.String,
      description: Schemas.String,
      tasks: Schemas.Array(
        Schemas.Map({
          done: Schemas.Boolean,
          description: Schemas.String
        })
      )
    })
  ),
  nextSteps: Schemas.Array(Schemas.String),
  done: Schemas.Boolean
})

type HUDState = {
  hideHUD: boolean
  selectedStepId: string | null
  quest: QuestUI | null
  rawEntity: Entity | null
}

type HUDStateHandlers = [() => HUDState, (newState: Partial<HUDState>) => void]

type QuestHUD = {
  upsert: (instance: QuestInstanceRequired) => void
  getHUDComponent: () => () => ReactEcs.JSX.Element
  render: () => void
  updateOptions: (opts: QuestHudOptions) => void
  getHUDComponentWithUpdatedOptions: (newOpts: QuestHudOptions) => () => ReactEcs.JSX.Element
}

export function createQuestHUD(opts?: QuestHudOptions): QuestHUD {
  let state: HUDState = {
    hideHUD: false,
    selectedStepId: null,
    rawEntity: null,
    quest: null
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

  function getQuest() {
    return [...engine.getEntitiesWith(QuestComponent)][0][1]
  }

  return {
    upsert: (instance) => {
      const questUIData = generateQuestUI(instance)
      if (state.rawEntity) {
        QuestComponent.createOrReplace(state.rawEntity, {
          ...questUIData
        })
        state.quest = getQuest() as unknown as QuestUI
      } else {
        const questEntity = engine.addEntity()
        QuestComponent.create(questEntity, { ...questUIData })
        state.rawEntity = questEntity
        state.quest = getQuest() as unknown as QuestUI
      }
    },
    getHUDComponent: () => () => HUDPanel([getState, setState], opts),
    render: () => ReactEcsRenderer.setUiRenderer(() => HUDPanel([getState, setState], opts)),
    updateOptions: (newOptions) =>
      ReactEcsRenderer.setUiRenderer(() => HUDPanel([getState, setState], { ...opts, ...newOptions })),
    getHUDComponentWithUpdatedOptions: (newOptions) => () => HUDPanel([getState, setState], { ...opts, ...newOptions })
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

  const { selectedStepId: showTask, hideHUD, quest } = getState()

  return (
    <UiEntity
      uiTransform={{
        ...defaultHudBox,
        ...(props?.leftSidePanel || {})
      }}
    >
      {!showTask && quest ? QuestProgress(quest, handlers, props) : StepTasks(handlers, props)}
      {quest ? (
        <UiEntity uiTransform={{ display: 'flex' }}>
          {!showTask ? (
            <Button
              value={hideHUD ? 'Show Quest Progress' : 'Hide'}
              variant="primary"
              uiTransform={{
                width: !hideHUD ? 80 : 120,
                height: !hideHUD ? 20 : 30,
                margin: {
                  top: 5
                }
              }}
              onMouseDown={() => setState({ ...getState(), hideHUD: !hideHUD })}
              {...props?.showHideToggleButton}
            />
          ) : (
            <Button
              value="Close"
              variant="primary"
              uiTransform={{
                width: 80,
                height: 20,
                margin: {
                  top: 5
                }
              }}
              onMouseDown={() => setState({ ...getState(), selectedStepId: null })}
              {...props?.closeTasksBoxButton}
            />
          )}
        </UiEntity>
      ) : null}
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
          fontSize={13}
          value={`Quest: ${quest.name}`}
          {...stylingOpts?.questNameContainer?.label}
        />
      </UiEntity>
      {!quest.done ? (
        <UiEntity
          uiTransform={{
            flexDirection: 'column',
            padding: { top: 10, bottom: 10 },
            ...stylingOpts?.stepsContainer?.uiTransform
          }}
        >
          {[...quest.steps].map((s) => CurrentStep(s, handlers, stylingOpts))}
        </UiEntity>
      ) : (
        <UiEntity
          uiTransform={{
            flexDirection: 'column',
            padding: { top: 10, bottom: 10 },
            ...stylingOpts?.questCompletionLabel?.uiTransform
          }}
        >
          <Label
            uiTransform={{
              margin: { bottom: 10 }
            }}
            textAlign="middle-center"
            fontSize={12}
            value="Quest is completed!"
            {...stylingOpts?.questCompletionLabel?.label}
          />
        </UiEntity>
      )}
      {quest.nextSteps.length > 0 && !quest.done ? (
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
      ) : null}
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
        value={`Step: ${step.description}`}
        {...stylingOpts?.stepsContainer?.labels?.props}
      />
      <ShowTasksButton stepId={step.id} handlers={handlers} stylingOpts={stylingOpts} />
    </UiEntity>
  )
}

const ShowTasksButton = ({
  stepId,
  handlers,
  stylingOpts
}: {
  stepId: string
  handlers: HUDStateHandlers
  stylingOpts?: QuestHudOptions
}) => {
  const [getState, setState] = handlers
  return (
    <UiEntity uiTransform={{ display: 'flex', ...stylingOpts?.stepsContainer?.showTasksButton?.buttonUiEntity }}>
      <Button
        value="Show Tasks"
        variant="primary"
        uiTransform={{ width: 80, height: 20, margin: 4 }}
        onMouseDown={() => {
          setState({ ...getState(), selectedStepId: stepId })
        }}
        {...stylingOpts?.stepsContainer?.showTasksButton?.buttonProps}
      />
    </UiEntity>
  )
}

const StepTasks = ([getState]: HUDStateHandlers, stylingOpts?: QuestHudOptions) => {
  const { selectedStepId, quest } = getState()
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
      {selectedStepId != null && quest != null
        ? quest.steps
            .find((s) => s.id === selectedStepId)
            ?.tasks.map((t) => Task(t as unknown as QuestUI['steps'][number]['tasks'][number], stylingOpts))
        : null}
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
      {...stylingOpts?.tasksBox?.labels?.props}
    />
  </UiEntity>
)

function generateQuestUI(questInstance: QuestInstanceRequired): QuestUI {
  const steps: QuestUI['steps'] = []
  const nextSteps = []
  if (questInstance.quest.definition?.steps) {
    for (const step of questInstance.quest.definition?.steps) {
      if (questInstance.state.currentSteps[step.id]) {
        const content = questInstance.state.currentSteps[step.id]

        steps.push({
          id: step.id,
          description: step.description,
          tasks: step.tasks.map((task) => {
            return {
              description: task.description,
              done: !!content.tasksCompleted.find((t) => t.id == task.id)
            }
          })
        })

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

  return { name: questInstance.quest.name, steps, nextSteps, done: questInstance.state.stepsLeft == 0 }
}
