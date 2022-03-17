# KYPO Trainings Statistical Visualizations

## How to use json-server as mock backend with provided dummy data

1.  Install json-server `npm install -g json-server`.
3.  Run the server with provided parameters `json-server -w ./utils/json-server/db.js --routes ./utils/json-server/routes.json --middlewares ./utils/json-server/server.js`.
4.  Run `npm install`.
5.  Run the app in local environment and ssl `ng serve --configuration local --ssl` and access it on `https://localhost:4200`.
