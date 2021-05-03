---
title: 'GraphQL: Playground'
date: '2021-05-03'
category: 'desarrollador'
---

# Resources
* <a href='https://annexare.github.io/Countries/'>Counties List</a>
* <a href='https://countries.trevorblades.com/'>https://countries.trevorblades.com/</a>
* <a href='https://blog.graphqleditor.com/best-graphql-apis-to-play-with/'>API to play with</a>
* <a href='https://github.com/byrichardpowell/Country-Quiz'>Country-Quiz [React, TypeScript, Apollo] </a>
* <a href='https://www.apollographql.com/docs/tutorial/client/'>Apollo tutorial [React]</a>

## basically...
continents return continent list (all or with filter)
continent must be queried with code

## Queries 
```
query{
  continents { name }
}  
query{
  continents { name countries { name, code}}
}  
query{
  countries { name }
}  
query{
  countries( filter:{code:{eq:"JP"}}) { name emoji code native }
}  
query{
  country(code:"JP") { name }
}  
query{
  languages { name code native}
}
query{
  languages (filter:{code:{regex:"j.*"}}) { name code native}
}    
query{
  language(code:"es") { name code native}
}  
```

<!---
![countries](/images/graphql/graphql-query-countries.png)
--->
Countries:
<Image src='/images/graphql/graphql-query-countries.png'></Image>

Japan:
<Image src='/images/graphql/graphql-query-japan.png'></Image>

Countinents with Countries:
<Image src='/images/graphql/graphql-query-continents-w-countries.png'></Image>