import express, { Request, Response } from "express";

const port = process.env.PORT || 3000;
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
