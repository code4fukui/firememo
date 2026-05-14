# firememo

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, client-side memo web application powered by Firebase Cloud Firestore.

## Preview

The user interface consists of a large text area for writing and editing memos, "Add" and "Delete" buttons, and a list of existing memos displayed below. The first line of each memo serves as its title in the list.

## Features

-   **Create, View, and Delete Memos:** Full CRUD functionality for your notes.
-   **Persistent Storage:** Memos are saved directly to your Cloud Firestore database.
-   **Simple Interface:** A clean, single-page application for quick note-taking.
-   **Dynamic List:** The memo list uses the first line of each note as its title.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

-   A [Firebase account](https://firebase.google.com).
-   A modern web browser.
-   A local web server. This is required because the app uses ES Modules, which are blocked by CORS policy when running from the `file://` protocol. We recommend [live-server](https://www.npmjs.com/package/live-server).

### Installation and Setup

1.  **Clone this repository** to your local machine.

2.  **Set up your Firebase Project:**
    a. Go to the [Firebase Console](https://firebase.google.com) and create a new project.
    b. In your project, add a new Web App.
    c. [Enable Cloud Firestore](https://firebase.google.com/docs/firestore?hl=en) for your project. You will be prompted to create a database and choose a location.
    d. From your Web App's settings (Project Settings > General > Your apps), find and copy your Firebase SDK configuration object.

3.  **Configure the application:**
    a. In the project's root directory, create a new file named `firebaseConfig.js` by copying `firebaseConfig_template.js`.
    b. Open `firebaseConfig.js` and paste the configuration object you copied from your Firebase project. It should look like this:

    ```javascript
    // Your web app's Firebase configuration
    export const firebaseConfig = {
      apiKey: "AIzaSy...",
      authDomain: "your-project-id.firebaseapp.com",
      projectId: "your-project-id",
      storageBucket: "your-project-id.appspot.com",
      messagingSenderId: "1234567890",
      appId: "1:1234567890:web:..."
    };
    ```
    *(Note: `firebaseConfig.js` is included in `.gitignore` to keep your credentials private.)*

4.  **Run the application:**
    a. If you don't have a local server, you can install one using npm:
    ```sh
    npm install -g live-server
    ```
    b. Start the server from the project's root directory:
    ```sh
    live-server
    ```
    c. Your browser should automatically open `index.html`, and the memo app will be running.

## How It Works

This project uses the Firebase SDK (v9, modular) to communicate with a Cloud Firestore database.

-   **Collection:** All memos are stored in a single collection named `list1`.
-   **Documents:** Each memo is a document within that collection. The unique ID for each document is the timestamp of when it was created.
-   **Document Data:** Each document contains two fields: `dt` (the creation timestamp) and `body` (the memo's text content).

## License

MIT License — see [LICENSE](LICENSE).