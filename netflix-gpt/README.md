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
- unsubscribed to the onAuthStateChange callback to make sure there aren't lots of event listeners attached in the browser whenever useEffect of Header is called. => clean the useEffect
- Add hard-coded values to the constants file
- Register TMDB API and create an and get access token
- Get data from TMDB now playing movies list API and put it into redux store
- Making custom hooks: makes the code more testable, modular, more readable, promotes separation of concerns
- Update Store with Movies 
- Planning for main and Secondary Container
- Fetch data for trailer video and update store with trailer data
- Embedded the yt video and make it autoplay and mute
- Added tailwind class to make main Container awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App
- Get Open AI Api Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

### Notes
- Try to keep App.js clean
- Body consists of Login
- While showing errors in Login page, you can use State variables or **useRef** Hook
```
const email = useRef(null);
<input 
  ref={email}
  type="text"
  placeholder="Email Address"
  className="p-4 my-4 w-full bg-gray-700 rounded-lg"
/>
```
- Fetch value from useRef using **email.current.value**
- In Form, it tries to submit the form automatically. If we don't have onSubmit() it refreshes the page. To avoid it write e.preventDefault()
- useRef is used to reference some field(like input)


### Firebase configuration
- Create a project using web
- If you want to deploy in firebase, enable hosting.
- You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.
- Sign in to Google with your Gmail id
```firebase login```
- Initiate your project. Run this command from your app's root directory.
```firebase init```
- **Project setup** 
1. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys => So that deployment is in your control.
2. Use an existing project
- **Hosting Setup**
1. Keep **build** as your public directory.
2. Configure as single-page app as **No** and Set up automatic build  deploy with Github as **No**.
- When you're ready, deploy your web app
- Put your static files (e.g. HTML, CSS, JS) in your app's deploy directory (the default is 'public'). Then, run this command from your app's root directory:
```firebase deploy```
- After deploying, view your app at netflixgpt-934e4.web.app
- Start with Authentication
- You can add Email/Password, Google, Microsoft, Facebook, Github logins.

### Integrating auth
```
const auth = getAuth();
```
- This code is used everywhere for using Firebase. So instead of writing multiple times, write it in firebase.js and use it anywhere.

### Store to keep user details
- Once user signs in, store the user data in Redux store.
- (npm i @reduxjs/toolkit) and (npm i react-redux) to use Redux store
- Instead of using dispatch in SignUp and SignIn multiple times, we will use **OnAuthStateChanged**. this API is called whenever user Signs In, Signs Up, Sign Out then authentication state changed.
- Call this API only once when the component is rendered.
- Use Hooks(dispatch) on top on the component.

### Navigation
- use **useNavigate** Hook.
- Navigation can happen only in children level, not at top level.
- We should use navigate instead of window href.

### Bug issues resolved
- We were facing issue when logged in it should redirect to Browse page and if not logged in it should redirect to Login page.
- Also if not logged in, it should not able to access Browsepage and redirect to Login.
- To fix this we need add auth to navigate according to it's status.
- We have **onAuthStateChanged** which tells if user is logged in or not.
- Earlier we had kept it in Body but we were not able to navigate inside it as RouterProvider should be in parent level to be able to navigate.
- Thus we can shift onAuthStateChanged to Header as it is accessible from both Login and Body.
- When Header component unloads, it will unsubscribe the event.

### StrictMode
- React does extra rendering for checking any inconsistency between the calls.
```
<React.StrictMode>
  <App />
</React.StrictMode>
```

### Integrating Trailer
- While attaching the Iframe, convert the attributes into camelCase for React.
- We can add trailer by using useState or using redux store. Prefer the later one.
- To autoplay keep it mute, use "?autoplay=1&mute=1"