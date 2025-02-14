from os import system
from subprocess import Popen
from sys import version_info, exit
from platform import system as pSystem

MIN_PYTHON_VERSION = (3, 10) #Requires python 3.10

def run():
    if(version_info < MIN_PYTHON_VERSION):
        exit("Python %s.%s or later is required.\n" % MIN_PYTHON_VERSION)

    nodeV = system("node -v")
    npmV = system("npm -v")

    if(nodeV != 0 or npmV != 0): #If the node version or npm version isn't available, install them.
        if(pSystem() == 'Windows'): #If on windows, use winget
            system("winget install Schniz.fnm")
            process = Popen(["powershell", "-Command"], "fnm --use-on-cd | Out-String | Invoke-Expression && fnm install 22 && Set-ExecutionPolicy -Scope Process Unrestricted")
            stdout, stderr = process.communicate()

            if(process.returncode != 0):
                exit("Error installing node --- Exiting")

        else: #Linux and MacOS both use curl to get fnm to install node
            system("curl -o- https://fnm.vercel.app/install | bash")
            system("fnm install 22")

    system("python -m pip install -r requirements.txt")

    system("cd ./apiController && python manage.py makemigrations && python manage.py migrate")
    system("cd ./recipe-sharing-site && npm install")

    Popen("cd ./apiController && python manage.py runserver", shell=True)
    Popen("cd ./recipe-sharing-site && npm run dev", shell=True)


if __name__ == '__main__':
    run()