from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer

@api_view(['GET'])
def recipeList(request):
    objects = Recipe.objects.all()
    serialize = RecipeSerializer(objects, many=True)
    return Response(serialize.data)

@api_view(['GET'])
def recipeDetails(request, id):
    recipeObj = Recipe.objects.get(pk=id)
    serialize = RecipeSerializer(recipeObj)
    return Response(serialize.data)

@api_view(['POST'])
def newRecipe(request):
    try:
        name = request.data.get('name')
        desc = request.data.get('desc')
        ingredients = request.data.get('ingredients')
        steps = request.data.get('steps')
        image = request.data.get('image')

        recipe = Recipe(name=name, description=desc, ingredients=ingredients, steps=steps)
        if(image != None):
            recipe.image = image
        recipe.save()
    except:
        return Response("Error")
    return Response("Success")