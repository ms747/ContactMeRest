const express = require("express");
const Contacts = require("./schemas/Contacts");
const routes = express.Router();

routes.get("/", (req, res) => { 
  Contacts.find({},(err,msg)=>{
    if(err){
      res.send(err);
    }
    else{
      console.log(msg)
    }
  })
});

routes.post("/", (req, res) => {
  const newMessage = new Contacts({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  });
  const errors = newMessage.validateSync();
  if (errors) {
    res.status(501).send("Invalid data");
  }
  newMessage.save(err => {
    if (!err) {
      res.status(201).send("Inserted");
    }
  });
});


module.exports = routes;
