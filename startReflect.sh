#!/bin/sh

#kill firefox old sessions
rm ~/.mozilla/firefox/npxenqdg.default/sessionstore.js

cd ~/reflect-mark-i/
git stash
wait 5
git pull
git stash pop
python -m SimpleHTTPServer
