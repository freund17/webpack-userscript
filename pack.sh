#!/bin/sh

webpack -p --optimize-dedupe
cat userscript.txt > bundle.user.js
cat bundle.js >> bundle.user.js
rm bundle.js
