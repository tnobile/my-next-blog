---
title: 'Github pages: automate deploy and ci/cd'
date: '2021-04-12'
category: 'desarrollador'
---

## gh-pages

```
npm install gh-pages –save-dev

edit package.json

"homepage": http://tnobile.github.io/my-react-citites

"scripts {
 //...
 "predeploy": "npm run build",
 "deploy" :  "gh-pages –d build"
}

npm run dploy

```



## error
The "path" argument must be of type string. Received undefined
➜  my-react-crud git:(master) node node_modules/gh-pages/bin/gh-pages.js -d build
Published


## git hub actions
```
name: CI/CD

on:
  push:
    branches: [ master ]
    
jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - name: Checkout repository
      uses: actions/checkout@v2.3.1

    - name: Set up Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}

    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
    
    - name: Deploy 🚀
      uses: JamesIves/github-pages-deploy-action@3.7.1
      with:
          branch: gh-pages # The branch the action should deploy to.
          folder: build # The folder the action should deploy.
```