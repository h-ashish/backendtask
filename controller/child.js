var Child=require('../models/child');


exports.createchild=function(req,res,next){
	
	var childOb=new Child({
	 	name:req.body.name,
 	    sex:req.body.sex,
 	    date:req.body.date,
 	    father_name:req.body.father_name,
 	    mother_name:req.body.mother_name,
 	    state:req.body.state,
 	    district:req.body.district
		
		
		
	});
	childOb.save(function(err){
		if (err) {
			console.log(err);
			res.json({error:"cant save"})
		}else{
			console.log('success')
			res.json({msg:"child saved"})
		}
	})
}
exports.getchild=function(req,res,next){
	Child.find(function(err,child_list){
		res.json(child_list)
	})
}

