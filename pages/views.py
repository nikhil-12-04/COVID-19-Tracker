from django.shortcuts import render
from django.http import HttpResponse
import urllib.request
import json
# Create your views here.

def index(request):
    with urllib.request.urlopen('https://api.covid19api.com/summary') as response:
        source = response.read()
        data = json.loads(source)
        lines = sorted(data['Countries'], key=lambda k: k['TotalConfirmed'], reverse=True)
        context={
            'countries' : lines,
            'global' : data['Global']
        }
        return render(request,'pages/index.html',context)
def search(request):

    if request.method == "POST":
        context={}
        place= request.POST['place']
        with urllib.request.urlopen('https://api.covid19api.com/summary') as response:
            source = response.read()
            data = json.loads(source)
            for country in data['Countries']:
                if country['Country'].lower() == place.lower():
                    context=country
            data={
                'country': context,
                'value' : request.POST
            }
            return render(request,'pages/search.html',data)
    else:
        return render(request,'pages/search.html')

            

    # with urllib.request.urlopen('https://api.covid19api.com/summary') as response:
    #     source = response.read()
    #     data = json.loads(source)

    #     for d in data['Countries']:
    #         if data['Countries'] ==


    #     context={
    #         'countries' : data['Countries'],
    #         'global' : data['Global']
    #     }
    