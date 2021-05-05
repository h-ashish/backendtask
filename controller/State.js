var State=require('../models/state');
exports.createstate=function(req,res,next){
	console.log()
	var stateOb=new State({
		state:req.body.state
	});
	stateOb.save(function(err){
		if (err) {
			console.log(err);
			res.json({error:"cant save"})
		}else{
			console.log('success')
			res.json({msg:"state saved"})
		}
	})
}
exports.getstate=function(req,res,next){
	State.find(function(err,state_list){
		res.json(state_list)
	})
}

