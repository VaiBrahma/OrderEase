# OrderEase

## Problem

In the digital era, restaurant owners and customers need a seamless and efficient digital system to enhance dining experiences.

Traditional methods of managing menus, orders, and payments are often cumbersome and time-consuming, leading to inefficiencies and customer dissatisfaction.

# What is OrderEase

OrderEase is a comprehensive solution designed to simplify restaurant management and improve customer experience.

Key highlights in what OrderEase project includes:

- **Restaurant Management**: Restaurant owners can create accounts, manage menus, and track table availability.
- **Customer Interaction**: Customers can find open restaurants, view menus, place orders, and make payments seamlessly.
- **Review System**: Customers can leave reviews, and restaurant owners can receive and respond to them.

## Features

- **Account Creation**: Both restaurant owners and customers can create and manage their accounts.
- **Private Routing**: Without authenticated, you would be restricted to visit certain features that this project provides.
- **Menu Management**: Restaurant owners can add, edit, and manage their menu items.
- **Table Management**: Real-time tracking of table availability for restaurant owners.
- **Order Placement**: Customers can select a restaurant, view available menu items, and place orders by specifying their table number.
- **Payment Integration**: Customers can make payments through the platform.
- **Review System**: Customers can leave reviews, and restaurant owners can view and respond to them.

### ⚠️ Important Note

This project is deployed with the frontend on Vercel and the backend on Render. Here are the links:

- Frontend _(Links not available at the moment)_
- Backend _(Links not available at the moment)_

_Note:_ **_Please note that since the deployment uses free tiers on Vercel, Render, and MongoDB Atlas, there might be some intermittent issues_**.

# 🏁 Installation

### 💻 Running locally

To run the OrderEase project locally, follow these steps:

1. Clone or download the zip file of project repository.
2. Navigate to the project directory.
3. Navigate to ./backend.
4. Create `.env` file here and write these variables as follows:

```bash
    - PORT=5000 #must be same
    - MONGO_URI=mongodb://localhost:27017/ #you can write your own URI
    - JWT_SECRET= anything_here
    - CORS_ORIGIN=http://localhost:5173 #optional
```

5. Run this command to install node_modules.

```bash
npm install
#or
yarn install
```

8. Run backend - `npm start`
9. Navigate to ../frontend.
10. Run this command to install node_modules.

```bash
npm install
#or
yarn install
```

8. Run fronted - `npm run dev`

## Summary

OrderEase bridges the gap between restaurant owners and customers by offering a digital platform that streamlines menu management, order placement, and payment processes. It enhances operational efficiency for restaurant owners and provides a seamless dining experience for customers.
