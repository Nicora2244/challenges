const { Schema, model} = require('mongoose')

const UserSchema = Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    }
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals:true
    }
})

UserSchema.virtual('task', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'user',
    justOne: false
})

module.exports = model('User',UserSchema)