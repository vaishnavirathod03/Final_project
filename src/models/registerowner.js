const mongoose=require("mongoose");
//const bcrypt=require("bcryptjs");

const ownerschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpass:{
        type:String,
        required:true
}
})


//userschema.pre("save", async function(next){

    //if(this.isModified("password")){
        //console.log(`current password is ${this.password}`);
        //this.password= await bcrypt.hash(this.password,10);
        //console.log(`current password is ${this.password}`);

        //this.confirmpass=undefined;   
    //}
    //const passwordHash = await bcrypt.hash(password,10);
    //console.log(`current password is ${this.password}`);
    //this.password= await bcrypt.hash(this.password,10);
    //next();
//})
//now we need to create collection

const Registerowner=new mongoose.model("Registerowner",ownerschema);
module.exports=Registerowner;