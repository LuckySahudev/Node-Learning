const userModel = require('../model/userModel');
const User = userModel.user;
const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const privateKey = fs.readFileSync(path.resolve(__dirname,'../privet.key'),'utf-8');
const publicKey = fs.readFileSync(path.resolve(__dirname,'../public.key'),'utf-8');
const bcrypt = require('bcrypt');

exports.signUp = async (req, res) => {
    try{
        const user = new User(req.body);

        // with 'HS256' algo
        // const token = jwt.sign({ email: req.body.email },process.env.ENCODE );

        // with 'RS256'
        const token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
        const hash = await bcrypt.hash(req.body.password,10);

        user.token = token;
        user.password = hash;
        await user.save();
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
} 

exports.signIn = async (req, res) => {
    try{
        
        const user = await User.findOne({'username':{$eq:req.body.username}});
        
        // validation of invalid username 
        if(!user){
            res.json({"Mess":"Invalid Username"});
            return;
        }

        let token = req.body.token;


        // validation of passoword
        const isValid = await bcrypt.compare(req.body.password,user.password);
        if(! isValid ){ 
            res.json({"Mess":"Password Invalid"});
            return;
        }

        // if validation is complite create a new token 
        token = jwt.sign({ email: req.body.email }, privateKey, { algorithm: 'RS256' });
    
        user.token = token;
        await user.save();
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
} 

exports.getToken = async (req,res)=>{
    const username = req.params.username;
    const user = await User.find({'username':{$eq:username}});
    res.json(user);
}


exports.auth = (req,res,next)=>{
  try{
      const header = req.get('Authorization');
      const token = header.split('Bearer ')[1];
      console.log(token);
      // wiht HS256 algo
      // var decode = jwt.verify(token,process.env.ENCODE);

      // with RS256 algo
      const decode = jwt.verify(token, publicKey, { algorithm: 'RS256'});
      if(decode){ next();}
  }catch(err){
    console.log(err);
    res.status(401).send(err);
  }
} 


