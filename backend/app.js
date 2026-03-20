
const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const notesRoutes = require('./routes/notesRoute');


const app = express();


app.use(cors({
  origin: ['http://localhost', 'http://localhost:5173', 'http://127.0.0.1:5500', 'http://ip-vm'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));


app.use(express.json());

// Routes
app.use('/notes', notesRoutes); 

// Port
const port = process.env.PORT || 3000;


sequelize.sync()
  .then(() => {
    console.log("Database synced");
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch(err => {
    console.error('DB error:', err);
  });