import "dotenv/config";
import mongoose from "mongoose";
import { app } from "./app.js";

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("DB error:", err));
