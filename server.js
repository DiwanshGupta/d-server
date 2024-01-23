const express = require("express");
require("dotenv").config();

const app = express();
const authRouter = require("./router/auth-route");
const contactRoute = require("./router/contact-route");
const serviceRoute = require("./router/service-route");
const adminRoute = require("./router/admin-route");
const connectDB = require("./utility/db");
require("dotenv").config();
const Cors = require("cors");
const corseoptions = {
  origin: "http://localhost:5173",
  methods: "GET,PUT,DELETE,POST,PATCH,HEAD,OPTIONS",
  credentials: true,
};

app.use(Cors(corseoptions));

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the mern app");
});

const port = 500 || process.env.port;
connectDB();
app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
