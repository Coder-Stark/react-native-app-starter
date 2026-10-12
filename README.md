# ReactNativeAppStarter

A reusable React Native CLI boilerplate built with JavaScript, JSX, and React Navigation. It provides a clean feature-based directory structure and a working bottom-tab navigation setup with three starter screens: **Home, Explore, and Profile**.

Use this repository as a starting point for new React Native applications instead of recreating the project structure and navigation setup each time.

## Features

- React Native CLI with native Android and iOS projects
- JavaScript and JSX — no TypeScript required
- React Navigation bottom tabs
- Three starter screens: Home, Explore, and Profile
- Feature-based directory structure
- Centralized application navigation
- Global provider wrapper using `SafeAreaProvider`
- Android emulator development workflow
- Easy to extend with authentication, APIs, state management, and reusable components

## Tech Stack

- React Native `0.87.1`
- React `19.2.3`
- React Navigation `7`
- React Native Screens
- React Native Safe Area Context
- JavaScript / JSX
- npm
- Android SDK and Gradle

## Project Structure

```text
ReactNativeAppStarter/
├── android/
├── ios/
├── rough/
│   ├── directoryTree.js
│   └── HowIDoIt.txt
├── src/
│   ├── App.jsx
│   ├── app/
│   │   ├── navigation/
│   │   │   ├── AppNavigator.jsx
│   │   │   └── BottomTabs.jsx
│   │   └── providers/
│   │       └── AppProviders.jsx
│   ├── features/
│   │   ├── explore/
│   │   │   └── screens/
│   │   │       └── ExploreScreen.jsx
│   │   ├── home/
│   │   │   └── screens/
│   │   │       └── HomeScreen.jsx
│   │   └── profile/
│   │       └── screens/
│   │           └── ProfileScreen.jsx
│   └── shared/
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── app.json
├── App.js
├── babel.config.js
├── Gemfile
├── index.js
├── jest.config.js
├── metro.config.js
├── package.json
├── package-lock.json
└── README.md
```

> `node_modules/` and `.bundle/` are omitted from this tree because they are generally local or tool-generated directories. Keep them out of Git unless there is a specific reason to track their contents.

## Architecture

### `src/app/`

Contains application-level configuration and composition.

- `navigation/AppNavigator.jsx` — root navigation container.
- `navigation/BottomTabs.jsx` — Home, Explore, and Profile tab configuration.
- `providers/AppProviders.jsx` — central location for global React providers.

### `src/features/`

Contains feature-specific screens and future feature logic.

- `features/home/` — Home screen.
- `features/explore/` — Explore screen.
- `features/profile/` — Profile screen.

Each feature can grow independently as the application develops.

### `src/shared/`

Reserved for reusable components, hooks, utilities, constants, and other resources shared across multiple features. It can remain empty until shared functionality is needed.

### Root `App.js` and `src/App.jsx`

- `App.js` re-exports the application component from `src/App.jsx`.
- `src/App.jsx` composes the global providers and root navigator.

## Prerequisites

Install and configure the following:

