from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Recipe
from .serializers import RecipeSerializer

# Create your views here.
@api_view(['GET'])
def home(request):
    intro = 'Hey! I am Nathan Davis, a Computer Science graduate from Weber State University with a passion for learning and solving problems!'
    aboutMe = 'In my free time, I like to work on individual projects, do independent research, spend time with my family, and play some of my favorite games, like Rocket League.'
    projectInfo = 'I have built an appointment scheduling system for Weber State University to use freely and openly, for non-commercial purposes.'
    projectInfo = projectInfo + ' You can find more information about that project, as well as my other projects, from the Projects link above!'

    content = {'intro': intro, 'aboutMe' : aboutMe, 'projectInfo' : projectInfo}
    return Response(content)

@api_view(['GET'])
def recipeList(request):
    objects = Recipe.objects.all()
    serialize = RecipeSerializer(objects, many=True, context={'request': request})
    return Response(serialize.data)

@api_view(['GET'])
def recipeDetails(request, id):
    recipeObj = Recipe.objects.get(pk=id)
    serialize = RecipeSerializer(recipeObj, context={'request': request})
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