

var mongoose=require('mongoose');
 var DistrictSchema=new mongoose.Schema({
 	district:{type:String,require:true,max:50},
 })
 
 	
 module.exports =mongoose.model('District',DistrictSchema); 



 