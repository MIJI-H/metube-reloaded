import bcrypt from "bcrypt";
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
   { email: {type: String, requried: true, unique: true},
    username: {type: String, requried: true, unique: true},
    password:{type: String, requried: true},
    name:{type: String, requried: true, location: true},
}
);

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;