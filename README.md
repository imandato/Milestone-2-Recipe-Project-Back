# Project Recipe-app

This app will allow you to look up recipes and add your own.

## Tech Usage

**Stack:** Postgres, Express, NodeJS

**Server-Side Rendering:** JSX

**Node Modules**: method-override, dotenv, express-react-views

## Routes

| Method | Path | Purpose |
| ------ | ------------------------------------- | ----------------------------- |
| GET | `/` | The home page |
| GET | `/recipe` | Index page listing all recipe |
| GET | `/recipe/new` | New form for a recipe |
| POST | `/recipe` | Create a new recipe |
| GET | `/recipe/:id` | Show one recipe in detail (Associated rants, new rant form, delete rant button) |
| GET | `/recipe/:id/edit` | Edit form for a recipe |
| PUT | `/recipe/:id` | Make changes to existing recipe |
| DELETE | `/recipe/:id` | Delete a recipe |

to make this repository work on your machine be sure to run 
* create .env file
* npm init -y 
* npm install express
* npm install dotenv
* npm i sequelize
* npm i pg pg-hstore

## Notes
Possible future ideas:
* creating users to save recipes 
* being able to search for recipe by ingredient
