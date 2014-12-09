
## Google spreadsheet as a data source

These demos retrieve data as CSV from a <a href="https://docs.google.com/spreadsheets/d/1Cj1SSI-GHCRhIAK-LYurwVrE0FOyOJTpUnoHNNPieYo/edit#gid=0">Google spreadsheet</a>.

To adapt a demo to another spreadsheet:

 *   You must share the spreadsheet so that "Anyone with the link can view" it.
 *   You need a unique spreadsheet *key* (the long string ```1Cj1...ieYo``` in the URL above). You can get the key from the "shareable link" when you share a spreadsheet, or from the URL in the address bar when you edit the spreadsheet in a browser.

Modify the demos with Google's <a href="https://developers.google.com/chart/interactive/docs/querylanguage">Query Language</a>.

*D3 (CORS):*

* <a href="http://bl.ocks.org/pbogden/d46d6dbfcd6f35a3ccda">This demo</a> uses Google's <a href="http://enable-cors.org">CORS-enabled</a> services. Although this should be the preferred and simpler approach, it doesn't work in Safari (for reasons I don't understand).

*D3 (JSONP):*

* <a href="http://bl.ocks.org/pbogden/62244b94a1da2db963db">This demo</a> implements a D3 plugin that uses JSONP. It works in all the browsers I've tested, and it can use non-CORS-enabled Google services. But JSONP has <a href="http://en.wikipedia.org/wiki/JSONP#Security_concerns">security issues</a>, so beware. 

*Python (3):*
```
$ python app.py
```

*Node.js:*
```
$ node app.js
```
