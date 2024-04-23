# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json .

# Install dependencies
RUN npm install --only=production

# Copy all the files necessary for the application to run
COPY . .

# Copy your Firebase credentials JSON, but make sure it's ignored by .dockerignore if it's sensitive
# COPY path-to-your-firebase-credentials.json /usr/src/app/path-within-container
# COPY ./database-chatting-app-a928494373d5.json .


# Expose the port your app runs on
EXPOSE 5000

# Command to run your application
CMD ["node", "server.js"]