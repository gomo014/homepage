from django.core.management.base import BaseCommand
from homepage.app.models import Product

class Command(BaseCommand):
    help = 'Add a new product to the database'

    def handle(self, *args, **kwargs):
        # 新しいレコードを作成して保存
        new_product = Product.objects.create(name='New Product', description='This is a new product.')