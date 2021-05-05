var User=require('../models/user');
const bcrypt=require('bcrypt');
const auth=require('../middleware/auth')
const {body,validationResult}=require('express-validator');
const {sanitizeBody}=require('express-validator');
const jwt=require('jsonwebtoken');
var JWTR =  require('jwt-redis').default;
exports.addUser=[
body('username').isLength({min:3}).trim().withMessage("min 3 char"),
async function (req,res,next){
	const errors=validationResult(req);
	if (!errors.isEmpty()) {
		res.json({status:0,data:"validation failed",debug_data:errors.array()});
	}else{
		let user=await User.findOne({
			email:req.body.email
		})
		if (user) {
			return res.status(400).json({
				msg:"user already exist"
			})
		}
		const salt= await bcrypt.genSalt(10);
		let encryptedPassword=await bcrypt.hash(req.body.password,salt);
		var userOb=new User({
			username:req.body.username,
			email:req.body.email,
			password:encryptedPassword,
		})
		userOb.save(function(err){
			if (err) {
				res.json({status:0,debug_data:err});
			}else{
				res.json({status:1,data:"user saved successfully"})
			}
		})
	}
}
]
exports.login=[
body('email').isLength({min:3}).withMessage("minimum 3 char needed"),
async function(req,res,next){
	const errors= validationResult(req);
	if (!errors.isEmpty()) {
		res.json({status:0,data:"validation failed",debug_data:errors.array()});
	}else{
		const{email,password}=req.body;
		let user=await User.findOne({
			email:req.body.email
		})
		if (!user) {
			return res.status(400).json({
				message:"user not exist"
			})}

			const passCorrect=await bcrypt.compare(password,user.password)
		if(!passCorrect)
		return res.status(400).json({
			message:"password wrong"
		})

			const payload={
				user:{
					id:user.id,
					email:email
				}
			};

			jwt.sign(
				payload,
				"secretString",
				{
					expiresIn:1200
				},
				(err,token)=>{
					if (err) throw err;
					res.status(200).json({
						token
					});
				}
				);
		}
	}
]
exports.logout=[
body('email').isLength({min:3}).withMessage("minimum 3 char needed"),
async function(req,res,next){
	jwtr.destroy()
	}
]
exports.restrictedPage=[
auth,
async (req,res)=>{
	res.json({data:"you can acces details"})
}
]