from os import system
from subprocess import Popen, PIPE
from sys import version_info, exit
from platform import system as pSystem

MIN_PYTHON_VERSION = (3, 10) #Requires python 3.10

def run():
    if(version_info < MIN_PYTHON_VERSION):
        exit("Python %s.%s or later is required.\n" % MIN_PYTHON_VERSION)

    system("python -m pip install -r requirements.txt")

    system("cd ./apiController && python manage.py makemigrations && python manage.py migrate")
    system("cd ./recipe-sharing-site && npm install")

    Popen("cd ./apiController && python manage.py runserver", shell=True)
    Popen("cd ./recipe-sharing-site && npm run dev", shell=True)


if __name__ == '__main__':
    run()