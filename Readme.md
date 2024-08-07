# HashNotes

HashNotes is a dynamic web application designed for personal and collaborative note-taking. It features a visually appealing and user-friendly interface, supporting seamless note management with advanced functionalities.

## Features

- **Responsive Design:** Fully responsive design with switchable dark and light themes.
- **User Authentication:** Secure login and signup with JSON Web Tokens (JWT).
- **Rich Text Editor:** Create and edit notes with a rich text editor.
- **Advanced Search:** Efficiently search notes with advanced functionality.
- **Tag Management:** Organize and manage notes with tags.
- **Pinned Notes:** Pin important notes for quick access.
- **Email Validation:** Ensure valid email addresses during registration.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **Deployment:** Vercel
- **APIs:** RESTful APIs
- **Other:** CSS, JavaScript, Postman

## Getting Started

To get started with HashNotes locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SoyaChunkz/Notes-App.git
   ```
2. **Navigate from the project's root directory and install dependencies for both frontend and backend:**
- For frontend
    ```bash
   cd frontend/HashNotes
   npm install
   ```

- For backend
    ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables:**
- Create a .env file in the backend directory and add your environment variables such as MongoDB URI and JWT secret.
    ```bash
    ACCESS_TOKEN_SECRET=your_jwt_secret
    MONGODB_CONNECTION_STRING=your_mongodb_uri
    ```

- In the frontend add your backend's base url in constants.js
    ```bash
    cd frontend/HashNotes/src/utils/constants.js
    ```

    ```bash
    export const BASE_URL = "http://localhost:8000"
    ```


4. **Run the application:**
- Start the backend server:
    ```bash
    cd backend
    npm start
    ```

- Start the frontend server:
    ```bash
    cd frontend/HashNotes
    npm run dev
    ```

5. **Access the application:**
- Open your browser and go to http://localhost:5173 to see the application in action.



