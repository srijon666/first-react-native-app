# First React Native App 

A React Native application built with [Expo](https://expo.dev) that features a tabbed navigation interface with multiple screens.

## Functionalities

### 1. Home Screen (index.tsx)
- **Purpose**: Main landing screen of the application
- **Features**: 
  - Displays a welcome message on a black background
  - Editable placeholder text for customization

### 2. Settings Screen (settings.tsx)
- **Purpose**: GitHub repository explorer tool
- **Features**:
  - Text input field to enter a GitHub username
  - "Fetch Repos" button that queries the GitHub API
  - Displays a randomly selected public repository from the specified user
  - Error handling for invalid usernames or users with no public repositories
  - Clean, centered UI layout with styled input and text elements

### 3. Tab Navigation (_layout.tsx)
- **Purpose**: Navigation structure for the application
- **Features**:
  - Bottom tab navigation with two main tabs:
    - **Home Tab**: Navigate to the main home screen
    - **Settings Tab**: Access the GitHub repository explorer
  - Icon-based navigation using Ionicons
  - File-based routing system

## Getting Started

1. Install dependencies

   `bash
   npm install
   `

2. Start the app

   `bash
   npx expo start
   `

3. Choose how to run the app:
   - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
   - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
   - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
   - [Expo Go](https://expo.dev/go)

## Project Structure

- pp/_layout.tsx - Tab navigation setup
- pp/index.tsx - Home screen
- pp/settings.tsx - GitHub repository explorer
- ssets/ - Application images and assets

## Tech Stack

- [React Native](https://reactnative.dev/) - Mobile app framework
- [Expo](https://expo.dev/) - React Native development platform
- [Expo Router](https://docs.expo.dev/router/introduction/) - File-based routing
- [GitHub API](https://docs.github.com/en/rest) - For fetching user repositories
- TypeScript - Type safety

## Learn More

For more information about developing with Expo, visit:

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router Guide](https://docs.expo.dev/router/introduction/)
- [Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)
