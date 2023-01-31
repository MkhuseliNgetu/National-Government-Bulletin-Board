    //This programming statement was adapted from TutorialsTeacher:
    //Link: https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server
    //Author: TutorialsTeacher
    const HTTP = require('https');
    const app = require('./app');
    //This programming statement was adapted from Sebhastian:
    //Link: https://sebhastian.com/fs-readfilesync/
    //Author: Nathan Sebhastian
    //Author Profile Link: https://sebhastian.com/about/
    const fs = require('fs');

    const PORT = 3000

    //This programming statement was adapted from TutorialsTeacher:
    //Link: https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server
    //Author: TutorialsTeacher
    const server = HTTP.createServer({
            //This programming statement was adapted from Sebhastian:
            //Link: https://sebhastian.com/fs-readfilesync/
            //Author: Nathan Sebhastian
            //Author Profile Link: https://sebhastian.com/about/
            key: fs.readFileSync('SSL/ngetuprivatekey.pem'),
            //This programming statement was adapted from Sebhastian:
            //Link: https://sebhastian.com/fs-readfilesync/
            //Author: Nathan Sebhastian
            //Author Profile Link: https://sebhastian.com/about/
            cert: fs.readFileSync('SSL/certificate.pem')

    }, app);

    //This programming statement was adapted from TutorialsTeacher:
    //Link: https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server
    //Author: TutorialsTeacher
    server.listen(PORT)
 