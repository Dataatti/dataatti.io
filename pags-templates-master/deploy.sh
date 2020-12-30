#!/bin/sh
CHANGED=$(git diff-index --name-only HEAD --)

if [ -n "$CHANGED" ]; then
    echo "You have uncommited files."
    exit
fi

source .env

export NEXT_APP_DIR="/next"
export GATSBY_APP_DIR="/gatsby"

echo "Cleaning old builds"
rm -rf build

echo "Preparing env"
mkdir build
mkdir build/pagerland-gatsby
mkdir build/pagerland-landing
mkdir build/pagerland-next
mkdir build/api

echo "Building apps"
yarn landing:build
yarn gatsby:build
yarn next:build
yarn next:export

echo "Moving builds"
cp -r packages/pagerland-gatsby/public/ build/pagerland-gatsby
cp -r packages/pagerland-landing/public/ build/pagerland-landing
cp -r packages/pagerland-next/out/ build/pagerland-next

echo "Copying other dependencies"
cp -r packages/api/ build/api
cp now.json build/
cp -r .vercel build/
