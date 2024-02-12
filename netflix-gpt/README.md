# Netflix-gpt

- Create react app
- configured Tailwind CSS
- Create utils folder to keep constants and store
- Create Body.js to keep Login & Browse
- Set up routing for Login and Browse (npm i -D react-router-dom)
- Build a Header(Logo)
- Login Form
- Sign Up Form(we will reuse the login form)
- Form Validations (Use Formic library)
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create SignUp User Account in Firebase (https://firebase.google.com/docs/auth/web/manage-users?hl=en)
- Implemented sign in user api
- Created Redux store with User slice
- Implemented Sign Out
- Update Profile
- Bug fixes: Sign up user display Name and profile pic update
- Bug Fix: If user is not logged in, redirect /browse to login page
  If user is logged in, redirect /login page to /browse page
- unsubscribed to the onAuthStateChange callback to make sure there aren't lots of event listeners attached in the browser
- Add hard-coded values to the constants file
  -Register TMDB API and create an and get access token
- Get data from TMDB now playing movies list API
- Making custom hooks: makes the code more testable, modular, more readable, promotes separation of concerns
- Update Store with Movies 
- Planning for main and Secondary Container
- Fetch data for trailer video and update store with trailer data
- Embedded the yt video and make it autoplay and mute
- Added tailwind class to make main Container awesome

### Notes
- Try to keep App.js clean
- Body consists of Login
