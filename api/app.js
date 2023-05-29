const express = require('express');
const app = express();

const { mongoose}= require('./db/mongoose');

const bodyParser = require('body-parser')

//Load in the mongoose models
const{List,Task}=require('./db/.models');


//load middleware
app.use(bodyParser.json());

 /*ROUTE HANDLERS */

 /*LIST ROUTES */

 /**
  * GET /lists
  * Purpose:get all lists
  */
app.get('/',(req, res) =>{
   //I  want to return an array of all the lists in the database
   List.find({}).then((lists)=>{
    res.send(lists);
   });
})

/**
 * POST /lists
 * purpose: create a list
 */
app.post('/list',(req, res) =>{
    // I want to create a new list and return the new list document back to the user (which includes the id)
    //the list information(fields) will be passed in via the JSON request body
    let title= req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        //the full list document is returned(incl. id)
        res.send(listDoc);
    })
});



/**
 * PATH /LISTS/:id
 * purpose: update a specified list
 */
app .patch('/lists/:id',(req, res) => {
    //I want to delete the specified list (document with id in the URL) with the new values
});

/**
 * DELETE /lists/:id
 * purpose:Delete a list
 */
app.delete('/lists/:id',(req, res) => {
    //I want to delete the specified list(document with the id in the URL)
});

app.listen(3000, ()=>{
    console.log("serve is listening on port 3000");
}) 