- [Node.js](https://nodejs.org/) — version `22.11.0` or later, as specified by the project's `package.json`.
- npm
- [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment)
- Android Studio and Android SDK for Android development
- An Android emulator or a physical Android device
- Xcode and CocoaPods for iOS development on macOS

## Creating the Project from Scratch

These steps document how the starter was created. **Skip this section when cloning the existing repository.**

### 1. Initialize a React Native CLI project

```powershell
npx @react-native-community/cli@latest init ReactNativeAppStarter
```

Move into the newly created directory:

```powershell
cd ReactNativeAppStarter
```

### 2. Configure the Android SDK

Create or edit:

```text
android/local.properties
```

Example for a Windows machine:

```properties
sdk.dir=C:/Users/YOUR_WINDOWS_USERNAME/AppData/Local/Android/Sdk
```

Replace `YOUR_WINDOWS_USERNAME` with your Windows account folder name and adjust the path if your Android SDK is installed elsewhere.

**Important:** `local.properties` is machine-specific. Do not commit your personal SDK path to the repository.

### 3. Install React Navigation

```powershell
npm install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

### 4. Create the source directory structure

Create the folders and files shown in the [Project Structure](#project-structure) section.

Implement the application entry, providers, navigation, and three screen placeholders.

### 5. Verify dependencies

```powershell
npm ls react-native @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
```

Confirm that the required packages are installed and the dependency tree does not report missing or invalid dependencies.

## Getting Started with an Existing Clone

### 1. Clone the repository

```powershell
git clone <YOUR_REPOSITORY_URL>
cd ReactNativeAppStarter
```

Replace `<YOUR_REPOSITORY_URL>` with your actual Git repository URL.

### 2. Install dependencies

```powershell
npm install
```

This installs the dependencies declared in `package.json` and uses `package-lock.json` to resolve the project dependency tree.

### 3. Configure the Android SDK

Ensure Android Studio and the Android SDK are installed.

Create `android/local.properties` if it does not already exist:

```properties
sdk.dir=C:/Users/YOUR_WINDOWS_USERNAME/AppData/Local/Android/Sdk
```

Use your own SDK path. This file should remain local to your machine.

## Running on Android

### 1. List available emulators

```powershell
emulator -list-avds
```

Example output:

```text
medium_phone
```

The available emulator names depend on your Android Studio configuration.

### 2. Start an emulator

```powershell
emulator -avd medium_phone
```

Replace `medium_phone` with a name returned by `emulator -list-avds`.

Alternatively, start an emulator using Android Studio's Device Manager.

### 3. Verify the connected device

```powershell
adb devices
```

Wait until the emulator appears with the status `device`.

### 4. Start Metro

Open the first terminal in the project root:

```powershell
npm start
```

Keep this terminal running.

### 5. Build and launch the app

Open a second terminal in the project root:

```powershell
npx react-native run-android
```

Alternatively, use the configured npm script:

```powershell
npm run android
```

The first Android build may take several minutes while Gradle compiles the native application and its dependencies.

## Full Android Clean and Rebuild

Use this procedure when troubleshooting stale build artifacts or after making changes that require a clean native rebuild.

### 1. Stop the current build if necessary

Stop the running Metro or Gradle process using `Ctrl + C` in its terminal.

### 2. Clean the Android build

From the project root:

```powershell
cd android
.\gradlew.bat clean
cd ..
```

This invokes Gradle's standard `clean` task to remove generated build outputs.

### 3. Restart Metro with a reset cache

In the first terminal, from the project root:

```powershell
npx react-native start --reset-cache
```

Leave Metro running.

### 4. Rebuild and launch Android

In a second terminal, from the project root:

```powershell
npx react-native run-android
```

If the build fails, inspect the first meaningful error in the Gradle output before changing dependency versions or native build settings.

## Available npm Scripts

| Command | Description |
|---|---|
| `npm start` | Starts the Metro development server |
| `npm run android` | Builds and launches the Android application |
| `npm run ios` | Builds and launches the iOS application on macOS |
| `npm test` | Runs Jest tests |
| `npm run lint` | Runs ESLint |

## Adding a New Feature

Create a feature directory under `src/features/`.

For example:

```text
src/features/settings/
└── screens/
    └── SettingsScreen.jsx
```

Then import the new screen into `src/app/navigation/BottomTabs.jsx` and register it with the appropriate navigator.

Keep feature-specific code inside its own feature folder. Move code into `src/shared/` when it becomes genuinely reusable across multiple features.

## Customization Guide

| Requirement | File to update |
|---|---|
| Change bottom tabs | `src/app/navigation/BottomTabs.jsx` |
| Change root navigation | `src/app/navigation/AppNavigator.jsx` |
| Add global providers | `src/app/providers/AppProviders.jsx` |
| Change Home screen | `src/features/home/screens/HomeScreen.jsx` |
| Change Explore screen | `src/features/explore/screens/ExploreScreen.jsx` |
| Change Profile screen | `src/features/profile/screens/ProfileScreen.jsx` |

## Git Guidelines

Before pushing changes:

```powershell
git status
git add .
git commit -m "Initial React Native boilerplate"
git push
```

Before the first push, ensure that:

- `node_modules/` is excluded by `.gitignore`.
- `android/local.properties` is excluded by `.gitignore`.
- Generated build artifacts are not committed unnecessarily.
- `package.json` and `package-lock.json` are committed.
- No private API keys, credentials, or other secrets are included.

## License

Add a `LICENSE` file if you intend to distribute this boilerplate publicly. Choose a license that matches how you want others to use, modify, and distribute the project.
