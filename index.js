const http = require("http");
const fs = require("fs")
const requests = require("requests");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Jhansi&appid=9f04e25a44db9a82f9a05f52922ea475",)
            .on("data", (chunk) => {
                const objdata = JSON.parse(chunk);
                console.log(chunk);
            })
            .on("end", (err) => {
                if (err) return console.log('connection closed due to errors', err);

                console.log("end");
            });
    }
});

server.listen(8000, "127.0.0.1");