import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import notesRouter from "./routes/notesRouter.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/ratelimiter.js";

dotenv.config({ quiet: true }); // 👈 quiet: true karne se saare tips gayab ho jayenge

// create express app
const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use(rateLimiter);

// custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

// routes
app.use("/notes", notesRouter);

// first connect to db then laod the server
connectDB().then(() => {
  // database connection
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
