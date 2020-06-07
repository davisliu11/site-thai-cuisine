#!/bin/bash
set -a

git add .
git commit -a -m "update"
git push
aws s3 sync . s3://site-thai-cuisine --exclude "*.git/*"
