//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const express = require('express');
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const CheckAuth = require('../check-auth');
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const router = express.Router();

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const BulletinBoardPosts = require('../Models (Storage)/Bulletin Board Posts')


//POE- Brute Force Attack Mitigation
//The following programming statements were adapted from NPM:
//Link: https://www.npmjs.com/package/express-brute
//Author: Adam Pflug
//Author Profile Link: https://www.npmjs.com/~adampflug
var BulletinBoardBruteForceTool = require('express-brute');
var DataWarehouse = new BulletinBoardBruteForceTool.MemoryStore();
var BruteForceAttackMitigation = new BulletinBoardBruteForceTool(DataWarehouse);

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
router.get('/GetPost',CheckAuth,(req, res)=>{

   //POE
   if(req.query.PC != null || req.query.PC != ""){

    req.body.Title = req.query.PC

   }else{

    req.body.Title = req.body.Title
   }
    
    //POE- Brute Force Attack Mitigation
    //The following 3 programming statements were adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug      
    BruteForceAttackMitigation.prevent;

    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-find-function/?ref=lbp
    //Author: GeeksForGeeks
    BulletinBoardPosts.find({Title: { $in: [req.body.Title]}}, function(err, result) {

        if(result != ""){

        //This programming statement was adapted from Digital Ocean:
        //Link: https://www.digitalocean.com/community/tutorials/how-to-use-console-in-nodejs
        //Author: Mabishi Wakio
        console.log('Post has been retrieved successfully :)')

        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({Message: 'Post has been retrieved successfully', Post: result})
    
        }else{
        //This programming statement was adapted from Digital Ocean:
        //Link: https://www.digitalocean.com/community/tutorials/how-to-use-console-in-nodejs
        //Author: Mabishi Wakio
        console.log('Post has not been retrieved successfully :(')
        
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({ Message: 'Post does not exist', Req: req.body.Title})

        console.log(req.query)

        

                
        }

    });



})

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
router.post('/AddPost',CheckAuth,(req, res)=>{

    //POE- Brute Force Attack Mitigation
    //The following 3 programming statements were adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug      
    BruteForceAttackMitigation.prevent;

    //This programming statement was adapted from FreeCodeCamp:
    //Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
    //Author: Nishant Kumar
    //Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
    const NewPost = new BulletinBoardPosts({ID: req.body.ID,Title: req.body.Title,Details: req.body.Details})
    
    
    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-findone-function/
    //Author: GeeksForGeeks
    BulletinBoardPosts.findOne({ID: req.body.ID,Title:req.body.Title}, function (err, result) {

        if(result){
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({ Message: 'Your post already exists'})
            
        }else{

        //This programming statement was adapted from Digital Ocean:
        //Link: https://www.digitalocean.com/community/tutorials/how-to-use-console-in-nodejs
        //Author: Mabishi Wakio
        NewPost.save().then(() => {console.log('Your post has been created successfully ;)')})

        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({ Message: 'Your post has been added successfully',Post: NewPost})
        }

      
});

   
})

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
router.delete('/RemovePost/:id', CheckAuth ,(req, res)=>{

    //POE- Brute Force Attack Mitigation
    //The following 3 programming statements were adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug      
    BruteForceAttackMitigation.prevent;

    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-findoneanddelete-function/
    //Author: GeeksForGeeks
    BulletinBoardPosts.findOneAndDelete({_id: req.params.id}).then((result) => {
        if(result){
        //This programming statement was adapted from Digital Ocean:
        //Link: https://www.digitalocean.com/community/tutorials/how-to-use-console-in-nodejs
        //Author: Mabishi Wakio
        console.log('Post has been deleted successfully :)')
            
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({Message: 'Post has been deleted successfully', Post:result})

   
       }else{
        //This programming statement was adapted from Digital Ocean:
        //Link: https://www.digitalocean.com/community/tutorials/how-to-use-console-in-nodejs
        //Author: Mabishi Wakio
        console.log('Post could not be deleted successfully :(')
   
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({ Message: 'Post does not exist'})
           
           
          
   
       }
    })

})

module.exports = router