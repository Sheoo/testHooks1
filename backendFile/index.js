const app = require("express")();
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => res.send("Hello"));

app.get("/cities", (req, res) =>
  res.send([
    {
      id: 0,
      name: "Reims"
    },
    {
      id: 1,
      name: "Paris"
    },
    {
      id: 2,
      name: "Lille"
    },
    {
      id: 3,
      name: "Brest"
    },
    {
      id: 4,
      name: "Lyon"
    }
  ])
);

app.listen(8000, () => console.log("Running on port 8000"));
