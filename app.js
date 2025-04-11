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
  {
    id: 10,
    title: "zero two 10",
    url: "https://i.postimg.cc/1744342146529.jpg"
  },
  {
    id: 11,
    title: "zero two 11",
    url: "https://i.postimg.cc/1744342064782.jpg"
  },
  {
    id: 12,
    title: "zero two 12",
    url: "https://i.postimg.cc/1744342004413.jpg"
  },
  {
    id: 13,
    title: "zero two 13",
    url: "https://i.postimg.cc/1744341971826.jpg"
  },
  {
    id: 14,
    title: "zero two 14",
    url: "https://i.postimg.cc/1744341903691.jpg"
  },
  {
    id: 15,
    title: "zero two 15",
    url: "https://i.postimg.cc/1744341857861.jpg"
  },
  {
    id: 16,
    title: "zero two 16",
    url: "https://i.postimg.cc/1744341840334.jpg"
  },
  {
    id: 17,
    title: "zero two 17",
    url: "https://i.postimg.cc/1744341817868.jpg"
  },
  {
    id: 18,
    title: "zero two 18",
    url: "https://i.postimg.cc/1744341802744.jpg"
  },
  {
    id: 19,
    title: "zero two 19",
    url: "https://i.postimg.cc/1744340539936.jpg"
  },
  {
    id: 20,
    title: "zero two 20",
    url: "https://i.postimg.cc/1744340523997.jpg"
  },
  {
    id: 21,
    title: "zero two 21",
    url: "https://i.postimg.cc/1744340471108.jpg"
  },
  {
    id: 22,
    title: "zero two 22",
    url: "https://i.postimg.cc/IMG-20250411-082542.jpg"
  },
  {
    id: 23,
    title: "zero two smile",
    url: "https://i.postimg.cc/zero-two-smile.gif"
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
