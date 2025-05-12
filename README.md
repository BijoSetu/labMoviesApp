# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


# Movie Tube

This mobile application is developed using the React library with TMDB and dynamoDb as the backend

🔐 Authentication - Using Authentication Api s from AWS apigateway


## 🧱 Project Structure

- api/ – Contains Apis for interacting with TMDB and AWS
- components/ – UI components to be used in pages
- pages/ – Actual pages that render the components 

## 📦 Features

- Home Page shows the list of movies that are available now
- Favourites Page - Users can favourite a movie and it will be shown on the favourites page
- Upcoming movies page - List of upcoming movies fetched from tmdb
- Popular movies page - List of popular movies 
- Tv Series - Shows a list of TV series
- Actors - Shows list of popular actors
- Reviews - Reviews added from the favourites movie page will be shown here 
- Fantasy movies page - Users can add a fantasy movie and it will be shown on the page
- Pagination - Pagination added for Home page and Upcoming movies page
- Logout and Login option - Users can authenticate and login using valid credentials
- Cloudfront - Website Hosted in cloudfront
- AWS S3 hosted - Website hosted in AWS s3 


## 🚀 Getting Started

1. Repository:
   bash
   https://github.com/BijoSetu/labMoviesApp.git
   
