const Base = require('./Base');
const Bot = require('./Bot');

class User extends Base {}

User.TYPES = {
    id: String,
    avatar: String,
    tag: String,
    username: String,
    perm: Number,
    github: String,
    bots: [Bot]
}
User.OPTION = ["perm"]