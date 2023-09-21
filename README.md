# ImageBlitz - An Image Gallery App

Welcome to ImageBlitz! ImageBlitz is an image gallery application designed to ignite your creativity. Authenticated users can explore a captivating collection of stunning images, effortlessly search for their favorites, and even indulge their artistic side by intuitively rearranging images with a simple drag-and-drop interface, all within the app. This README will guide you through the steps to run the project locally on your system.

## To run the app locally

## Prerequisites

Before you begin, make sure you have the following installed on your system:

[Node.js](https://nodejs.org/en): Make sure you have Node.js installed. You can download it [here](https://nodejs.org/en).

## Getting Started

Clone the repository to your local machine:

```bash
git clone https://github.com/ebukathedev/ImageBlitz.git
```

Change into the project directory:

```bash
  cd ImageBlitz
```

Install project dependencies using npm:

```bash
  npm install
```

## Configuration

### Fetching Images - Unsplash

To fetch images, ImageBlitz uses the Unsplash API. To access this API, you need to obtain an API key.

-   Visit the [Unsplash](https://unsplash.com/developers) website and register as a developer.

-   After registering, confirm your email in order to get full access to Unsplash features.

-   Once you're done with that, head back to the site and create a new application. You'll see your **API key (or access Key)**.

-   Now that you have your API key, create a `.env` file in the project root directory:

```bash
  touch .env
```

-   Open the .env file in a text editor and add your Unsplash API key:

```bash
  VITE_UNSPLASH_API_KEY = your-api-key-here
```

-   Replace `your-api-key-here` with the API key you obtained from Unsplash.

### Authentication - Firebase

To authenticate users, ImageBlitz uses the Firebase Authentication service. To access this service, you need to obtain your firebase configuration credentials.

-   Visit the [Firebase](https://firebase.google.com/) website and login using your Google account.

-   Once you're logged in, click the **Get started** button on the home page.

-   Create a project **(Disable Google Analytics)**.

-   Add Firebase to your **web app** by clicking on the markup symbol button (`</>`)

-   Add Firebase SDK using `npm`

```bash
  npm install firebase
```

-   For your **firebaseConfig** object. Open your .env file and add these variables and fill them in with the values form your config object.

```bash
VITE_FIREBASE_API_KEY= apiKey
VITE_AUTH_DOMAIN= authDomain
VITE_PROJECT_ID= projectId
VITE_STORAGE_BUCKET= storageBucket
VITE_MESSAGING_SENDER_ID= messagingSenderId
VITE_APP_ID= appId
```

-   Now that that's done, head over to your Firebase console, select Authentication under Project Shortcuts on the sidebar and click **Get started**.

-   Select **Email/Password** and enable it.

## Running the Application

After completing the setup steps, you can run ImageBlitz on your local machine.

Start the development server:

```bash
  npm run dev
```

The application should now be running at <http://localhost:5173>
