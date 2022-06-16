const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const HttpError = require("./models/http-error");
const employeesRoutes = require("./routes/employees-routes");
const sequelize = require("./util/database");


app.use(bodyParser.json());

app.use("/api/employees", employeesRoutes);

sequelize.sync().then(
app.listen(3001, () => {
    console.log('hello from express');
})).catch(err => {
    console.log(err);
});



