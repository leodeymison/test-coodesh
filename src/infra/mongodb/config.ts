import mongoose from "mongoose"

export default () => {
    mongoose.connect('mongodb://localhost:27017/coodesh').then(res => {
        console.log("Mongodb database started successfully")
    }).catch(error => {
        console.log("Error starting mongodb database: "+error)
    })
}