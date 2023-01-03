const http=require('http')
const server=http.createServer((req,res)=>{
  console.log('New connection')
  res.end('Welcome to the Awesome Project')
 })
const PORT=process.end.PORT || 8080
server.listen(PORT,()=>console.log(`listening on port +{PORT}`))
