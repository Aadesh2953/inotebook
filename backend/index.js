var express = require("express");
var app = express();
var express = require('express')
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes",require("./routes/notes"));
app.listen(3002, () => {
    
  console.log("listening at 3002");
});
