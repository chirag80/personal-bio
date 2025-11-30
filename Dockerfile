# Stage 1: Build the React application
FROM node:20-alpine as build

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine

WORKDIR /app

# Install 'serve' package globally to serve static files
RUN npm install -g serve

# Copy the build output from the previous stage
COPY --from=build /app/dist ./dist

# Expose port 8080 (Required by Cloud Run)
EXPOSE 8080

# Start the server on port 8080, serving the 'dist' folder
CMD ["serve", "-s", "dist", "-l", "8080"]