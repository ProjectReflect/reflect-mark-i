#!/bin/sh

cd ~/reflect-mark-i/
git stash
sleep 5
git pull
git stash pop
python -m SimpleHTTPServer
