import "dotenv/config";
import express from "express";
import monitoro from "monitoro";
import UserController from "./app/controllers/UserController.js";

const PORT = process.env.PORT || 8080;
const app = express();

const monitoroQueues = [
  {
    name: "RegistrationMail",
    hostId: "redis",
    url: "redis://localhost:6379",
  },
];
app.locals.MonitoroQueues = monitoroQueues;

app.use(express.json());

app.use("/admin/queues", monitoro);
app.post("/users", UserController.store);

app.listen(PORT, () => {
  console.log(`Server running on the PORT:${PORT}`);
  console.log(`For the UI, open http://localhost:${PORT}/admin/queues`);
  console.log("Make sure Redis is running on port 6379 by default");
});
