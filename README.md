
## Google spreadsheet as a data source for Python.

Retrieves data from the first sheet of the Google Spreadsheet uniquely identified by the spreadsheet <i>key</i> -- a string -- the long sequence of characters visible in the address bar when editing the spreadsheet in a browser.

The script uses Google's <a href="https://developers.google.com/chart/interactive/docs/querylanguage">Query Language</a> to retrieve the data.

The Python (3.4) script:
```
import requests 

endpoint = "https://docs.google.com/a/google.com/spreadsheets/d/"
key = "1CNaI_i1BiNbtN482S8343kClvpTlO3nLA5wFl1aot6k"
query = "/gviz/tq?tqx=out:csv&gid=0"
url = endpoint + key + query

r = requests.get(url);

print("status code:  ", r.status_code)
print("content-type: ", r.headers['content-type'])
print("text: ", r.text);
```
Run it:
```
$ python try.py
status code:   200
content-type:  text/csv; charset=utf-8
text:  "year","make","model","length","","",""
"1977","Ford","E350","2.34","","",""
"2000","Mercury","Cougar","2.38","","",""
```
