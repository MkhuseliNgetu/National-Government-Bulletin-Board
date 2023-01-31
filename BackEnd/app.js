//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const express = require('express')
const app = express()
const UrlPrefix = '/api'
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const Mongoose = require('mongoose')

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const BulletinBoard = require('./Models (Storage)/Bulletin Board Posts')
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const Users = require('./Models (Storage)/Users')

//This programming statement was adapted from Sebhastian:
//Link: https://sebhastian.com/fs-readfilesync/
//Author: Nathan Sebhastian
//Author Profile Link: https://sebhastian.com/about/
const fs = require('fs')
//The programming statement was adapted from Demo2s:
//Link: https://www.demo2s.com/node.js/node-js-url-inspector-get-metadata-about-any-url.html
//Author: Demo2s
const { url } = require('inspector')
//This programming statement was adapted from Sebhastian:
//Link: https://sebhastian.com/fs-readfilesync/
//Author: Nathan Sebhastian
//Author Profile Link: https://sebhastian.com/about/
const certificate = fs.readFileSync('SSL/certificate.pem')
const option = { Server: {SSLCA: certificate}};
const ConnectionToDatabase = 'mongodb+srv://MkhuseliNgetu:582WwyHsbbeIL6bu@cluster0.hg0xza0.mongodb.net/?retryWrites=true&w=majority'

//This programming statement was adapted from ExpressJS:
//Link: https://expressjs.com/en/resources/middleware/cors.html
//Author: Troy Goode
//Author Profile Link: https://github.com/TroyGoode
const cors = require('cors')

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
Mongoose.connect(ConnectionToDatabase).then(() => {console.log('MongoDB has been connected successfully :)') }).catch(() => {console.log(' Task 2 is not connected to the MongoDB database')}, option);
//This programming statement was adapted from LinuxHint:
//Link: https://linuxhint.com/create-routes-on-server-side-in-nodejs/
//Author: Shehroz Azam
//Author Profile Link: https://linuxhint.com/author/sharoz/
const PostsRoute = require('./Routes/Bulletin Board Posts')
//This programming statement was adapted from LinuxHint:
//Link: https://linuxhint.com/create-routes-on-server-side-in-nodejs/
//Author: Shehroz Azam
//Author Profile Link: https://linuxhint.com/author/sharoz/
const UsersRoute = require('./Routes/Users')

//This programming statement was adapted from Code Rocket Fuel:
//Link: https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
//Author: Nick Major
//Author Profile Link: https://coderrocketfuel.com/about
const Bcrypt = require('bcrypt');

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
app.use(express.json())



//This programming statement was adapted from FVI:
//Link https://fvi.edu/web-developer/web-development/enable-cors-node-js-apache/
//Author: FVI
app.use((reg,res, next)=>{

//This programming statement was adapted from FVI:
//Link https://fvi.edu/web-developer/web-development/enable-cors-node-js-apache/
//Author: FVI
res.setHeader('Access-Control-Allow-Origin',"*");
//This programming statement was adapted from DZone:
//Link: https://dzone.com/articles/cors-in-node
//Author: Madhuka Udantha
//Author Profile Link: https://dzone.com/users/973571/madhuka.html
res.setHeader('Access-Control-Allow-Origin','Origin, X-Requested-With, Content-Type, Accept, Authorization');
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/access-control-allow-origin-header-explained/
//Author: Shruti Kapoor
//Author Profile Link: https://www.freecodecamp.org/news/author/shrutikapoor08/
res.setHeader('Access-Control-Allow-Methods','*');
next();
});

//This programming statement was adapted from ExpressJS:
//Link: https://expressjs.com/en/resources/middleware/cors.html
//Author: Troy Goode
//Author Profile Link: https://github.com/TroyGoode
app.use(cors())

//POE- Brute Force Attack Mitigation
//The following programming statements were adapted from NPM:
//Link: https://www.npmjs.com/package/express-brute
//Author: Adam Pflug
//Author Profile Link: https://www.npmjs.com/~adampflug
var BulletinBoardBruteForceTool = require('express-brute');
var DataWarehouse = new BulletinBoardBruteForceTool.MemoryStore();
var BruteForceAttackMitigation = new BulletinBoardBruteForceTool(DataWarehouse);

//POE-Header Security (Helmet)
//The following programming statements were adapted from NPM:
//Link: https://www.npmjs.com/package/helmet
//Authors: Adam Baldwin,Evan Hahn
//Author Profile Link: https://www.npmjs.com/~adam_baldwin
//Author Profile Link: https://www.npmjs.com/~evanhahn
const BulletinBoardHeaderSecurity = require("helmet");
app.use(BulletinBoardHeaderSecurity());

//POE-User Request Logging
//The following programming statements were adapted from NPM:
//Link: https://www.npmjs.com/package/morgan
//Author: Douglas Wilson
//Author Profile Link : https://www.npmjs.com/~dougwilson
var UserRequestLogger = require('morgan');
app.use(UserRequestLogger('combined'));

UserRequestLogger(':method :url :status :res[content-length] - :response-time ms')

var LogFilePath = require('path');
app.use(UserRequestLogger('BackEnd',{ Skip: function (Request,Response) {return Response.status <400}}))
app.use(UserRequestLogger('common',{RequestData: fs.createReadStream(LogFilePath.join(__dirname, 'UserRequestsLog.log'),{flags: 'a'})}))


