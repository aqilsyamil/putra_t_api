#!/usr/bin/env bash
if [ -z "$(ls -A .nx/cache)" ]; then
  echo "No cache"
  npx prisma db pull
  npx prisma generate
  npx nx build
else
  echo "Has cache"
  rm -rf .nx/cache
  npx prisma db pull
  npx prisma generate
  npx nx build
fi
