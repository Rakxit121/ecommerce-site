router.get("/reset-password/:id/:token", async(req,res)=>{
    //get id and token from para,
    const {id, token}=req.params;

    //if id or token is not provided
    const oldUser=await User.findOne({_id: id});
    if(!oldUser){
        return res.status(400).json({msg: "User does not exist"});
    
    }

    //verify token
    const secret =process.env.JWT_SECRET + oldUser.password;
try{
    const verify=jwt.verify(token, secret);
    const encryptedPassword=await bcrypt.hash(password, 10);
    await User.updateOne({_id: id}, {$set:{password:encryptedPassword}});
    return res.status(200).json({msg:"password updated Successfully"});

    //if token is verified
   
}catch(error){
    res.status(500).json("Pssword reset failed");
}
})