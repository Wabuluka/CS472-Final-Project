import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Hello from Express with TypeScript!" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
