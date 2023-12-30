# React Native Boilerplate

## Running the app

1. Set up the [React Native development environment](https://reactnative.dev/docs/environment-setup)
2. Install dependencies
   ```
   yarn install
   ```
3. Pod linking
   ```
   yarn pod-install
   ```
4. Create environment variable files based on the sample `.env` file
   - `.env.dev`
   - `.env.uat`
   - `.env.prod` 
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

1. Prepare a 512x512 app icon 
2. Replace the default app icon with new app icon in `src/assets/images/logo.png`
3. Generating new app splash screen
   ```
   yarn generate-splash-screen
   ```
## Multiple environments
Flavors/Schemes are used to create different versions of the app.
In this project, usually 3 different builds are created:

- Development
- UAT
- Production

### .env files for each configuration
- `.env.dev`
- `.env.uat`
- `.env.prod`

### Android
1. Associating builds with .env files in `android/app/build.gradle`
   ```
   project.ext.envConfigFiles = [
      devdebug: ".env.dev",
      devrelease: ".env.dev",
      uatdebug: ".env.uat",
      uatrelease: ".env.uat",
      proddebug: ".env.prod",
      prodrelease: ".env.prod"
   ]
   ```
2. Define product flavors in `android/app/build.gradle`
   ```
   productFlavors {
         dev {
            minSdkVersion rootProject.ext.minSdkVersion
            applicationId "com.gooner007.reactnativeboilerplate"
            targetSdkVersion rootProject.ext.targetSdkVersion
            resValue "string", "build_config_package", "com.gooner007.reactnativeboilerplate"
        }
         uat {
            minSdkVersion rootProject.ext.minSdkVersion
            applicationId "com.gooner007.reactnativeboilerplate"
            targetSdkVersion rootProject.ext.targetSdkVersion
            resValue "string", "build_config_package", "com.gooner007.reactnativeboilerplate"
         }
         prod {
            minSdkVersion rootProject.ext.minSdkVersion
            applicationId "com.gooner007.reactnativeboilerplate"
            targetSdkVersion rootProject.ext.targetSdkVersion
            resValue "string", "build_config_package", "com.gooner007.reactnativeboilerplate"
         }
    }
   ```
3. Create scripts on `package.json`
   ```
   "android:dev": "react-native run-android --mode=devdebug",
   "android:dev-release": "react-native run-android --mode=devrelease",
   "android:dev-build": "cd android && ./gradlew app:bundleDevRelease -PversionName=$VERSION_NAME -PversionCode=$VERSION_CODE",
   "android:uat": "react-native run-android --mode=uatdebug",
   "android:uat-release": "react-native run-android --mode=uatrelease",
   "android:uat-build": "cd android && ./gradlew app:bundleUatRelease -PversionName=$VERSION_NAME -PversionCode=$VERSION_CODE",
   "android:prod": "react-native run-android --mode=proddebug",
   "android:prod-release": "react-native run-android --mode=prodrelease",
   "android:prod-build": "cd android && ./gradlew app:bundleProdRelease -PversionName=$VERSION_NAME -PversionCode=$VERSION_CODE",
   ```
4. Manage resource files
   - `android/app/src/dev`
   - `android/app/src/uat`
   - `android/app/src/prod`

### iOS
1. Define schemes
   ![ios schemes](https://github.com/huuphat1908/react-native-boilerplate/assets/62057004/8d16be25-5ac1-4a33-a718-4cb78ba6273a)
2. Associating schemes with .env files in `Pre-actions`
   ![pre-action schemes](https://github.com/huuphat1908/react-native-boilerplate/assets/62057004/1177129e-f6e2-4bfa-a323-ad64d1be11d3)
3. Manage targets in `Podfile`
   ```
   abstract_target 'ReactNativeBoilerplateCommonPods' do
   config = use_native_modules!

   # Flags change depending on the env values.
   flags = get_default_flags()

   use_react_native!(
      :path => config[:reactNativePath],
      # Hermes is now enabled by default. Disable by setting this flag to false.
      :hermes_enabled => flags[:hermes_enabled],
      :fabric_enabled => flags[:fabric_enabled],
      # Enables Flipper.
      #
      # Note that if you have use_frameworks! enabled, Flipper will not work and
      # you should disable the next line.
      :flipper_configuration => flipper_config,
      # An absolute path to your application root.
      :app_path => "#{Pod::Config.instance.installation_root}/.."
   )

   target 'ReactNativeBoilerplateDev' do
   end
   
   target 'ReactNativeBoilerplateUAT' do
   end
   
   target 'ReactNativeBoilerplate' do
   end

   target 'ReactNativeBoilerplateTests' do
      inherit! :complete
      # Pods for testing
   end

   post_install do |installer|
      # https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L197-L202
      react_native_post_install(
         installer,
         config[:reactNativePath],
         :mac_catalyst_enabled => false
      )
      __apply_Xcode_12_5_M1_post_install_workaround(installer)
   end
   end
   ```
4. Create scripts on `package.json`
   ```
   "ios:dev": "react-native run-ios --mode=Debug --scheme=ReactNativeBoilerplateDev",
   "ios:dev-release": "react-native run-ios --mode=Release --scheme=ReactNativeBoilerplateDev",
   "ios:uat": "react-native run-ios --mode=Debug --scheme=ReactNativeBoilerplateUAT",
   "ios:uat-release": "react-native run-ios --mode=Release --scheme=ReactNativeBoilerplateUAT",
   "ios:prod": "react-native run-ios --mode=Debug --scheme=ReactNativeBoilerplate",
   "ios:prod-release": "react-native run-ios --mode=Release --scheme=ReactNativeBoilerplate",
   ```
## Rename the project


## Libraries
- [Zustand](https://github.com/pmndrs/zustand) - Client state management
- [Tanstack Query](https://github.com/TanStack/query) - Server state management
- [React Navigation](https://github.com/react-navigation/react-navigation) - Navigation library
- [React Native Bootsplash](https://github.com/zoontek/react-native-bootsplash) - Splash screen generator
- [React Native Config](https://github.com/lugg/react-native-config) - Multiple environments management
- [React Native MMKV](https://github.com/mrousavy/react-native-mmkv) - Local storage
- [React Native Keychain](https://github.com/oblador/react-native-keychain)- Secure storage
- [React Hook Form](https://github.com/react-hook-form/react-hook-form) - Form management
- [Zod](https://github.com/colinhacks/zod) - Validation schema management
- [i18next](https://github.com/i18next) - Internationalism
- [Lucide React Native](https://github.com/lucide-icons/lucide) - Icon library
- [React Native Unistyles](https://github.com/jpudysz/react-native-unistyles) - Styling utility
- [React Native Size Matters](https://github.com/nirsky/react-native-size-matters) - Scaling utility

