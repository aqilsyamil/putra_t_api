#!/usr/bin/env bash
if [ -z "$(ls -A .nx/cache)" ]; then
  echo "No cache"
  npx nx build
  npx nx docker-build
  docker run -p 3000:3000 -t putra-t-api
else
  echo "Has cache"
  rm -rf .nx/cache
  npx nx build
  npx nx docker-build
  docker run -p 3000:3000 -t putra-t-api
fi
