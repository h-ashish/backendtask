
var mongoose=require('mongoose');
 var StateSchema=new mongoose.Schema({
 	state:{type:String,require:true,max:50},
 })
 module.exports =mongoose.model('State',StateSchema); 



 