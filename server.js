var express = require("express");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
var port = process.env.PORT||2410
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

const {movieData,users,bookings}=require("./data")

app.post("/login",function(req,res){
  let {email,password}=req.body
  let index=users.findIndex(ele=>ele.email===email&&ele.password===password)
  
  if(index>=0){
    let reqUser1={...users[index]}
    delete reqUser1.password
    res.send(reqUser1)
  }
  else{
    res.status(404).send("Invalid username password")
  }
})

app.get("/moviesData/:city",function(req,res){
  let {lang,format,genre}=req.query
  // console.log(req.query)
  let {city}=req.params
  // console.log(lang,format,genre)
  let movies1=[...movieData]

  if(city){
    movies1=movies1.filter(ele=>ele.city===city)
  }
  if(lang){
    movies1=movies1.map(ele=>({ ...ele,shows:ele.shows.filter(sh=>sh.lang.findIndex(ln=>ln===lang)>=0)}))
  }
  if(format){
    movies1=movies1.map(ele=>({...ele,shows:ele.shows.filter(sh=>sh.format.findIndex(fm=>fm===format)>=0)}))
  }
  if(genre){
    movies1=movies1.map(ele=>({...ele,shows:ele.shows.filter(sh=>sh.genre.findIndex(gn=>gn===genre)>=0)}))
  }
  
  console.log(movies1);
  res.send(movies1)
})

app.post("/postTicketData",function(req,res){
  let body=req.body
  const {title,movieHall,seats,time,date}=body

  let index=movieData.findIndex(ele=>ele.halls.findIndex(h=>h.name===movieHall)>=0)
  let index2=movieData[index].halls.findIndex(ele=>ele.name===movieHall)
  let index3=movieData[index].halls[index2].timings.findIndex(t=>t.tm===time)
  movieData[index].halls[index2].timings[index3].sbooked=  [...movieData[index].halls[index2].timings[index3].sbooked,...seats] 
  console.log(movieData[index].halls[index2].timings[index3])
  bookings.push(body)
  movieData[index].halls[index2].timings[index3].date=date
  console.log(body);
  res.send(movieData[index].halls[index2].timings[index3])
})

app.get("/purchaseHistory",function(req,res){
  console.log(bookings)
  res.send(bookings)
})
app.get("/getUserData",function(req,res){
  res.send(users[0])
})
app.post("/submitUser",function(req,res){
  let body=req.body
  users[0]=body
  res.send("success")
})