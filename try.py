import requests 

endpoint = "https://docs.google.com/a/google.com/spreadsheets/d/"
key = "1CNaI_i1BiNbtN482S8343kClvpTlO3nLA5wFl1aot6k"
query = "/gviz/tq?tqx=out:csv&gid=0"
url = endpoint + key + query

r = requests.get(url);

print("status code:  ", r.status_code)
print("content-type: ", r.headers['content-type'])
print("text: ", r.text);

