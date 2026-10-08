#!/bin/sh
set -eu
cd "$(dirname "$0")"
yarn pbjs -t static-module --no-beautify -w es6 --no-bundle --no-delimited --no-verify --no-comments --no-convert --no-create --no-typeurl -o ./index.js ./WAProto.proto
yarn pbjs -t static-module --no-beautify -w es6 --no-bundle --no-delimited --no-verify ./WAProto.proto | yarn pbts --no-comments -o ./index.d.ts -
node ./fix-imports.js
node ./generate-message-helpers.js
