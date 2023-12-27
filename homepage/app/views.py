from django.shortcuts import render
from .models import Product

def index(request):
    # データベースから全てのレコードを取得
    queryset = Product.objects.values()

    data_list = list(queryset)
    data_list_keys = []

    if data_list:
        data_list_keys = data_list[0].keys

    return render(request, 'index.html', {'data_list': data_list, 'data_list_keys': data_list_keys})