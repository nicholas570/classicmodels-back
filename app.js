const express = require('express');
const cors = require('cors');
const employees = require('./routes/employees');

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/api/employees', employees);

app.listen(port, (err) => {
  if (err) {
    throw new Error(err);
  } else {
    // eslint-disable-next-line
    console.log(`server listening on port: ${port}`);
  }
});
