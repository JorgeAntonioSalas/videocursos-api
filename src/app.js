const express = require('express');
const app = express();
app.use(express.json());

app.use('/api/v1', require('./Routes/usersCourses.routes'));
app.use('/api/v1', require('./Routes/users.routes'));
app.use('/api/v1', require('./Routes/categories.routes'));
app.use('/api/v1', require('./Routes/courses.routes'));
app.use('/api/v1', require('./Routes/videos.routes'));



module.exports = app;