# Pectarale.com.ua

    $ bundle install
    $ bundle install --without production - without production gems
    $ bundle exec rake db:migrate
    $ bundle exec rake db:test:prepare
    $ bundle exec rspec spec/

If the tests don't pass, it means there may be something wrong with your system. If they do pass, then you can debug your code by comparing it with the reference implementation.

GIT

	$ git remote add origin https://github.com/<username>/<app_name>.git
	$ git push -u origin master

	$ git add .
	$ git commit -m "Initialize repository"
	$ git push

	$ git pull - pull repository to server

Heroku

    $ rake assets:precompile
    $ RAILS_ENV=production bundle exec rake assets:precompile
    $ git push heroku master
    $ heroku rake db:migrate
    $ heroku restart
    $ heroku open
