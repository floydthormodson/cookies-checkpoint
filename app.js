const express =require('express');
const app =express();
const morgan =require('morgan');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res)=>{
    res.send('Home Screen, just so its not blank')
})

app.get('/login',(req, res)=> {

    let name = req.query
    if (name !== undefined) {
      res.cookie("name", req.query.name);
    }
    res.end();
  })
  
  app.get('/hello', (req, res)=> {
    if (req.cookies) {
      res.send(`Welcome ${req.cookies.name}!`)
    } else {
      res.send(`Welcome`)
    }
  })

const port = 3008
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))