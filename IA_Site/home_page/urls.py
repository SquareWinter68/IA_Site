from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home-page'),
    path('news/', views.about, name='news-page')
]