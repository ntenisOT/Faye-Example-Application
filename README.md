Faye Example Application on Heroku
==================================

The code for this example was taken from http://railscasts.com/episodes/260-messaging-with-faye and https://github.com/ryanb/railscasts-episodes/tree/master/episode-260/

I just fixed a small jQuery problem.

Clone repository
----------------

Browse to your desirable application directory:
	
	cd to_directory

eg:
	
	cd my_faye_app
	
Clone from GitHub:
	
	git clone git://github.com/ntenisOT/Faye-Example-Application.git
	
Initializing git and first commit
---------------------------------

Initialize git:
	
	git init
	
Add files:
	
	git add .
	
First Commit:
	
	git commit -m "First Commit"
	
Creating a new app on Heroku
----------------------------

Install Heroku gem if you do not have already installed it:
	
	gem install heroku

Creating a new app running on Cedar stack:
	
	heroku create app_name --stack cedar
	
Changing Files:
---------------

Change the following files with your Faye Server URL:

1. app / views / layouts / application.html.erb
2. app / helpers / application_helper.rb	
3. public / javascripts / application.js

	
Push code to Heroku
-------------------

Re-add files to git:
	
	git add .
	
Re-commit:
	
	git commit -m "Second commit"
	
Push files to Heroku:
	
	git push heroku master
	

Go to you provided by Heroku link and check that your application is working!

Read More - More Examples
-------------------------

Faye Example Application: No need to run it on Cedar! 

	http://fayeexample.heroku.com/ 
	
	Source code: 

	https://github.com/ntenisOT/Faye-Example-Application 

Faye Server on Heroku Cedar without RedisToGo: 
	
	http://fayeserverexample.herokuapp.com/ 
	
	Source code: 

	https://github.com/ntenisOT/Faye-Heroku-Cedar 

Faye Server on Heroku Cedar with RedisToGo: 

	http://fayeredis.herokuapp.com 

	Source code: 
	
	https://github.com/ntenisOT/Faye-Heroku-Cedar-RedisToGo

References
----------
* Faye - http://faye.jcoglan.com/
* Heroku - http://heroku.com
* Railcast Episode 260 - http://railscasts.com/episodes/260-messaging-with-faye
* Railcast Episode 260 Source code - https://github.com/ryanb/railscasts-episodes/tree/master/episode-260/

Special Thanks
--------------
* James Coglan - Faye Developer
