const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
var items=[];
app.get("/", function(req, res) {

  var today = new Date();
  // var currentDay = today.getDay();
  // var day = "";

  //   if(currentDay===6 || currentDay===0){
  //     day="Weekend";
  //     //res.render('list', {kindOfDay: day});
  // //  res.sendFile();
  // }else{
  //     day="WeekDay";
  //   //  res.render('list', {kindOfDay: day});
  // //  res.sendFile();
  // }

  // switch (currentDay) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     console.log("Error");
  //
  // }

  var options={
    weekday:"long",
    day:"numeric",
    month:"long",
  };

  var day=today.toLocaleDateString("en-US",options);


  res.render('list', {
    kindOfDay: day,newListItems:items
  });
  // console.log("Hello World!");
  // res.send("Hello");
});

app.post("/",function(req,res){
  var item=req.body.newItem;
  items.push(item);
//  console.log(item);
// res.render('list', {
//    newListItem: item
// });
res.redirect("/");

});

app.listen(3000, function() {
  console.log("Server is Listening on PORT 3000");
});
