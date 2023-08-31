# Recipe Searcher

## Table of contents

1. DESCRIPTION
2. ABOUT
3. HOW TO INSTALL AND RUN THE APP
4. HOW TO USE THE APP

## Description

This app is a recipe searcher app. You can search for a type of food,
for example 'curry', and get an index of a variety of curries. If you click
on any of the curries, you will be presented with some more details about the curry.

## About

This app was build using Create-Next-App using the app router. The search term and
meal id are both dynamic routes that cause data to be fetched server side about
the meals.

The initial brief for this task was to have one index page, where you can click on
any item to view more details about it. I had a tough time deciding on the API to use,
so I decided that I wanted to add an additional search functionality.

Now instead of a single index page, each valid search result acts as an index page.
On these pages you can then click on individual meals to view more details. In this
way I have stayed true to the brief of the task, while keeping things interesting.

## How to install and run the app

Navigate to the project directory and run "npm install".
Run "npm run dev" to start the development server, and navigate to the
url given. You can now start using the app.

## How to use the app

Type a simple search term in the search box and click search.
Complex meals may only return one result, so you may want to
search simpler terms, such as "apple" or "curry".

Click on any result to see some more details about the meal.

Click on the burger any time to return home.
