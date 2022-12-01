require('dotenv').config(); 
const app = require('./app');
const PORT = process.env.PORT || 3000;
const db = require('./utils/database');
const initModels = require('./models/initModels');
initModels();

db.authenticate()
    .then(()=> console.log('DB connected'))
    .catch((error)=> console.log(error));
//db.sync()
//   .then(()=>console.log('DB synchronized'))
//   .catch((error)=>console.log(error));

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
})