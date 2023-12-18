from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

# DUMMY DATA testing the context passed to templates

data = [
    {"Author":"Nigger", "title":"The benefits of crack", "content":"Crack is the best shit you've ever seen", "date_posted":"yesterday"},
    {"Author":"You mama", "title":"FATNESS dos and donts", "content":"Being fat is a blessing sometimes", "date_posted":"tomorrow"},
]

def home(request):
    context = {
        "posts": data
    }
    return render(request, 'home_page/home.html', context)

def about(request):
    return render(request, 'home_page/news.html')