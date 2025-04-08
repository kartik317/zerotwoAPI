const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");  // Allow all origins
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});


// Sample image data (replace with your actual URLs or paths)
const images = [
  {
    id: 1,
    title: "Zero Two",
    url: "https://i.postimg.cc/GhddMXpX/02.jpg"
  },
  {
    id: 2,
    title: "zero two 2",
    url: "https://i.postimg.cc/m2yMqpyk/my-Zerotwo.jpg"
  },
  {
    id: 3,
    title: "zero two 3",
    url: "https://i.postimg.cc/W4Lvk8xm/z2.jpg"
  },
  {
    id: 4,
    title: "zero two 4",
    url: "https://i.postimg.cc/RVw5zKWN/zerotwo.png"
  }
];

// Get all images
app.get('/api/images', (req, res) => {
  res.json(images);
});

// Get single image by ID
app.get('/api/images/:id', (req, res) => {
  const image = images.find(img => img.id === parseInt(req.params.id));
  if (!image) return res.status(404).send("Image not found.");
  res.json(image);
});

app.listen(PORT, () => {
  console.log(`Image API running on http://localhost:${PORT}`);
});
