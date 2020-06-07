#!/bin/bash
set -a

ga .
git commit -a -m "update"
git push
aws s3 sync . s3://site-thai-cuisine --exclude "*.git/*"
