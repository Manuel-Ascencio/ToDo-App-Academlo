const express = require('express');
const cors = require('cors');

const { todosRouter } = require('./routes/todos-routes');
const { sequelize } = require('./util/database');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/todos', todosRouter);

sequelize
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

sequelize
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

app.listen(4000, () => {
  console.log('Express app running');
});
