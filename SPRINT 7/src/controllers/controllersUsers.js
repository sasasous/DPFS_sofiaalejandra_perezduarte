const path = require('path');
const fs = require('fs');

module.exports = {
    index: (req, res) => {
        let users = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../database/users.jsom')));
        res.render(path.resolve(__dirname, '../views/users/admin'), {users});
    }
}