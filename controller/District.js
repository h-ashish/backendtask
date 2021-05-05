var District=require('../models/District');
exports.createdistrict=function(req,res,next){
	var districtOb=new District({
		district:req.body.district	
	});
	districtOb.save(function(err){
		if (err) {
			console.log(err);
			res.json({error:"cant save"})
		}else{
			console.log('success')
			res.json({msg:"district saved"})
		}
	})
}
exports.getdistrict=function(req,res,next){
	District.find(function(err,district_list){
		res.json(district_list)
	})
}

