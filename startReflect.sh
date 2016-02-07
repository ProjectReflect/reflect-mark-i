#!/bin/sh

cd ~/reflect-mark-i/
git stash

# Check for internet
((count = 100))                            # Maximum number to try.
while [[ $count -ne 0 ]] ; do
    ping -c 1 8.8.8.8                      # Try once.
    rc=$?
    if [[ $rc -eq 0 ]] ; then
        ((count = 1))                      # If okay, flag to exit loop.
    fi
    ((count = count - 1))                  # So we don't go forever.
done

git pull
git stash pop
python -m SimpleHTTPServer
