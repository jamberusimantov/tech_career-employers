const mongoose = require('mongoose')
const DB = require('./DB.utils')
const {filteredPrivateProps} = DB

const idChecker = (id, res) => {
    if (!id) return res.status(400).json({
        success: false,
        message: 'id is required'
    })
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({
            success: false,
            message: 'corrupt id'
        })
    }
    return true
}

const tokenChecker = (token,res)=>{
        if (!token) return res.status(400).json({
            success: false,
            message: 'auth token is required'
        })
    return true
}

const successHandler = (data,res,method) => res.status(200).json({
    success: true,
    data: filteredPrivateProps(data),
    message: method !=='list' ? `${method} user: ${data?.email} successfully` : `got list successfully`
})

const failHandler = (userKey,res) => res.status(400).json({
    success: false,
    message: `${userKey} not found`
})

const queryHandler = (query,res)=>{

    if (!query || Object.keys(query).length === 0) return res.status(400).json({
        success: false,
        message: 'query data is required'
    })
    return true
}

const dataHandler = (data,res,msg)=>{
    if (!data) return res.status(400).json({
        success: false,
        message: unauthorizedToken(msg)
    })
    return true

}



module.exports= {dataHandler,idChecker,tokenChecker,successHandler,failHandler,queryHandler}