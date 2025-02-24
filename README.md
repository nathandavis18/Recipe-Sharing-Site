# Recipe Sharing Site

This is a basic recipe sharing site, built using React/Next.js for the frontend, and Django for the backend.

Python 3.10 is required. The python script titled 'start.py' will set up everything for you.

<hr>

## Screenshots

#### Home Page to see all recipes
![Screenshot 2025-02-23 213731](https://github.com/user-attachments/assets/fd837fe8-344e-4249-820f-8f49a0a4c23f)

#### Recipe Details page
![Screenshot 2025-02-23 213740](https://github.com/user-attachments/assets/e5d61ed9-228b-4481-b7b5-0a8f90e79aa1)

#### Creating a new recipe page
![Screenshot 2025-02-23 213752](https://github.com/user-attachments/assets/8d1b85e3-be10-4939-a6cf-e558752f0921)

<hr>

### Start.py

This script will check for and install all necessary dependencies, if they are not already installed.
These dependencies include:

    - Django
    - django-cors-headers
    - djangorestframework
    - pillow
    - All required node modules

Django is the backend framework and requires cors-headers and restframework for REST api calls from the react frontend. Pillow is used for storing images.

Node.js and npm are required to start the React/Next.js app.

## Getting Started

To get started, simply make sure you have Python 3.10 or later installed, as well as Node.js. You can check this by running the following command in your commands prompt:

    python --version
    node -v
    npm -v

If you don't have python or node installed, be sure to check out the [Python Downloads Page](https://www.python.org/downloads/) and the [Node.js Downloads Page](https://nodejs.org/en/download).

> **_NOTE:_** It is recommended you use the node.js installer, rather than the winget command if on Windows. If you choose to use the winget command, make sure you add the node installation to your PATH. The node installation with this method is usually located under %APPDATA%/fnm/node-versions/v22.14.0/installation

Once python and node is installed, download and extract this repository. Then, navigate to the 'start.py' file, and run

    python start.py

Then you can open your browser to [http://localhost:3000](http://localhost:3000) to get started!

## apiController

This is the Django/Python backend. All data is stored in an sqlite database, and uses Django to add/retrieve data from the database. Calls are made to the Django backend from the React frontend using the JavaScript Fetch API.

## recipe-sharing-site

This is the React/Next.js frontend. This controls how the information is presented to you, the user! There are a few pages. The main page presents the list of all recipes in your database! The RecipeDetails page shows more information about a specific recipe. The NewRecipe page allows you to create a new recipe!

## Features

This app has simple CRUD features. You can create a new recipe with the Add Recipe button, or delete an existing recipe if you don't want it anymore. You can view all the recipes saved on the home page, as well as view specific details, such as ingredients, directions, and cook time information on the details page.
