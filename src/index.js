const app = require('express')();

const serverId = Math.trunc(Math.random() * 100)

app.get('/', (req, res) => {
  res.send(`running on server: ${serverId}`)
})

app.listen(3000, console.log('listening on port 3000'))
