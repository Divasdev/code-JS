#!/bin/bash
# Easy commit script
# Usage: ./easy_commit.sh [optional message]

# Add all changes
git add .

# Check if a message was provided as an argument
if [ -z "$1" ]; then
    echo "Enter commit message: "
    read message
else
    message="$1"
fi

# Commit
git commit -m "$message"

# Push
git push origin main
