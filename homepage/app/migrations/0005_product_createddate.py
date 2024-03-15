# Generated by Django 5.0 on 2024-02-24 23:40

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app", "0004_product_url"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="CreatedDate",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
    ]
