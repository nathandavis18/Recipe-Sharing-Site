from django.db import models

# Create your models here.

def recipeFileName(id, filename):
    return 'uploads/{0}_{1}'.format(id, filename)
class Recipe(models.Model):
    def __str__(self):
        return self.name
    
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    image = models.ImageField(upload_to = recipeFileName, default='default.jpg')
    ingredients = models.TextField(max_length=500)
    steps = models.TextField(max_length=5000)
