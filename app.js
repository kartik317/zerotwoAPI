const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://kartik317.github.io");
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
    url: "https://i.postimg.cc/RVw5zKWN/zerotwo.png"
  },
  {
    id: 3,
    title: "zero two 3",
    url: "https://i.postimg.cc/G3x3qpF8/1744106205462.jpg"
  },
  {
    id: 4,  
    title: "zero two 4",
    url: "https://i.postimg.cc/ZqnyhdLM/1744106178916.jpg"
  },
  {
    id: 5,
    title: "zero two 5",
    url: "https://i.postimg.cc/Y9jN8PVj/1744106145314.jpg"
  },
  {
    id: 6,
    title: "zero two 6",
    url: "https://i.postimg.cc/HxT0DKFp/1744106128091.jpg"
  },
  {
    id: 7,
    title: "zero two 7",
    url: "https://i.postimg.cc/mZYxSFyC/1744106103586.jpg"
  },
  {
    id: 8,
    title: "zero two 8",
    url: "https://i.postimg.cc/W39NpFYd/1744106038764.jpg"
  },
  {
    id: 9,
    title: "zero two 9",
    url: "https://i.postimg.cc/Nj4fCz88/1744106082095.jpg"
  },
  
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
