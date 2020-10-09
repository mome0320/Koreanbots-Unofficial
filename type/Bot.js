const Base = require('./Base');
const User = require('./User')

class Bot extends Base {}

Bot.TYPES = {
    id: String,
    lib: String,
    prefix: String,
    name: String,
    servers: Number,
    votes: Number,
    intro: String,
    desc: String,
    avatar: String,
    url: String,
    web: String,
    git: String,
    category: [String],
    tag: String,
    discord: String,
    state: String,
    verified: Boolean,
    trusted: Boolean,
    partnered: Boolean,
    vanity: String,
    banner: String,
    status: String,
    bg: String,
    owners: [User]
}
Bot.Search = ["id","lib","prefix","name","intro","desc","tag"]