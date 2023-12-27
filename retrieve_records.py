import os
import django

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "homepage.settings")
django.setup()

from homepage.app.models import Product

def retrieve_products():
    all_products = Product.objects.all()

    for product in all_products:
        print(f"Product Name: {product.name}, Description: {product.description}")

if __name__ == "__main__":
    retrieve_products()