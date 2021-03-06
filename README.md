# ts-django-angular-boilerplate

## Installation

1. Regular users register via
${BASEURL}:${PORT}/register

2. Login via 
${BASEURL}:${PORT}/login

3. Admin
${BASEURL}:${PORT}/admin
Sample admin account:
 user: super@x.com
 pass: abc123123 


*NOTE: Requires [virtualenv](http://virtualenv.readthedocs.org/en/latest/),
[virtualenvwrapper](http://virtualenvwrapper.readthedocs.org/en/latest/) and
[Node.js](http://nodejs.org/).*

* Fork this repository.
* `$ mkvirtualenv djangular`
* `$ cd ts-django-angular-boilerplate/`
* `$ pip install -r requirements.txt`
* `$ npm install -g bower`
* `$ npm install`
* `$ bower install`
* `$ python manage.py migrate`
* `$ python manage.py runserver`

Main Page with average scores of songs
![](https://i.postimg.cc/KvcyWfqN/image.png "Main page")

Add new song entry for user
![](https://i.postimg.cc/VvV4DzZ2/image.png "New Entry")

Group Management
![](https://i.postimg.cc/LstC2KhZ/image.png "Admin")
