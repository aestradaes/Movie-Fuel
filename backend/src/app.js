require("dotenv").config();
// Logger
const logger = require("./utils/logger");
// Express
const express = require('express');


// Third party express middleware
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Routers
const reviewRouter = require("./controllers/reviewsRouter");
const authRouter = require("./controllers/authRouter");
const movieRouter = require("./controllers/movieRouter")
const userRouter = require("./controllers/userController");

// Define port number
const PORT = process.env.PORT || 4000;

const server = express();
// CORS
const corsoptions = {
  origin: "*",
  optionsSuccessStatus: 200,
}
server.use(cors(corsoptions))

// CORS middleware
server.use(cors({ allowedOrigins: "*" }));

// cookie parsing middleware
server.use(cookieParser());

// middleware to parse JSON from req
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Using router
server.use('/reviews', reviewRouter);
server.use('/MovieFuel', movieRouter);
server.use("/auth", authRouter);
server.use('/user', userRouter);
server.listen(PORT, () => {
  logger.info(`Server is listening on Port: ${PORT}`);
});
