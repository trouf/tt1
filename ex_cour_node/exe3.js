var fs = require("fs");
fs.writeFile("hello.txt", "hello node !!!!!!!", (err) => { if (err) { console.log(err); } });
fs.readFile("hello.txt", "utf8", (err, data) => {
    if (err) {
        console.log("erreur de lecture");}
else
   {console.log(data); }
});
