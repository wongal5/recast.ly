#!/bin/bash
npm install
npm install -g babel-cli
babel --watch . --out-dir compiled --presets=es2015,react --ignore=node_modules,compiled --source-maps inline