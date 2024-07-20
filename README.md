# Simple Chat Application

## Overview

This project is a simple chat application divided into backend and frontend components. The frontend is built using React and JavaScript, while the backend is powered by Django and Django Channels. The application allows users to send messages, which are then broadcasted to a group channel and displayed in real-time.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [How It Works](#how-it-works)
  - [WebSockets](#websockets)
  - [Channel Layer](#channel-layer)
  - [Django Channels](#django-channels)
  - [Redis](#redis)
- [Running the Application](#running-the-application)
- [Conclusion](#conclusion)

## Features

- Real-time messaging using WebSockets.
- Backend powered by Django and Django Channels.
- Frontend built with React.
- Message broadcasting to all connected clients via Redis.

## Technologies Used

- **Backend**: Django, Django Channels
- **Frontend**: React, JavaScript
- **Message Broker**: Redis

## Setup

### Backend Setup

1. **Clone the Repository**:
    ```sh
    git clone <repository-url>
    cd <repository-directory>
    ```

2. **Create a Virtual Environment and Install Dependencies**:
    ```sh
    python -m venv venv
    source venv/bin/activate # On Windows use `venv\Scripts\activate`
    pip install -r requirements.txt
    ```

3. **Run Migrations**:
    ```sh
    python manage.py migrate
    ```

4. **Start the Django Development Server**:
    ```sh
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the Frontend Directory**:
    ```sh
    cd frontend
    ```

2. **Install Dependencies**:
    ```sh
    npm install
    ```

3. **Start the React Development Server**:
    ```sh
    npm start
    ```

## How It Works

### WebSockets

WebSockets provide a full-duplex communication channel over a single, long-lived connection between the client and the server. This enables real-time data exchange between the client and the server, which is crucial for chat applications.

### Channel Layer

The channel layer is an abstraction that allows Django to support asynchronous protocols like WebSockets. It enables communication between different parts of the Django application and supports features like group messaging.

### Django Channels

Django Channels extend Django to handle WebSockets and other asynchronous protocols. They allow Django applications to support real-time communication by adding a layer between Django’s synchronous view system and the asynchronous WebSockets.

### Redis

Redis serves as the backing store for the channel layer. It is used for message brokering, allowing messages to be passed between different instances of the Django application. Redis ensures that messages are broadcasted to all connected clients in real-time.

## Running the Application

Just run this executable to Build and Run Redis, Set Up the Backend, Set Up the Frontend (but you need to do this teps manualy [Start the Django Development Server](#Start the Django Development Server),[Start the React Development Server](#Start the React Development Server) ): ./run.sh

#### 1. Build and Run Redis

1. **Build the Redis Docker Image**:
   Create a custom Docker image for Redis using the Dockerfile in your project directory:
   ```sh
   docker build -t my-redis .
   ```

2. **Run the Redis Container**:
   Start a Redis container from the custom image:
   ```sh
   docker run -d -p 6379:6379 --name redis-container my-redis
   ```

#### 2. Set Up and Run the Backend

1. **Create a Virtual Environment**:
   Set up a virtual environment for the Django backend:
   ```sh
   python -m venv .venv
   ```

2. **Activate the Virtual Environment**:
   Activate the virtual environment:
   ```sh
   source .venv/bin/activate
   ```

3. **Install Backend Dependencies**:
   Install the required Python packages for the Django backend:
   ```sh
   pip install ./backend/requirements.txt
   ```

4. **Apply Database Migrations**:
   Set up the database by applying migrations:
   ```sh
   python ./backend/manage.py migrate
   ```

##### Start the Django Development Server
   Launch the Django development server:
   ```sh
   python ./backend/manage.py runserver
   ```

#### 3. Set Up and Run the Frontend

1. **Navigate to the Frontend Directory**:
   Change to the directory containing the React frontend:
   ```sh
   cd frontend/
   ```

2. **Install Frontend Dependencies**:
   Install the required Node.js packages for the React frontend:
   ```sh
   npm install
   ```

##### Start the React Development Server
   Launch the React development server:
   ```sh
   npm start
   ```

#### 4. Access the Application

Open your web browser and go to `http://localhost:3000` to interact with the chat application.

## Conclusion

This simple chat application demonstrates how to build a real-time messaging system using Django Channels, Redis, and React. By leveraging WebSockets and the channel layer, the application can broadcast messages to all connected clients in real-time.