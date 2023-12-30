# React Native Boilerplate
---

## Running the app
---

1. Set up the [React Native development environment](https://reactnative.dev/docs/environment-setup)
2. Install dependencies
   ```
   yarn install
   ```
3. Pod linking
   ```
   yarn pod-install
   ```
4. Create environment variable files based on the sample .env file
   - .env.dev
   - .env.uat
   - .env.prod 
5. Start the app in debug mode
   - Dev environment
      ```
      yarn android:dev
      ``` 
      ```
      yarn ios:dev
      ```
   - UAT environment
      ```
      yarn android:uat
      ``` 
      ```
      yarn ios:uat
      ```
   - Prod environment
      ```
      yarn android:prod
      ``` 
      ```
      yarn ios:prod
      ```

## Change app icon
---

1. Prepare a 512x512 app icon
2. Generate app icon. Suggest using the default name _ic_launcher_
   - [Tool for generating app icon](https://appicon.co/)
   - [Tool for generating round app icon](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=circle&effects=none&name=ic_launcher)
3. Replace the default icon files with new generated icon in following folders
   - Android:
     - `android/app/src/main/res`
     - `android/app/src/dev/res`
     - `android/app/src/uat/res`
     - `android/app/src/prod/res`
   - iOS: `ios/<project-name>/Image.xassets/AppIcon.appiconset`

## Change app launch screen
---

1. Prepare a 512x512 app icon 
2. Replace the default app icon with new app icon in `src/assets/images/logo.png`
3. Generating new app splash screen
   ```
   yarn generate-splash-screen
   ```


## Rename the project

## Features

