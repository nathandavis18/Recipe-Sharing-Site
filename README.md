# Mini Recipe Sharing Site

## Live Site URL: (http://roulettechassignment.s3-website-us-east-1.amazonaws.com/)[http://roulettechassignment.s3-website-us-east-1.amazonaws.com/]

This is my submission for the Roulettech Take-Home assignment. This incorporates React.js for the frontend and Django for the backend, using Django Rest Framework, Pillow, and Django CORS headers.

The Django server lives on an EC2 inside of a private subnet within a custom VPC. The Frontend lives on an S3 with a CloudFront CDN attached to it to provide lower latency.

Because the backend lives on a private subnet, there is a secondary EC2 that lives on a public subnet that acts as a bastion host, routing all information to/from the Django server. This is accomplished using nginx (pronounced engine x).

## MyApp
This is my code for the frontend React.js. There are 3 JSX pages, and the App JSX which dictates the routing for each page, and the Main JSX, which incorporates the app with the index.html file. This app incorporates React Bootstrap, as well as standard Bootstrap for styling.

## ApiController
This is the code for the API controller. Inside there are 2 subdirectories: APIController - which contains the app settings, and MyAPI, which incorporates the Django Rest Framework and contains the API views, as well as the model serializer.

## nginx.conf
This is the configuration file for nginx, which is the middle-ground server between the frontend S3 and the backend EC2. This makes sure each route is valid, and that the proper information is returned/posted.

## Usage
If you would like to clone and make changes to this repository to use as a template, feel free to do so. All IP addresses will need to be changed to use on your local server. To deploy the frontend, navigate to the myapp folder and run

    npm run build
Then you can copy the files to your S3 (or wherever you are hosting the app)

To use the backend, navigate to the ApiController folder where the manage.py file lives and run

    python3 manage.py makemigrations myapi
    python3 manage.py migrate
    python3 manage.py runserver [optional]: 0.0.0.0:[PORT]

In my case, I am running

    python3 manage.py runserver 0.0.0.0:8080

Whichever port you use will need to be open for inbound requests.

If you run into dependency issues, you may need to run

    pip install pillow djangorestframework django-cors-headers django

