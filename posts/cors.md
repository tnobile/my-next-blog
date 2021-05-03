---
title: 'CORS: Cross-Origin Resource Sharing'
date: '2021-05-01'
---

# CORS: qué es y cómo funciona el cross-origin resource sharing

Cuando se abre una página web, cargar datos de servidores ajenos está, en teoría, estrictamente prohibido. Sin embargo, puede haber excepciones: si los administradores de ambas webs han acordado trabajar juntos, no hay por qué evitar el intercambio. En estos casos, el llamado cross-origin resource sharing (CORS) regula la colaboración. <a href='https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/cross-origin-resource-sharing/'>Te explicamos cómo funciona.</a>

## Proxying with Express 
<a href='https://www.telerik.com/blogs/supporting-cors-by-proxying-requests-with-express'>Supporting CORS by Proxying Requests with Express</a>
```
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {

  // read query parameters
  const symbol = req.query["symbol"];
  const range = req.query["range"];

  // craft IEX API URL
  const url = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${symbol}&types=quote,chart&range=${range}`;

  request(url).pipe(res);
});
```