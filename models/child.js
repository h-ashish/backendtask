

var mongoose=require('mongoose');
 var ChildSchema=new mongoose.Schema({
 	name:{type:String,require:true,max:50},
 	sex:{type:String,require:true,max:50},
 	date:{type:Date},
 	father_name:{type:String,require:true,max:50},
 	mother_name:{type:String,require:true,max:50},
 	state:{type:String,require:true,max:50},
 	district:{type:String,require:true,max:50}
 
 	
 
 	

 })
 
 	
 module.exports =mongoose.model('Child',ChildSchema); 



 