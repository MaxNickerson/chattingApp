# Chat Application

This real-time chat application allows users to communicate within a chatroom environment. It utilizes Node.js, Socket.IO, and Firebase Firestore for real-time messaging capabilities, with secure authentication and data handling provided by Firebase Admin.

## Features

- Real-time messaging
- Multiple chat rooms
- Secure user authentication
- Responsive web design

## Technologies Used

- **Node.js**: Server-side JavaScript runtime environment
- **Socket.IO**: Enables real-time, bidirectional communication between web clients and servers
- **Firebase Firestore**: NoSQL database for storing and synchronizing data in real time
- **Firebase Admin**: Provides backend access to Firebase services
- **Docker**: Containerization platform used to package the application and its dependencies

## Getting Started

These instructions will guide you through setting up the project on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/products/docker-desktop)
- A Firebase project and a Firebase service account key
- [gcloud](https://cloud.google.com/sdk/docs/install)

### Installing

Follow these steps to get your development environment running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/chat-app.git

2. Navigate to the project directory and install NPM packages:
   cd chat-app
   npm install

3. Set up Firebase Admin SDK:
   Obtain your Firebase service account key file from the Firebase console:
      Go to Firebase Console
      Select your project
      Navigate to Project settings > Service accounts
      Click Generate new private key and save the file as firebase-admin-key.json in your project directory
   Ensure your .dockerignore file excludes the firebase-admin-key.json to avoid pushing your credentials to the repository.

4. Replace every instance of database-chatting-app-a928494373d5.json with your respective service account json file

5. Build the application using docker and send it to the cloud
   docker build -t your-app .
   docker tag your-app gcr.io/your-google-cloud-project/your-app
   docker push gcr.io/your-google-cloud-project/your-app



