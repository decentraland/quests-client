<p align="center">
  <a href="https://decentraland.org">
    <img alt="Decentraland" src="https://decentraland.org/images/logo.png" width="60" />
  </a>
</p>
<h1 align="center">
  Quests Client - SDK7
</h1>


Quests Client for SDK7 is a [RPC Client](https://github.com/decentraland/rpc "Decentraland RPC repository") which interacts with the [Quests Server](https://github.com/decentraland/quests/ "Decentraland Quests repository") to track quests states and send events to make progress.

# Setup

Start by installing NPM dependecies:
```console
$ npm install
```

The project uses the Quests Service [proto definition](./src/protocol/quests.proto) to generate the code required to compile, so before start the development, make sure you run:
```console
$ make build
```

# Usage

This library is intended to be used in a Decentraland Scene and uses SDK7 features like user authentication to initialize the client.

## Install
Add dependency to your project
```console
$ npm add @dcl/quests-client
```
## Example

Create the Quests Client inside the `executeTask` and if the wallet based authentication is OK you will be ready to use the client to subscribe to updates or send new events that may make progress on a quest.

For this example we registered two observables to make use of the client from any other part of your code: `questEventsObservable` and `questStartObservable`
```typescript
executeTask(async () => {
  // retrieve websocket url from env
  const ws = 'wss://quests-rpc.decentraland.zone'

  // create quests client
  try {
    const client = await createQuestsClient(ws)

    questEventsObservable.on('message', async (action) => {
      await client.sendEvent({ action })
    })

    questStartObservable.on('questId', async (questId) => {
      await client.startQuest({ questId })
    })

    client.onStarted((quest) => {
      // update your state here or react to the quest started event
    })

    client.onUpdate((quest) => {
      // update your state here or react to the quest updates
    })
  } catch (e) {
    console.log(`[Your Scene] connection to ${ws} failed! ${e}`)
  }
})
```

### Scene Example: Quests Tracking

In this [repository](https://github.com/decentraland/quests-scene/ "Quests Scene repository") you may find a scene that makes use of all the Quests Client features.
