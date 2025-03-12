// Import Express and define server port
const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Define ("/")
app.get("/", (req, res) => {
  res.send("<h1>Server del mio blog</h1>");
});

// Define ("/bacheca")
app.get("/bacheca", (req, res) => {
  const posts = [
    {
      title: "Ciambellone soffice",
      content: "Un dolce classico, perfetto per la colazione o la merenda!",
      image: "/images/ciambellone.jpeg",
      tags: ["dolce", "colazione", "tradizionale"],
    },
    {
      title: "Cracker di barbabietola",
      content: "Snack croccante e salutare con semi e barbabietola.",
      image: "/images/cracker_barbabietola.jpeg",
      tags: ["snack", "salutare", "vegetariano"],
    },
    {
      title: "Pane fritto dolce",
      content: "Fette di pane fritto zuccherate, un dolce semplice e gustoso.",
      image: "/images/pane_fritto_dolce.jpeg",
      tags: ["dolce", "fritto", "facile"],
    },
    {
      title: "Pasta alla barbabietola",
      content:
        "Un primo piatto colorato e ricco di sapore, con crema di barbabietola e pistacchi.",
      image: "/images/pasta_barbabietola.jpeg",
      tags: ["primo", "vegetariano", "colorato"],
    },
    {
      title: "Torta paesana",
      content: "Dolce tradizionale lombardo con pane raffermo, cacao e uvetta.",
      image: "/images/torta_paesana.jpeg",
      tags: ["dolce", "tradizionale", "pane raffermo"],
    },
  ];
  res.json(posts);
});
