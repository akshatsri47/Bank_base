# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables if necessary
# ENV NODE_ENV production

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["npm", "start"]
