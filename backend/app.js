const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const notesRoutes = require('./routes/notesRoute');

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/notes', notesRoutes); 

// --- TAMBAHKAN KODE INI ---
app.get('/', (req, res) => {
    res.send('Welcome to  Backend API! Go to /notes to see the data.');
});
// --------------------------

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