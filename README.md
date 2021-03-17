# Banking API Client
Website Link: 
[https://jpgithub1519.github.io/banking-api-client/](https://jpgithub1519.github.io/banking-api-client/)


## Github Pages Deployment

npm script for deployment:

```npm run deploy```

or do it manually:

```
  npm run build
  commit -m "deployment message"
  git subtree push --prefix dist origin gh-pages
```

**Deploying Dist folder to github pages guide**: 

From the current branch(development or master) run:

```git subtree push --prefix dist origin gh-pages```

