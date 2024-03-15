from django.shortcuts import render
from .models import Product
from django.http import HttpResponse
from rest_framework import generics
from .models import Product
from .serializers import ProductSerializer

def index(request):
    # データベースから全てのレコードを取得
    queryset = Product.objects.values()
    
    data_list, data_list_keys = process_data_list(queryset)

    return render(request, 'index.html', {'data_list': data_list, 'data_list_keys': data_list_keys})

def search(request):
    if request.method == 'POST':
        search_query = request.POST.get('search_query', '')
        # 検索条件にあったデータを取得
        queryset = Product.objects.filter(name=search_query).values()
        
        data_list, data_list_keys = process_data_list(queryset)
        
        # テンプレートに検索結果データを渡す
        return render(request, 'index.html', {'data_list': data_list, 'data_list_keys': data_list_keys})
    else:
        return render(request, 'index.html')

# 検索結果データ処理用メソッド
def process_data_list(queryset):
    data_list = list(queryset)
    data_list_keys = []

    if data_list:
        data_list_keys = data_list[0].keys

    return data_list, data_list_keys

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer