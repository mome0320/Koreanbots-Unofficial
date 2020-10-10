const Base = require('./Base');
const User = require('./User');
const Bot = require('./Bot');

class List extends Base {}

List.TYPES = {
    type: String,
    data: [Bot],
    currentPage: Number,
    totalPage: Number
}
List.OPTION = ["id"]