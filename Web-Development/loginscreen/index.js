import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 5000;
const formData = [];

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("Received data from the form: ");
  console.log("Email:", email);
  console.log("Password:", password);

  res.sendFile(__dirname + "/public/Login.html");
});

app.listen(port, () => {
  console.log(`Server is live at port ${port}`);
});
