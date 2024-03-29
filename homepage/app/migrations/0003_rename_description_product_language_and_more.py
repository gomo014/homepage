# Generated by Django 5.0 on 2024-02-11 16:22

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("app", "0002_product_remarks"),
    ]

    operations = [
        migrations.RenameField(
            model_name="product",
            old_name="description",
            new_name="Language",
        ),
        migrations.RenameField(
            model_name="product",
            old_name="name",
            new_name="Title",
        ),
        migrations.RemoveField(
            model_name="product",
            name="id",
        ),
        migrations.RemoveField(
            model_name="product",
            name="remarks",
        ),
        migrations.AddField(
            model_name="product",
            name="Oid",
            field=models.CharField(
                default=0, max_length=100, primary_key=True, serialize=False
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="product",
            name="Thumbnail",
            field=models.ImageField(default=1, upload_to=""),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="product",
            name="Type",
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
