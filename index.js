var express = require("express");
var path = require("path");
var app = express();
var PORT = 2929;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

class TableBooking {
    constructor(name, number, email, displayId){
        this.name = name;
        this.number = number;
        this.email = email;
        this.displayId = displayId;
    };
};

const testTable = new TableBooking(`nils`, 09877, `nils@email.com`, `Nils table keep OFF`);
const tables =[
    testTable
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});
app.get("/api/tables/:tables", function(req, res) {
    var chosen = req.params.tables;
    tables.forEach(table => {
        if (chosen === tables.displayId){
            return res.json(tables.displayId)
        };
    })
});
app.post("/api/tables", function(req, res) {
    const newTable = req.body;
    newTable = new TableBooking(name, number, email, displayId)
    console.log(neTable);
    tables.push(newTable);
    res.json(newTable);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});