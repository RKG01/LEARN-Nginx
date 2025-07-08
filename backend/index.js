import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: "Hello from Express!" },
    { id: 2, title: "Another Post" }
  ]);
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
