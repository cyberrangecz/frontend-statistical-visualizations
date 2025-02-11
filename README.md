# CyberRangeᶜᶻ Platform Trainings Statistical Visualizations

This dashboard serves for display and exploration of collected data from multiple training instances in a single training definition.

## Running the demo application

1. Configure and run the [Training service](https://github.com/cyberrangecz/backend-training) and the [User and group service](https://github.com/cyberrangecz/backend-user-and-group) or the whole [deployment](https://github.com/cyberrangecz/devops-helm).
2. Configure the [environment.local.ts](projects/trainings-statistical-visualizations-example-app/src/environments/environment.local.ts) file, pointing to the services.
3. Install the dependencies by running `npm install`.
4. Run the app in a local environment and ssl via `npm run start`.
5. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files. The app will use a self-signed certificate, so you will need to accept it in the browser.
