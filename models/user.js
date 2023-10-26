import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    bio: {type: String, required: false},
    followers: [{type: String}],
    following: [{type: String}]
}, {
    collection: 'NetworkBuilder'
});

const db = mongoose.connection.useDb("NUSciWebTeam");
const User = db.model("NUSciWebTeam", UserSchema);

export default User;