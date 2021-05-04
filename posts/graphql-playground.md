---
title: 'GraphQL: Playground'
date: '2021-05-03'
category: 'desarrollador'
---

# Resources
* <a href='https://annexare.github.io/Countries/'>Counties List</a>
* <https://countries.trevorblades.com/'>
* <https://github.com/trevorblades/countries/tree/master/examples/react>
* <a href='https://blog.graphqleditor.com/best-graphql-apis-to-play-with/'>API to play with</a>
* <a href='https://github.com/byrichardpowell/Country-Quiz'>Country-Quiz [React, TypeScript, Apollo] </a>
* <a href='https://www.apollographql.com/docs/tutorial/client/'>Apollo tutorial [React]</a>
* <https://graphql.org/swapi-graphql>
* <https://api.spacex.land/graphql/>
* <https://docs.github.com/en/graphql/overview/explorer>
* <https://www.howtographql.com/graphql-js/0-introduction/>

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


Starwards:
{
  allPlanets {
    planets {name orbitalPeriod gravity climates diameter}}
}
{
  allFilms { films {title director producers releaseDate}}
}
{
  allFilms { films {title director producers releaseDate 
    planetConnection {planets {name}}}}
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