# Recipe Sharing Site

This is a basic recipe sharing site, built using React/Next.js for the frontend, and Django for the backend.

Python 3.10 is required. The python script titled 'start.py' will set up everything for you.

### Start.py

This script will check for and install all necessary dependencies, if they are not already installed.
These dependencies include:

    - Django
    - django-cors-headers
    - djangorestframework
    - pillow
    - Node.js
    - npm
    - All required node modules

Django is the backend framework and requires cors-headers and restframework for REST api calls from the react frontend. Pillow is used for storing images.

Node.js and npm are required to start the React/Next.js app.

## Getting Started

To get started, simply make sure you have Python 3.10 or later installed. You can check this by running the following command in your command prompt:

    python --version

If you don't have python installed, be sure to check out the [Python Downloads Page](https://www.python.org/downloads/).

Once python is installed, download and extract this repository. Then, navigate to the 'start.py' file, and run

    python start.py

Then you can open your browser to [http://localhost:3000](http://localhost:3000) to get started!

## apiController

This is the Django/Python backend. All data is stored in an sqlite database, and uses Django to add/retrieve data from the database. Calls are made to the Django backend from the React frontend using the JavaScript Fetch API.

## recipe-sharing-site

This is the React/Next.js frontend. This controls how the information is presented to you, the user! There are a few pages. The main page presents the list of all recipes in your database! The RecipeDetails page shows more information about a specific recipe. The NewRecipe page allows you to create a new recipe!

## Features

This app has simple CRUD features. You can create a new recipe with the Add Recipe button, or delete an existing recipe if you don't want it anymore. You can view all the recipes saved on the home page, as well as view specific details, such as ingredients, directions, and cook time information on the details page.
