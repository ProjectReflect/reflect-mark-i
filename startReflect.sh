#!/bin/sh

cd ~/reflect-mark-i/
git stash
git pull
git stash pop
python -m SimpleHTTPServer
