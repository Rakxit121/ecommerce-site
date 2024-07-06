const jwt = require('jsonwebtoken'); // Import jsonwebtoken module

router.post("/forget_password", async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({
            msg: "Please enter all fields"
        });
    }
    
    try {
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ msg: "User does not exist" });
        }
        
        const secret = process.env.JWT_SECRET + user.password;
        const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "15m" });
        
        const link = `http://localhost:500/api/user/reset-password/${user._id}/${token}`;
        console.log(link);
        
        // Send the link or perform other actions as needed
        
        res.status(200).json({ msg: "Password reset link sent successfully" });
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});
