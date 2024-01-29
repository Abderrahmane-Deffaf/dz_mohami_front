# to run the front

## clone the repo

## cd to : dz_mohami_front

## run : npm i

## run : npm run dev

## you find the up running @ localhost:5173/

## to run tests : npm t

# to run the backend

## clone this repo : https://github.com/AhmedGsa/GL-Project

## cd GL-Project

## run : docker-compose build

## then : docker-compose up

## you find the app running @ localhost:8000/docs

# to fill the data base

## go to docker then to fastapi app teminal and run: python seeder/seeder.py

## to make a user admin go to docker and then to mysql terminal and enter mysql db

## the password is : root

## run this command : UPDATE user SET role="admin" WHERE id=?

## after that restart docker app and everything is set know
