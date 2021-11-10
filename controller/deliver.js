const Utils = require('../utils/util')
const Deliver = require('../model/deliver')

const deliverControl = {
    async createDeliver(req,res,next){    
        var body = req.body
        body.userId = req.user.id
        deliver = await Deliver.create(body)
            .catch((err)=>console.log(err))   
        if(!deliver){
            return Utils.responseClient(res,0,404,'');
        }
        return Utils.responseClient(res,1,200,'',deliver);
    },    

    async getDelivers(req,res,next){
        const delivers = await Deliver.find({userId:req.user.id})
        Utils.responseClient(res,1,200,'',delivers);  
    }, 

    async getDeliver(req,res,next){
        const delivers = await Deliver.findById(req.params.id)
        Utils.responseClient(res,1,200,'',delivers);  
    }, 

    

}


module.exports = deliverControl