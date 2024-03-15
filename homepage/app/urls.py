from django.urls import path
from . import views
from .views import ProductList

urlpatterns = [
    path('', views.index, name='index'),
    path('search/', views.search, name='search'),
    path('api/products/', ProductList.as_view(), name='product-list')
]