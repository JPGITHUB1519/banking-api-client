#!/bin/bash

# Remember commiting all your changes before deployment

# Run the webpack production build
# npm run build

# Deploy dist folder to github pages from the development or master branch
git subtree push --prefix dist origin gh-pages
