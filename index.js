const path = require('path');
const express = require('express');
const app = express();
const timestampRoutes = require('./routes/timestamp');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/timestamp', timestampRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});