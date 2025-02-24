from rest_framework import serializers
from .models import Recipe

class RecipeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Recipe
        fields = ['id', 'name', 'description', 'image', 'ingredients', 'steps', 'prepTime', 'cookTime', 'servings']