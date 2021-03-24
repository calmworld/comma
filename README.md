# Comma
### Under Construction
Full Stack CSV File Parser Built With RESTful CRUD API 

## Tech Stack:
- Node.js
- Express 
- PostgreSQL
- React
- Bootstrap

## API Dependencies/Modules:
- ```sequelize```
- ```pg```
- ```fast-csv```
- ```fs```
- ```cors```

## Client Dependencies/Modules:
- ```react-router-dom```
- ```axios```
- ```bootstrap```
- ```react-icons```

## Build Environment:
MacOS Big Sur 11.2.3


## To run API BackEnd:
- Create a PostgreSQL DataBase ```gmachines```
- Inside ```gmachines``` DB, Create ```clients``` table
- Cd into API directory and Run ```npm install```
- To see a list of clients, open ```http://localhost:3003/api/csv/clients``` your browser
- To create a list of clients, open a POST route ```http://localhost:3003/api/csv/clients``` in Postman

## To Run Client FrontEnd:
- Cd into client directory and run ```npm install```
- Run ```npm start``` in your terminal to start React client

## Client Navigation:
- Click on Clients in the nav bar to see a comprehensive list of all clients.
- Click on Add Client in the nav bar to create a new client.
- Click on Totals in the nav bar to select an aggregated view of clients, projects, billable hours and billable amounts.

## Client Totals:
- To group a category click on the map-pin sign next to each category. You can choose more than one.
- Grouped categories are marked with an Asterisk sign next to their corresponding category.
- To expand on each grouped category, click on the DoubleRight or double down angle signs to explore those categories further. 