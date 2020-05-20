#!/usr/bin/env sh

set -e
yarn build

cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:WeberLong/weberlong.github.io.git master
git push -f git@github.com:WeberLong/blog.git master:gh-pages

cd -
