import user from '../models/user.js';
import bcrypt from 'bcrypt';

export const register=async(req,res)=>{
    try{
        const {name,email,password}=req.body;
        const extEmail=await user.findOne({email})
        if(extEmail){
            return res.json({message:"This Email already Taken"});
        }
        const haspass=await bcrypt.hash(password,10)
        await user.create({
            name:name,
            email:email,
            password:haspass
        })
        return res.json({message:"Registration successfull.."});
    }
    catch{
        return res.json({message:"error in Register"})
    }
}

export const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const extUser=await user.findOne({email});
        if(!extUser){
            return res.status(401).json({message:"Email not Registered"})
        }
        const matchPass=await bcrypt.compare(password,extUser.password)
        if(!matchPass){
            return res.status(401).json({message:"Password not match.."})
        }
        return res.status(200).json({message: "Login successful",
                                user: {
                                        id: extUser._id,
                                        name: extUser.name,
                                        email: extUser.email
                                        }
                                    });
    }
    catch{
        return res.status(500).json({message:"Error in Login"})
    }
}