
## Google spreadsheet as a data source

Read data in a Google Spreadsheet. 
* You need the spreadsheet <i>key</i>, i.e., the long sequence of characters visible in the address bar when you edit the spreadsheet in a browser.  
* The spreadsheet must be shared so that "Anyone with the link can view" the document.

Uses Google's <a href="https://developers.google.com/chart/interactive/docs/querylanguage">Query Language</a> to retrieve the data.

D3 (w/CORS):

<a href="http://bl.ocks.org/pbogden/d46d6dbfcd6f35a3ccda">This example</a> uses Google's <a href="http://enable-cors.org">CORS-enabled</a> servers (preferred approach).  

D3 (w/JSONP):

A <a href="http://bl.ocks.org/pbogden/62244b94a1da2db963db">D3 plugin</a> uses JSONP to access data via non-CORS services. But it's more difficult and JSONP brings related security concerns.

Python (3.4):
```
$ python app.py
```

Node.js:
```
$ node app.js
```
