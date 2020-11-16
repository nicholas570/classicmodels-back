const con = require('../database/conf');

class Employees {}

Employees.getAll = (req, res) => {
  con.query(`SELECT * FROM employees`, (err, result) => {
    if (err) {
      res.status(500).send('Something went wrong');
    }
    return res.json(result);
  });
};

module.exports = Employees;
