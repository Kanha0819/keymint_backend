import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
// import authRoutes from "./routes/auth.routes.js";
// import passwordRoutes from "./routes/password.routes.js";
// import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

/* Global middlewares */
app.use(cors());
app.use(express.json());

/* Rate limiting */
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

// /* Routes */
// app.use("/api/auth", authRoutes);
// app.use("/api/password", passwordRoutes);

/* Error handler */
// app.use(errorHandler);

export default app;
