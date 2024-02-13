from django.shortcuts import render
from django.http import HttpResponse
from .models import News
# Create your views here.

# DUMMY DATA testing the context passed to templates

data = [
    {"Author":"Nigger", "title":"The benefits of crack", "content":"Crack is the best shit you've ever seen", "date_posted":"yesterday"},
    {"Author":"You mama", "title":"FATNESS dos and donts", "content":"Being fat is a blessing sometimes", "date_posted":"tomorrow"},
]

def home(request):
    data = News.objects.all()
    context = {
        "articles": list(reversed(list(data)))[:3]
    }
    return render(request, 'home_page/home.html', context)

def about(request):
    data = News.objects.all()
    context = {
        "articles": list(reversed(list(data)))[:3]
    }
    return render(request, 'home_page/news.html', context)