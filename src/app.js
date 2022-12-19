const express=require("express");
const path=require("path")
const app=express();
const hbs=require("hbs")


require("./db/conn");

const Register=require("./models/register");
const { json } = require("express");

const Registerowner=require("./models/registerowner");


const port=process.env.PORT || 3000;
const static_path=path.join(__dirname,"../register");
const template_path=path.join(__dirname,"../templates/views");
const partials_path=path.join(__dirname,"../templates/partials");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partials_path);

app.get("/",(req,res) =>{
    res.render("index");
});

app.get("/register",(req,res) =>{
     res.render("register");
});

app.get("/login",(req,res) =>{
    res.render("login");
});

app.get("/index",(req,res) =>{
    res.render("index");
});

app.get("/registerowner",(req,res) =>{
    res.render("registerowner");
});

app.get("/loginowner",(req,res) =>{
    res.render("loginowner");
});

app.post("/register",async(req, res) =>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpass;

        if(password === cpassword){

            const registeruser=new Register({
                name:req.body.name,
                location:req.body.location,
                username:req.body.username,
                password:req.body.password,
                confirmpass:req.body.confirmpass
            });


            //password hash

            const registered=await registeruser.save();
            res.status(201).render("index");


        }else{
            res.send("passwords not matching")
        }
        //console.log(req.body.name);
        //res.send(req.body.name);

      
   } catch(error){
    res.status(400).send(error)
   }
});

//login check

app.post("/login",async(req, res) =>{
    try{
        const username=req.body.username;
        const password=req.body.password;

        
          const user = await Register.findOne({username:username});
          
          if(user.password === password){
            res.status(201).render("index");
          }else{
            res.send("Invalid Login Details")
        }


    } catch (error) {
        res.status(400).send("Invalid Login Details");

    }
})


//const bcrypt=require("bcryptjs");

//const securePassword =async(password) =>{
     //const passwordHash = await bcrypt.hash(password,10);
     //console.log(passwordHash);

     //const passwordmatch = await bcrypt.compare(password,passwordHash);
     //console.log(passwordmatch);
//}



//securePassword("vaishu123");


app.post("/registerowner",async(req, res) =>{
    try{
        const password=req.body.password;
        const cpassword=req.body.confirmpass;

        if(password === cpassword){

            const registerowner=new Registerowner({
                name:req.body.name,
                location:req.body.location,
                username:req.body.username,
                password:req.body.password,
                confirmpass:req.body.confirmpass
            });


            //password hash

            const registered=await registerowner.save();
            res.status(201).render("index");


        }else{
            res.send("passwords not matching")
        }
        //console.log(req.body.name);
        //res.send(req.body.name);

      
   } catch(error){
    res.status(400).send(error)
   }
});


app.post("/loginowner",async(req, res) =>{
    try{
        const username=req.body.username;
        const password=req.body.password;

        
          const user = await Registerowner.findOne({username:username});
          
          if(user.password === password){
            res.status(201).render("index");
          }else{
            res.send("Invalid Login Details")
        }


    } catch (error) {
        res.status(400).send("Invalid Login Details");

    }
})



app.listen(port,()=>{
    console.log(`server is running at port no ${port}`);
})
