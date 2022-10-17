# Project Recipe-app

This app will allow you to look up recepies and save your favorate ones.

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
| POST | `/recipe/:id/rant` | Add rant to a recipe |
| DELETE | `/recipe/:id/rant/:rantId` | Delete a rant |