1. Authenticaion 
    -> authentication is a process to verify the user 

2. JWT (jsonWebToken)
    -> In backend we do not use user password for all process
    -> We use token
    
    1. Token JWT 
        -> JWT is use to create a token 
        
        1. Installation
            command : npm install  JsonWebToken
        2. Reuire 
            const jwt = require('JsonWebToken');

    2. Algorthms of JWT 
        -> algorthms are use to defind how to tokanize and detocanize 

        1. HS256

            1. Creating token 
                syntex :- 
                    const token = jwt.sign({ email: req.body.email },process.env.ENCODE );

                    -> ENCODE is a server side key to letter varification

            2. Comparing token 
                syntex :- 
                    var decode = jwt.verify(token,process.env.ENCODE);

                    -> token is stored token 
                    -> ENCODE is key

        2. RS256
            
            1.  Steps to use RS256 Algorthm

                -> create private and public key 
                -> store in public.key and private.key file
                -> require both file in variables
                -> then use following steps 


            2. Creating token 
                syntex :- 
                    const token = jwt.sign({'attribute':"value"}, privateKey, { algorithm: 'RS256' });

                    -> attribute is attribute for which you want to make a token 
                    -> privateKey is a privatekey stored in private.key file


            1. Comparing token 
                syntex :- 
                    const decode = jwt.verify(token, publicKey, { algorithm: 'RS256'});

                    -> attribute is attribute for which you want to make a token 
                    -> publicKey is a PublicKey stored in public.key file

      



3. Password Hasing 
    -> hashing is a process where where we replace the password with hash 

    1. bcrypt 
        -> bcrypt is like a module which is use to convort or varify converted password

        1. installation
            command: npm bcrypt
        2. Require 
            const bcrypt = require('bcrypt');
        
        3. Converting Password to hash 
            syntex:
                const hash = await bcrypt.hash(Password,round);

        4. Comapare the Password to awailable one 
            syntex:
                const isValid = await bcrypt.compare(Password,Hash);
                // return true/false
        
        ex: 
            const hash = await bcrypt.hash(req.body.password,10);
            const isValid = await bcrypt.compare(req.body.password,user.password);
        

























aapka ye kahna mujhko kah do na 

// reference - jsonwebtoken
// refernce1 - bcrypt
// Next Reference - Passport js 