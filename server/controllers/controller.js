module.exports = {
  get: (req, res) => {
    console.log("hello");
    res.status(200).send("GET success");
  },
  post: (req, res) => {
    console.log(req);
    console.log("request has been received");

    //   const username = req.body.username
    const { username, password } = req.body;
    
    // INSERT INTO user(username, password)
    let newUser = User.create(req.body)

    res.status(200).send("POST success");
  },
  put: (req, res) => {
    console.log(req);

    const { id } = req.params;

    console.log(id);

    res.status(200).send("PUT success");
  }
};
