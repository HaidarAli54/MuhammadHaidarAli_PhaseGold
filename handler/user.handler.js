
module.exports = {

    testUserHealt: (req,res)=>{
        try {
            res.status(200).json({
                massage : 'successfully entering test user handler part'
            })
            
            return
            
        }catch (error) {
            res.status(500).json({
                massage : 'server is busy'
            })
            
            return
        }
       


    }


}