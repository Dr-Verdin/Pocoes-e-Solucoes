const express = require("express");
const cors = require("cors");

const sequelize = require("./database");
const Potion = require("./models/Potion");

const app = express();

app.use(cors());
app.use(express.json());

// CREATE potion
app.post("/potions", async (req, res) => {
  try {
    const { name, description, image, price } = req.body;

    const potion = await Potion.create({
      name,
      description,
      image,
      price,
    });

    res.status(201).json(potion);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar poção" });
  }
});

// rota teste
app.get("/", (req, res) => {
  res.send("API de Poções funcionando!");
});

// GET potions
app.get("/potions", async (req, res) => {
  const potions = await Potion.findAll();
  res.json(potions);
});

// DELETE potion
app.delete("/potions/:id", async (req, res) => {
  try {
    const { id } = req.params;

    await Potion.destroy({
      where: { id },
    });

    res.json({ message: "Poção removida com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar poção" });
  }
});

// inicializar banco + seed
async function start() {
  try {
    await sequelize.sync({ force: true });

    // seed inicial
    await Potion.bulkCreate([
      {
        name: "Poção Blue Sky",
        description:
          "Surto de inspiração por 24 horas. Usada por John Lennon.",
        image: "https://i.ibb.co/ZzS7xb2/rsz-sky.png",
        price: 300,
      },
      {
        name: "Poção do Perfume Misterioso",
        description: "Cheiro de lilás e groselha por 24 dias.",
        image: "https://i.ibb.co/pyhZJXf/rsz-lilas.png",
        price: 200,
      },
      {
        name: "Poção de Pinus",
        description: "Aumenta 10 cm de altura.",
        image: "https://i.ibb.co/DkzdL1q/rsz-pinus.png",
        price: 3000,
      },
      {
        name: "Poção da Beleza Eterna",
        description: "Veneno que mata rápido.",
        image: "https://i.ibb.co/9p872NK/rsz-1beleza.png",
        price: 100,
      },
      {
        name: "Poção do Arco Íris",
        description: "Felicidade momentânea.",
        image: "https://i.ibb.co/PrC09MP/rsz-2unicornio.png",
        price: 120,
      },
      {
        name: "Caldeirão das Verdades Secretas",
        description: "Todos dizem a verdade por 1 hora.",
        image: "https://i.ibb.co/s9Lyvj8/rsz-verdades.png",
        price: 150,
      },
    ]);

    app.listen(3000, () => {
      console.log("Servidor rodando na porta 3000");
    });
  } catch (err) {
    console.error("Erro ao iniciar:", err);
  }
}

start();