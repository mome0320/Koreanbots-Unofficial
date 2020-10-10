const Base = require('./Base');
const User = require('./User');
const Bot = require('./Bot');

class Report extends Base {}

Report.TYPES = {
    id: Number,
    issuer: User,
    type: String,
    reported: String,
    bot: Bot,
    state: Number,
    category: String,
    desc: String
}
Report.OPTION = ["id"]