# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Adjust the default Nginx config to listen on port 8080 instead of 80
RUN sed -i 's/listen\s\+80;/listen 8080;/' /etc/nginx/conf.d/default.conf

# Copy built files from the build stage to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 8080 (helps documentation, but Cloud Run ignores EXPOSE at runtime)
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
