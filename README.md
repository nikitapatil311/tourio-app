# Tourio App README

Welcome to **Tourio App**, a powerful tool for travelers to manage their travel destinations with ease. Whether you're planning a new adventure or want to revisit cherished memories, Tourio App has you covered.

## App Overview

Tourio App is designed to provide a user-friendly interface for managing travel places. Each place entry includes essential details such as the place's name, description, image, and location.

## Features

- **View Places:** Browse through a collection of places, each showcasing its unique name, description, image, and location.

- **Add New Place:** Easily expand your list of destinations by adding new places. Simply enter the required details, including the name, description, image, and location.

- **Edit Places:** Update existing places seamlessly. Edit the name, description, image, and location to ensure your travel plans remain accurate.

- **Delete Places:** Have a change of plans? Remove places from your list effortlessly. Deleting a place ensures your travel plans stay up to date.

## Getting Started

Visit the deployed Tourio App at [Link to the Tourio App](https://tourio-app-theta.vercel.app/) to experience its capabilities firsthand. You can perform the following actions:

1. **View Places:** Explore the pre-existing places and their details on the app's homepage.

2. **Add New Place:** Click on the "Add New Place" option and provide the necessary details to create a new travel destination.

3. **Edit Places:** Navigate to a specific place's details page and select the "Edit" option to modify its information.

4. **Delete Places:** Similarly, on a place's details page, you can opt to delete the place.

## Deployment

Tourio App is live and accessible at [Link to the Tourio App](https://tourio-app-theta.vercel.app/). You can enjoy its features directly from your web browser.

## Contributing

If you're interested in contributing to Tourio App, feel free to fork the repository, make improvements, and submit pull requests. Your contributions can help enhance the app's functionality and user experience.

## Feedback

We value your feedback! If you have any suggestions, issues, or questions regarding Tourio App, please don't hesitate to contact us.

Enjoy your journey with Tourio App, and may it make your travel planning and exploration all the more exciting!

---------------------------------------------------------------------------------------------------------------------------------------

# Recap Project 6: Tourio App

In this project you will build a Tourio App, the best friend of all travelers: it displays sights you want to visit and lets you edit them.

## Task

### Read Data

- Set up a database; use the [`lib/db.json` file](lib/db.json) to insert sample data.
- In `pages/api/index.js`, replace the `places` variable imported from `lib/db.js` with a `GET` request from your database.
- Do the same in `pages/api/[id]/index.js` for the details page.

### Create Form

- In `pages/create.js`, write the `addPlace` function to start a `POST` request.
- Write the `POST` API route in `pages/api/places/index.js`.
- Submitting the form should redirect the user to the homepage `/`.

### Update Entry

- In `pages/places/[id]/edit.js`, write the `editPlace` function to start a `PATCH` request.
- Write the `PATCH` API route in `pages/api/[id]/index.js`

### Delete Entry

- In `pages/places/[id].index.js`, write the `deletePlace` function to start a `DELETE` request.
- Write the `DELETE` API route in `pages/api/places/[id]/index.js`.

### Deploy to Vercel

- Deploy your app to Vercel and make sure the deployment can access the cloud database with the help of environment variables.

## Development

### Local development

To run project commands locally, you need to install the dependencies using `npm i` first.

You can then use the following commands:

- `npm run dev` to start the development server
- `npm run build` to create a production build
- `npm run start` to start the production build
- `npm run test` to run the tests in watch mode (if available)

> 💡 This project requires a bundler. You can use `npm run dev` to start the development server. You can then view the project in the browser at `http://localhost:3000`. The Live Preview Extension for Visual Studio Code will **not** work for this project.
