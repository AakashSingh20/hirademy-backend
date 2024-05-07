# Running the Application Locally

## Clone the Repository

Clone the repository containing your MERN backend code to your local machine.

## Install Dependencies

Navigate to the project directory in your terminal and run the following command to install the required dependencies:

```bash
npm install
```

## Set Up Environment Variables

Create a `.env` file in the root directory of your project and add the following environment variables:

```dotenv
URI=<your MongoDB connection URI>
```

## Start the Server

Run the following command to start the backend server:

```bash
npm start
```

## Using the Postman Collection

### Import the Postman Collection

Import the provided Postman collection into your Postman application. The collection should contain requests for creating, retrieving, updating, and deleting assistant data, along with a detailed documentation on how to use the endpoints.

### Set Up Requests

Update the request URLs in the Postman collection to match your local server address. For example, if your server is running locally on port 4000, the URLs should be like `http://localhost:4000/hirademy/api/assistant`.

### Test Endpoints

Use the imported requests in the Postman collection to test the various endpoints of your backend API. Here are the endpoints available:

- `POST /hirademy/api/assistant`: Create a new assistant.
- `GET /hirademy/api/assistant`: Get all assistants.
- `GET /hirademy/api/assistant/:id`: Get an assistant by ID.
- `PUT /hirademy/api/assistant/:id`: Update an assistant by ID.
- `DELETE /hirademy/api/assistant/:id`: Delete an assistant by ID.

### Deployment

The said backend is hosted as a service on render.com.

- `https://hirademy-backend.onrender.com`: URL for the service.

For using the deployed backend, just replace `http://localhost:4000` with `https://hirademy-backend.onrender.com`.
