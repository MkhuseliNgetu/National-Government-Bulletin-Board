//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const Mongoose = require('mongoose');

//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
const UsersSchema = Mongoose.Schema(
    {
        //This programming statement was adapted from FreeCodeCamp:
        //Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
        //Author: Nishant Kumar
        //Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
        EmployeeUsername: {type : String, required: true},
        //This programming statement was adapted from FreeCodeCamp:
        //Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
        //Author: Nishant Kumar
        //Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
        EmployeePassword: {type : String, required: true}

    }
)
//This programming statement was adapted from FreeCodeCamp:
//Link: https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/
//Author: Nishant Kumar
//Author Profile Link:https://www.freecodecamp.org/news/author/nishant-kumar/
module.exports = Mongoose.model('Employees', UsersSchema)
