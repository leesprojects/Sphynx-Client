# Sphynx-Client

Created with Angular CLI 17.0.5 - Now ^17.2.0.

# Heroku

# AWS
https://lee-stevens.dev
https://master.d361fzfl2dsxbe.amplifyapp.com


### Commands

``` SHELL
  "heroku-start": "node server.js",
  "heroku-postbuild": "ng build --configuration production",
  "heroku-logs": "heroku logs --tail --app project-sphynx-client",
```

# Useful Commands

``` SHELL
rmdir client/node_modules
```

# Project Setup

1. Create a `.env` file in the root and declare all node environment variables, environment.ts will utilise these upon compilation 

```TS
// Example .env file
NG_APP_API_URL = 'http://localhost:8000'
NG_APP_ENV_NAME = 'LocalHost Work Laptop'
```

# Project Notes

1. `/Procfile` is used by Heroku to build and start the app
2. `/netlify.toml` is used by Netlify to build and start the app
3. `/server.js` is used by ... to serve the Angular client upon a static node application
