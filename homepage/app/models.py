from django.db import models

class Product(models.Model):
    Oid = models.CharField(max_length=100, primary_key=True)
    Thumbnail = models.ImageField()
    Title = models.CharField(max_length=100)
    Type = models.CharField(max_length=100)
    Language = models.TextField()
    URL = models.URLField()
    CreatedDate = models.DateField()

    def __str__(self):
        return self.Title