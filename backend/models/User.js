const mg=require('mongoose')
mg.connect("mongodb://127.0.0.1:27017/aadesh").then(()=>{console.log("success")}
).catch((err)=>{console.error(err)});
//mg.pluralize(null)
const mySchema=new mg.Schema( //to create a schema use this
 {
 name:
 {
 type:String,
 required:true,
 },
//  Surname:String,
 email:{type:String,unique:true},
 password:{type:String,required:true},
 date:{
 type:Date,
 default:new Date()
 }
 }
);
const User=new mg.model("user",mySchema)
module.exports=User