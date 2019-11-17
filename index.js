const express = require('express');
const app = express();
const timestampRoutes = require('./routes/timestamp');

app.use('/api/timestamp', timestampRoutes);

const port = process.env.PORT || 5000;
app.listen(port);