const mongoose = require('mongoose')


const connectDb=async ()=>{
    const url=process.env.MONGO_URI || ""
    await mongoose.connect(url)
    .then(() => {
        console.log("Mongodb connected succesfully")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports=connectDb