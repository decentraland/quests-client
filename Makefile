
ifneq ($(CI), true)
LOCAL_ARG = --local --verbose --diagnostics
endif

test:
	node_modules/.bin/jest --detectOpenHandles --colors --runInBand $(TESTARGS)

test-watch:
	node_modules/.bin/jest --detectOpenHandles --colors --runInBand --watch $(TESTARGS)

build:
	@mkdir -p src/protocol
	protoc \
  --plugin=./node_modules/.bin/protoc-gen-dcl_ts_proto \
  --dcl_ts_proto_opt=esModuleInterop=true,returnObservable=false,outputServices=generic-definitions,fileSuffix=.gen \
  --dcl_ts_proto_out="./src/protocol" \
  -I="./node_modules/@dcl/protocol/public" \
  -I="./node_modules/@dcl/protocol/proto" \
  "./node_modules/@dcl/protocol/proto/decentraland/quests/definitions.proto"
	./node_modules/.bin/tsc -p tsconfig.json && ./node_modules/.bin/tsc -p tsconfig.cjs.json

.PHONY: build test
