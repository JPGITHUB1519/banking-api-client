#!/bin/bash

# Remember commiting all your changes before deployment

# Run the webpack production build
# npm run build

# Deploy dist folder to github pages from the development or master branch
# git subtree push --prefix dist origin gh-pages

# forced push to gh-pages branch (this is needed)
git checkout development
git subtree split --prefix dist -b gh-pages  # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages         # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages                       # delete the local gh-pages because you will need it: ref
