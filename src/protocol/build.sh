#!/bin/bash

# replace this with your own protoc
protoc \
		--plugin=../../node_modules/.bin/protoc-gen-ts_proto \
		--ts_proto_opt=esModuleInterop=true,returnObservable=false,outputServices=generic-definitions,fileSuffix=.gen,oneof=unions,outputPartialMethods=false, \
		--ts_proto_out="$(pwd)" -I="$(pwd)" \
		"$(pwd)/quests.proto"

sed -i -e 's/ _unknownFields: {} //g' quests.gen.ts
