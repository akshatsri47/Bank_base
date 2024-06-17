# Bank API Server

This project is a Node.js API server that provides access to bank and branch data. The API supports REST endpoints to fetch a list of banks and their branch details. It is designed to interact with a PostgreSQL database. Time taken to complete the assignment 1.5 hours

The data can be found in this https://github.com/Amanskywalker/indian_banks

## Features

- **REST API**: Provides endpoints to retrieve the list of banks and branch details for a specific bank.
- **Database**: Uses PostgreSQL for data storage.
- **Docker**: The application is Dockerized for easy deployment.
- **Clean Code**: Emphasizes clean, maintainable, and well-documented code.
- **Test Cases**: Includes test cases to ensure functionality and reliability.
- **Deployment**: Can be deployed to cloud platforms like Heroku.

## API Endpoints

### REST API Endpoints

1. **Get the Bank List**
   - **Endpoint**: `/api/banks`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all banks.
   - **Response**: JSON array of bank objects.

2. **Get Branch Details for a Specific Bank**
   - **Endpoint**: `/api/branches/:bankId`
   - **Method**: `GET`
   - **Description**: Retrieves branch details for a specific bank using its ID.
   - **Response**: JSON array of branch objects associated with the specified bank.

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (version 6 or higher)
- **PostgreSQL** database
- **Docker** (optional for containerized deployment)
- **Heroku CLI** (optional for Heroku deployment)

## Setup and Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/bank-api.git
cd bank-api
npm install
```
### 2.Setup the env
**Update the env file according to the connection string and desired Port.**
### 3. Run the Application
```bash
npm start
```
### To Run Test Cases
```bash
npm test
```
### Using the Dockerfile

### Building and Running the Docker Container

To deploy and run the application using Docker, follow these steps:

### Step 1: Build the Docker Image

Navigate to the root directory of your project where the `Dockerfile` is located. Then, build the Docker image using the following command:

```bash
docker build -t bank-api .
```
### Step:1 Run the Docker Container
```bash
docker run -p 3000:3000 --env-file .env bank-api
```
## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any changes or improvements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

