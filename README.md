🍃 AgriConnect: Community Food Resource & Waste Reduction Platform

🌐 **Live Demo:** [https://agri-connect-mern1.vercel.app/](https://agri-connect-mern1.vercel.app/)

🎯 Project Overview & Mission

AgriConnect is a full-stack web application designed to tackle food insecurity and reduce food waste by creating a direct, efficient link between local food surplus producers (Donors) and charitable food distribution organizations (Recipients).

We streamline the donation process, ensuring safe, nutritious food reaches vulnerable communities and doesn't end up in landfills, directly contributing to Sustainable Development Goal (SDG) 2: Zero Hunger.

✨ Key Features

Real-Time Listing: Donors (farms, bakeries, restaurants) can quickly post available food items, specifying type, quantity, and expiry dates.

Role-Based Views: Dedicated dashboards for Donors (posting and editing) and Recipients (claiming).

Seamless API: A robust Express.js API layer handles CRUD operations for listings and user authentication.

Modern Frontend: Built with React and styled using Tailwind CSS for a responsive, clean user experience.

MongoDB Integration: Flexible Mongoose schemas for structured data storage.

JWT Authentication: Secure user authentication with role-based access (donor, recipient, volunteer).

React Router: Client-side routing for seamless navigation between pages.

🛠️ Technology Stack

AgriConnect is built on the MERN stack, utilizing modern tools for development:

Backend (server)

Technology

Role

Node.js / Express.js

Server runtime and RESTful API framework

MongoDB / Mongoose

Database and Object Data Modeling (ODM)

JWT

JSON Web Tokens for authentication

bcryptjs

Password hashing

express-validator

Input validation and sanitization

cors

Cross-Origin Resource Sharing

dotenv

Environment variable management

Frontend (client)

Technology

Role

React

Component-based UI library

Vite

Next-generation frontend tooling (fast bundling and development)

React Router

Client-side routing

Tailwind CSS

Utility-first styling framework

shadcn/ui

Pre-built UI components

Lucide React

Icon library

🚀 Getting Started

Follow these steps to set up the project locally.

1. Prerequisites

Ensure you have the following installed:

Node.js (LTS version)

npm or yarn

MongoDB (running locally or a cloud instance like MongoDB Atlas)

2. Installation & Setup

Clone the repository:
git clone https://github.com/jeffmoses/AgriConnect_mern1.git
cd AgriConnect

Install dependencies for the client:

cd client
npm install

Install dependencies for the server:

cd ../server
npm install

3. Configure Environment Variables

Create a .env file in the server/ directory with the following content:

PORT=5000
MONGODB_URI=(input either your mongodb compass or atlas adress here)
JWT_SECRET=(super-secure-random-key-for-agriconnect-jwt)

4. Running the Application

Start the server:

cd server
npm start

In a new terminal, start the client:

cd client
npm run dev

Component

Port

Description

Server (API)

http://localhost:5000

Node/Express API, handles MongoDB connection and authentication.

Client (App)

http://localhost:5173

React frontend application.

The frontend will automatically proxy API requests to the backend (via vite.config.js).

📁 Project Structure

AgriConnect/
├── .gitignore
├── package-lock.json
├── README.md
├── client/                     # React Frontend
│   ├── bun.lockb
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── vite.config.js
│   ├── public/
│   │   ├── icons8-natural-food-50.png
│   │   ├── placeholder.svg
│   │   └── robots.txt
│   └── src/
│       ├── App.css
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       ├── components/
│       │   └── ui/              # shadcn/ui components
│       │       ├── accordion.jsx
│       │       ├── alert-dialog.jsx
│       │       ├── alert.jsx
│       │       ├── aspect-ratio.jsx
│       │       ├── avatar.jsx
│       │       ├── badge.jsx
│       │       ├── breadcrumb.jsx
│       │       ├── button.jsx
│       │       ├── calendar.jsx
│       │       ├── card.jsx
│       │       ├── carousel.jsx
│       │       ├── chart.jsx
│       │       ├── checkbox.jsx
│       │       ├── collapsible.jsx
│       │       ├── command.jsx
│       │       ├── context-menu.jsx
│       │       ├── dialog.jsx
│       │       ├── drawer.jsx
│       │       ├── dropdown-menu.jsx
│       │       ├── form.jsx
│       │       ├── hover-card.jsx
│       │       ├── input-otp.jsx
│       │       ├── input.jsx
│       │       ├── label.jsx
│       │       ├── menubar.jsx
│       │       ├── navigation-menu.jsx
│       │       ├── pagination.jsx
│       │       ├── popover.jsx
│       │       ├── progress.jsx
│       │       ├── radio-group.jsx
│       │       ├── resizable.jsx
│       │       ├── scroll-area.jsx
│       │       ├── select.jsx
│       │       ├── separator.jsx
│       │       ├── skeleton.jsx
│       │       ├── slider.jsx
│       │       ├── sonner.jsx
│       │       ├── toaster.jsx
│       │       ├── toggle-group.jsx
│       │       ├── toggle.jsx
│       │       ├── tooltip.jsx
│       │       ├── use-toast.js
│       ├── hooks/
│       │   ├── use-mobile.jsx
│       │   ├── use-toast.js
│       ├── integrations/
│       │   └── api/
│       │       └── client.js       # API client using fetch
│       ├── lib/
│       │   └── utils.js
│       └── pages/
│           ├── Auth.jsx
│           ├── CreateListing.jsx
│           ├── Dashboard.jsx
│           ├── EditListing.jsx
│           ├── Index.jsx
│           ├── Landing.jsx
│           └── NotFound.jsx
└── server/                     # Node/Express Backend
    ├── package-lock.json
    ├── package.json
    ├── server.js               # Main entry point
    ├── middleware/
    │   └── auth.js             # JWT authentication middleware
    ├── models/
    │   ├── Listing.js          # Mongoose schema for listings
    │   └── User.js             # Mongoose schema for users
    └── routes/
        ├── auth.js             # Authentication routes
        └── listings.js         # Listings CRUD routes

🛣️ Roadmap

Future development goals include:

[ ] Add a Geospatial Map View to visualize listings based on location.

[ ] Implement push notifications for new listings.

[ ] Add analytics dashboard for admins.

[ ] Develop mobile app version using React Native.

📜 License

Distributed under the MIT License. See the repository for more information.
