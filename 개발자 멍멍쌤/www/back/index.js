const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.listen(5000, function(){
    console.log('listening on 5000')
});

app.get('/', function(req ,res){
    //mysql 컨테이너 접속
    const con_mysql = mysql.createPool({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });

    const SelectQuery = " SELECT * FROM posts";
    con_mysql.query(SelectQuery, (err, result) => {
        res.send(result);
        con_mysql.end();
    })
})
