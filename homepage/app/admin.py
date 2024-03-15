from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('Oid', 'Thumbnail', 'Title', 'Type', 'Language', 'URL', 'CreatedDate') 

admin.site.register(Product, ProductAdmin)