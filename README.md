# Banking API Client
Website Link: 
[https://jpgithub1519.github.io/banking-api-client/](https://jpgithub1519.github.io/banking-api-client/)

API Links:

[https://php-banking-api.herokuapp.com/api/](https://php-banking-api.herokuapp.com/api/)

**Customers:**

[https://php-banking-api.herokuapp.com/api/customers](https://php-banking-api.herokuapp.com/api/customers)

[https://php-banking-api.herokuapp.com/api/customers/1](https://php-banking-api.herokuapp.com/api/customers/1)

[https://php-banking-api.herokuapp.com/api/customers/1/accounts](https://php-banking-api.herokuapp.com/api/customers/1/accounts)

**Accounts:**

[https://php-banking-api.herokuapp.com/api/customers](https://php-banking-api.herokuapp.com/api/accounts)

[https://php-banking-api.herokuapp.com/api/customers/1](https://php-banking-api.herokuapp.com/api/accounts/1)

[https://php-banking-api.herokuapp.com/api/customers/1/transactions](https://php-banking-api.herokuapp.com/api/accounts/1/transactions)

**Transactions:**

[https://php-banking-api.herokuapp.com/api/transactions](https://php-banking-api.herokuapp.com/api/transactions)

[https://php-banking-api.herokuapp.com/api/transactions/1](https://php-banking-api.herokuapp.com/api/transactions/1)

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

