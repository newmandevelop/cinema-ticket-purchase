# Cinema Ticket Purchase Platform

This is a Cinema Ticket Purchase Platform implemented using Express, MongoDB, and TypeScript.

## Table of Contents
- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Cinema Ticket Purchase Platform is a web API that allows users to create cinemas, purchase specific seats, and purchase the first two free consecutive seats in a cinema. It provides RESTful endpoints to interact with the system.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (v18.17.0 or compatible)
- MongoDB installed and running

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/newmandevelop/cinema-ticket-purchase.git
   ```

2. Navigate to the project directory:

   ```bash
   cd cinema-ticket-purchase
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

### Running the Application

1. Start the Express server:

   ```bash
   npm start
   ```

2. The server will be running at `http://localhost:3000` by default. You can customize the port in the `.env` file if needed.

## API Endpoints

- Create a cinema with N seats:
  - Endpoint: `POST /cinemas/create`
  - Request Body: JSON object with the number of seats (`seats`).
  - Response: Cinema ID or error message.

- Purchase a specific seat in a cinema:
  - Endpoint: `POST /seats/{cinemaId}/purchase`
  - Replace `{cinemaId}` with the actual cinema ID.
  - Request Body: JSON object with the seat number (`seatNumber`).
  - Response: Purchased seat or error message.

- Purchase the first two free consecutive seats in a cinema:
  - Endpoint: `POST /seats/{cinemaId}/purchase-consecutive`
  - Replace `{cinemaId}` with the actual cinema ID.
  - Response: List of purchased seats or error message.

## Testing

You can test the API endpoints using Postman or by writing automated tests using a testing library like Mocha and Supertest. Ensure MongoDB is running and properly configured for testing.

To run automated tests:

```bash
npm test
```

## Deployment

You can deploy this application to a hosting service of your choice. Don't forget to set up environment variables for production, and consider using a process manager like PM2 for running the server in a production environment.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork the repository and create a pull request with your changes.

## License

This project is licensed under the [MIT License](LICENSE).
```

Make sure to replace placeholders like `{cinemaId}` with the actual values and customize the README according to your project's specific details and needs.
