var pass=require("generate-password");
var txt=pass.generate().toString();
console.log(txt);