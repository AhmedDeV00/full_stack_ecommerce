Full-Stack E-commerce Website

This project is a modern and fully responsive E-commerce website built using the MERN stack (MongoDB, Express.js, React, Node.js). It provides a complete online shopping experience with features such as product listings, shopping cart functionality, user authentication, and an admin panel for product management. The website offers a seamless and interactive user experience, making it an ideal foundation for any e-commerce platform.

Link : full-stack-ecommerce-beta.vercel.app

Features:

Product Catalog: Browse a variety of products with details including price, description, and images.

Shopping Cart: Users can add items to the cart, update quantities, and proceed to checkout.

User Authentication: Secure login and registration system with JWT-based authentication.

Admin Panel: Admin users can add, edit, and delete products, with changes reflected in real-time.

Responsive Design: Fully optimized for both desktop and mobile devices.

Payment Integration: Easily extendable to include payment gateways for real transactions.

Technologies Used:

MongoDB: NoSQL database for storing products, users, and order data.

Express.js: Server-side framework for handling API requests and managing data flow.

React: Front-end framework for building a dynamic and interactive user interface.

Node.js: Back-end runtime environment for executing server-side logic.

Redux: State management for handling application state.

JWT (JSON Web Tokens): Secure user authentication and authorization. Multer: Middleware for handling image uploads for products. Axios & React Query: For handling HTTP requests and managing data fetching.

Installation

git clone https://github.com/AhmedDeV00/Full-Stack-E-commerce-Website.git
Open 2 terminals in separate windows/tabs.

Terminal 1: Setting Up Backend

cd backend
npm install
npm start

Create a file called .env in the backend folder. Inside it write this :

MONGO_URL = mongodb://127.0.0.1/ecommerce

SECRET_KEY = 'secretkey'
Instead of this link write your database link.

Terminal 2: Setting Up Frontend

cd frontend
npm install
npm start
