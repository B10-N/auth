import express from 'express'
import bcrypt from 'bcrypt'
const router =  express.Router() 

let Users =[]
router.post('/signup' , async (req , res)=>{
   try {
    const {email , password , username } = req.body
    let user = Users.find((x)=> x.email === email)
    if(user){   
        return res.status(404).json({message : 'wrong email or password'})
        }
        let hashedPass = await bcrypt.hash(password , 10)
        Users.push ({email ,  password   : hashedPass , username})
        res.status(201).send(Users)
    }
    catch (error) {
        console.log(error)
    }
})

router.post('/login' , async (req , res )=>{
    try {
        const {email , password , username } = req.body
        let user = Users.find((x)=> x.email === email)
        if(!user){
            return res.status(404).json({message : 'wrong email or password'})
            }
            let MatchPass = await bcrypt.compare(password , user.password)
            if(!MatchPass){
                return res.status(404).json({message : 'wrong email or password'})
                }
            res.status(200).send(`welcome back ${user.username}`)
            }
            catch (error) {
                console.log(error)
            }
})

export default router 