//Gets posts from the Bulletin Board
//This programming statement was adapted from The Usual Stuff:
//Link: https://theusualstuff.com/handle-form-data-express-get-post-method/
//Author: Saad
//Auhtor Profile Link: https://theusualstuff.com/author/saad/
app.get(UrlPrefix + '/GetPost', async (req,res) =>{

    //POE- Brute Force Attack Mitigation
    //The following 3 programming statements were adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug      
    BruteForceAttackMitigation.prevent;

    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-find-function/?ref=lbp
    //Author: GeeksForGeeks
    BulletinBoard.find({Title: {$in: [req.body.Title]}}, function(err, result) {

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
            res.status(201).json({ Message: 'Post does not exist'})


                
        }
       

    });

})

//Removes post from bulletin board
//This programming statement was adapted from GeeksForGeeks:
//Link: https://www.geeksforgeeks.org/express-js-app-delete-function/
//Author: GeeksForGeeks
app.delete(UrlPrefix + '/RemovePost/:id',async (req, res) => {

    //POE- Brute Force Attack Mitigation
    //The following 3 programming statements were adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug      
    BruteForceAttackMitigation.prevent;

    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-findoneanddelete-function/
    //Author: GeeksForGeeks
    BulletinBoard.findOneAndDelete({_id: req.params.id}).then((result) => {

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
    

});


})
//Adds new post to bulletin board
//This programming statement was adapted from Jennifer Bland:
//Link: https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/
//Author: Jennifer Bland
//Author Profile Link: https://www.jenniferbland.com/about-me/
app.post(UrlPrefix+'/AddPost', async (req, res) => {

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
    const NewPost = new BulletinBoard({ ID: req.body.ID,Title: req.body.Title,Details:req.body.Details})

    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-findone-function/
    //Author: GeeksForGeeks
    BulletinBoard.findOne({ID: req.body.ID,Title:req.body.Title}, function (err, result) {

        if(result){
        //This programming statement was adapted from OpenClassrooms:
        //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
        //Author: Will Alexander, Colleen Brady
        res.status(201).json({Message: 'Your post already exists'})
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

//Adds New User to Bulletin Board
//This programming statement was adapted from Jennifer Bland:
//Link: https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/
//Author: Jennifer Bland
//Author Profile Link: https://www.jenniferbland.com/about-me/
app.post(UrlPrefix+'/SignUp', (req, res) => {
    
    //POE-Brute Force Attack Mitigation
    //This programming statement was adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug     
    BruteForceAttackMitigation.prevent;


    //This programming statement was adapted from FreeCodeCamp:
    //Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
    //Author: Nishant Kumar
    //Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
    const NewUser = new Users({EmployeeUsername: req.body.EmployeeUsername,EmployeePassword: req.body.EmployeePassword})
 
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
    res.status(201).json({Message: 'This user already exists'})
    
    }else{
    //This programming statement was adapted from OpenClassrooms:
    //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
    //Author: Will Alexander, Colleen Brady
    res.status(201).json({Message: ' User has been created successfully',User: doc })
    }
    
    });
    
    
    })

//Login to Bulletin Board
//This programming statement was adapted from Jennifer Bland:
//Link: https://www.jenniferbland.com/saving-data-to-mongodb-database-from-node-js-application-tutorial/
//Author: Jennifer Bland
//Author Profile Link: https://www.jenniferbland.com/about-me/
app.post(UrlPrefix+'/Login', (req, res) => {
    
    //POE-Brute Force Attack Mitigation
    //This programming statement was adapted from NPM:
    //Link: https://www.npmjs.com/package/express-brute
    //Author: Adam Pflug
    //Author Profile Link: https://www.npmjs.com/~adampflug     
    BruteForceAttackMitigation.prevent;

    //This programming statement was adapted from GeeksForGeeks:
    //Link: https://www.geeksforgeeks.org/mongoose-findone-function/
    //Author: GeeksForGeeks
    Users.findOne({EmployeeUsername:req.body.EmployeeUsername}, function (error, doc) {

        //This programming statement was adapted from Code Rocket Fuel:
        //Link: https://coderrocketfuel.com/article/using-bcrypt-to-hash-and-check-passwords-in-node-js
        //Author: Nick Major
        //Author Profile Link: https://coderrocketfuel.com/about
        Bcrypt.compare(req.body.EmployeePassword,doc.EmployeePassword, (err, outcome) =>{

            if(outcome){
            //This programming statement was adapted from OpenClassrooms:
            //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
            //Author: Will Alexander, Colleen Brady
            res.status(201).json({Message: 'Login successful ;)',Token: token})
            }else{
            //This programming statement was adapted from OpenClassrooms:
            //Link: https://openclassrooms.com/en/courses/5614116-go-full-stack-with-node-js-express-and-mongodb/5656206-create-a-post-route
            //Author: Will Alexander, Colleen Brady
            res.status(201).json({Message: 'Login unsuccessful :(',Token: token})
            }
            
        })
    });
})
    
    
    
//This programming statement was adapted from LinuxHint:
//Link: https://linuxhint.com/create-routes-on-server-side-in-nodejs/
//Author: Shehroz Azam
//Author Profile Link: https://linuxhint.com/author/sharoz/
app.use(UrlPrefix+'/post', PostsRoute)
//This programming statement was adapted from LinuxHint:
//Link: https://linuxhint.com/create-routes-on-server-side-in-nodejs/
//Author: Shehroz Azam
//Author Profile Link: https://linuxhint.com/author/sharoz/
app.use(UrlPrefix+'/users', UsersRoute)



module.exports =app;



