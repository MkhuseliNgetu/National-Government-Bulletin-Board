//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const express = require('express')
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const router = express.Router();

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const Users = require('../Models (Storage)/Users')

//This programming statement was adapted from Code Rocket Fuel:
//Link: https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
//Author: Nick Major
//Author Profile Link: https://coderrocketfuel.com/about
const Bcrypt = require('bcrypt');
//This programming statement was adapted from GeeksForGeeks:
//Link: https://www.geeksforgeeks.org/jwt-authentication-with-node-js/
//Author: GeeksForGeeks
const JWT = require('jsonwebtoken');


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
router.post('/SignUp',(req, res)=>{


  //POE- Brute Force Attack Mitigation
  //The following 3 programming statements were adapted from NPM:
  //Link: https://www.npmjs.com/package/express-brute
  //Author: Adam Pflug
  //Author Profile Link: https://www.npmjs.com/~adampflug      
  BruteForceAttackMitigation.prevent;

  //Encrypts the password of a new user 
  //This programming statement was adapted from Code Rocket Fuel:
  //Link: https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
  //Author: Nick Major
  //Author Profile Link: https://coderrocketfuel.com/about
  Bcrypt.hash(req.body.EmployeePassword,10).then(hash=> {

  //Create new user for Bulletin Board
  //This programming statement was adapted from FreeCodeCamp:
  //Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
  //Author: Nishant Kumar
  //Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/ 
  const NewUser = new Users({EmployeeUsername: req.body.EmployeeUsername,EmployeePassword: hash});
  //This programming statement was adapted from GeeksForGeeks:
  //Link: https://www.geeksforgeeks.org/mongoose-findone-function/
  //Author: GeeksForGeeks
  Users.findOne({EmployeeUsername:req.body.EmployeeUsername}, function (err, doc) {
    
    if(doc){
        
        //This programming statement was adapted from Digital Ocean:
        //Link: https://www.digitalocean.com/community/tutorials/how-to-use-console-in-nodejs
        //Author: Mabishi Wakio
        console.log("User has not been created successfully :(")
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({ Message: 'This user already exists'})
    
    }else{

        NewUser.save().then(result=>{

            //This programming statement was adapted from OpenClassrooms:
            //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
            //Author: Will Alexander, Colleen Brady  
            res.status(201).json({Message: 'User has been created successfully',Result: result});
          
              }).catch(err => {
              //This programming statement was adapted from OpenClassrooms:
              //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
              //Author: Will Alexander, Colleen Brady
              res.status(500).json({Error: err });
          
              });

        
    }
    
    });
        

    })
})

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
router.post('/Login',(req, res)=>{

let existingemployee
//Verifies user credentials with existing credentials in database
//This programming statement was adapted from GeeksForGeeks:
//Link: https://www.geeksforgeeks.org/mongoose-findone-function/
//Author: GeeksForGeeks
Users.findOne({EmployeeUsername: req.body.EmployeeUsername}).then(user=>{
    if(!user){

        
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        return res.status(401).json({message: "Authentication Failed"});

        
    
    }else{

        existingemployee = user;

        //This programming statement was adapted from Code Rocket Fuel:
        //Link: https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
        //Author: Nick Major
        //Author Profile Link: https://coderrocketfuel.com/about
        return Bcrypt.compare(req.body.EmployeePassword,existingemployee.EmployeePassword)
    }
    
    }).then(result=>{
    
        if(!result){

            //This programming statement was adapted from OpenClassrooms:
            //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
            //Author: Will Alexander, Colleen Brady
            return res.status(401).json({Message:"Authentication Failed"});
     
        }else{
           //This programming statement was adapted from JSRamblings:
           //Link: https://jsramblings.com/authentication-with-node-and-jwt-a-simple-example/
           //Author: JSRamblings
           const AuthToken = JWT.sign({Username:existingemployee.EmployeeUsername,UserId:existingemployee._id},"National Government Bulletin Board",{expiresIn: '1h'});
           //This programming statement was adapted from OpenClassrooms:
           //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
           //Author: Will Alexander, Colleen Brady
           res.status(200).json({Token:AuthToken, Message: "Login Successful :)", User: existingemployee.EmployeeUsername});

        }
        
    }).catch(err=>{

        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        return res.status(401).json({ Message: "Authentication Failed"});

})


})
    


module.exports = router;