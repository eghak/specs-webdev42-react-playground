const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

const { get, post, put } = require("./controllers/controller");

///////// ENDPOINTS HERE ///////////

app.get("/api/get", get);

app.post("/api/post", post);

app.put("/api/put/:id", put);

///////////////////////////////////

app.listen(5050, () => console.log(`Server is running on 5050`));
