import mongoose from 'mongoose';

const userSchema = new mongoose.schema(
   { email: {type: String, requried: true, unique: true},
    username: {type: String, requried: true, unique: true},
    password:{type: String, requried: true},
    name:{type: String, requried: true, location: true},
}
);