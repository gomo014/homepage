# Generated by Django 5.0 on 2024-02-24 23:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app", "0005_product_createddate"),
    ]

    operations = [
        migrations.AlterField(
            model_name="product",
            name="CreatedDate",
            field=models.DateTimeField(),
        ),
    ]