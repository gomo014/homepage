from django.contrib import admin
from .models import Product

class ProductAdmin(admin.ModelAdmin):
    list_display = ('Oid', 'Thumbnail', 'Image', 'Title', 'Type', 'Language', 'Description', 'URL', 'GitURL', 'CreatedDate') 

admin.site.register(Product, ProductAdmin)