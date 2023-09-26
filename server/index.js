const express = require("express");
const cors = require("cors");

const app = express();

//middleware
app.use(express.json());
app.use(cors());

///////// ENDPOINTS HERE ///////////

app.get("/api/get", (req, res) => {
  console.log("hello");
  res.status(200).send("GET success");
});

app.post("/api/post", (req, res) => {
  console.log(req);
  console.log("request has been received");

//   const username = req.body.username
  const {username, password} = req.body

  console.log(username)
  res.status(200).send("POST success");
});

app.put('/api/put/:id', (req, res) => {
    console.log(req)

    const {id} = req.params

    console.log(id)

    res.status(200).send('PUT success')
})

///////////////////////////////////

app.listen(5050, () => console.log(`Server is running on 5050`));
