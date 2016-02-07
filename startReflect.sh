#!/bin/sh

cd ~/reflect-mark-I/
git stash
git pull
git stash pop
python -m SimpleHTTPServer
