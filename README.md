# Sample React Application


## Description
Build your React application on top of this sample application.
Its purpose is to provide a starting point for your React application.
It has Highly Customizable and Reusable Components like Button, Not Found, LoadingSpinner.
It has best folder structure to organize your application.
It uses tailwind dark mode and light mode.
It has Redux to manage the state of your application.
It has a few utility functions to perform common tasks.

## Installation
1. Clone the repository.
2. Install dependencies by running `npm install`.
3. Start the application by running `npm start`.

## Folder Structure
```
src/
|-- components/
|   |-- common/
|   |   |-- Button.jsx
|   |   |-- Input.jsx
|   |   |-- ...
|   |
|   |-- layout/
|   |   |-- Header.jsx
|   |   |-- Footer.jsx
|   |   |-- ...
|   |
|   |-- specific/
|   |   |-- JobCard.jsx
|   |   |-- UserProfile.jsx
|   |   |-- ...
|   |
|   |-- ...
|
|-- assets/
|   |-- images/
|   |   |-- logo.png
|   |   |-- background.jpg
|   |   |-- ...
|   |
|   |-- fonts/
|   |   |-- roboto.woff
|   |   |-- opensans.ttf
|   |   |-- ...
|   |
|   |-- styles/
|   |   |-- main.css
|   |   |-- variables.scss
|   |   |-- ...
|   |
|   |-- icons/
|   |   |-- star.svg
|   |   |-- heart.png
|   |   |-- ...
|   |
|   |-- other/
|   |   |-- pdfs/
|   |   |   |-- document.pdf
|   |   |   |-- ...
|   |
|   |   |-- audio/
|   |   |   |-- sound.mp3
|   |   |   |-- ...
|   |
|   |   |-- ...
|
|-- pages/
|   |-- Home.jsx
|   |-- About.jsx
|   |-- ...
|
|-- data/
|   |-- sampleData.json
|   |-- ...
|
|-- utils/
|   |-- utilityFunctions.js
|   |-- ...
|
|-- redux/
|   |-- actions/
|   |   |-- authActions.js
|   |   |-- jobSeekerActions.js
|   |   |-- recruiterActions.js
|   |   |-- collegeActions.js
|   |   |-- ...
|   |
|   |-- reducers/
|   |   |-- authReducer.js
|   |   |-- jobSeekerReducer.js
|   |   |-- recruiterReducer.js
|   |   |-- collegeReducer.js
|   |   |-- ...
|   |
|   |-- constants/
|   |   |-- actionTypes.js
|   |   |-- ...
|   |
|   |-- store/
|   |   |-- index.js
|   |   |-- ...
|
|-- services/
|   |-- api/
|   |   |-- jobseekerApi.js
|   |   |-- recruiterApi.js
|   |   |-- collegeApi.js
|   |   |-- ...
|   |
|   |-- auth/
|   |   |-- authService.js
|   |   |-- ...
|   |
|   |-- notifications/
|   |   |-- notificationService.js
|   |   |-- ...
|   |
|   |   |-- ...
|
|-- App.jsx
|-- index.js
|-- ...

```