
const express = require('express')
const bcrypt = require('bcrypt')
const app = express()

const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')



app.use(cookieParser())

app.get('/', (req, res)=>{

    // To encrypt the password 

    // bcrypt.genSalt(10, function(err, salt) {
    //     bcrypt.hash("Ravi@001", salt, function(err, hash) {
    //             console.log(hash);
            
    //     });

    // });



    // // To compare the pass weather it is correct or not
    //     bcrypt.compare("Ravi@001", "$2b$10$hFHgO7c8ScvYKaTNI54tv.8Nc8ku8P4soiXHbCJRzrMtXocF40rR6", function(err, result) {
    //         // result == true
    //         console.log(result);
            
    //     });


   let token =  jwt.sign({email:"Ravi@gmai.com"}, "secret")
   res.cookie("token", token, { httpOnly: true, path: '/' });
   res.send("Done")
   
   console.log(token);
   
})

app.get("/read", (req, res)=>{
    // console.log("/read ka token hai ye ",req.cookies.token);
    let data = jwt.verify(req.cookies.token, "secret");
    res.send("Done")
    console.log(data);
    
})

app.listen(3000, ()=>{
    console.log(`🟢Server has started on http://localhost:3000 🟢`);
    
})