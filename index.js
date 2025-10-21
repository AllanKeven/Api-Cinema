const app = require('./src/app');
const port = 3030;

app.listen(port,()=>{
  console.log(`Api rodando na porta ${port}`)
})