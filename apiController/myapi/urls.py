from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name='home'),
    path('recipe/', views.recipeList, name='recipe'),
    path('recipe/details/<int:id>', views.recipeDetails, name='details'),
    path('recipe/new', views.newRecipe, name='new')
]
