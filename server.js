const app = require('./lib/app');
const PORT = 7891;

app.listen(PORT, ()=> {

  console.log(`App started on ${PORT}`);
});