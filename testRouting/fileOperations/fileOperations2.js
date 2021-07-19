var fs = require('fs');

fs.readFile("testFile1.txt", "utf-8", function(err,data){
    if(err) throw(err);
    console.log(data);
})

var data1 = fs.readFileSync("testFile1.txt", "utf8");
console.log(data1);

fs.writeFile("testFile2.txt", "I am Priyanshu Dash", function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("File operation complete");
    }

})

var data2 = "This is a file containing collection";
fs.writeFileSync("testFile2.txt", data2);

fs.appendFile("testFile3.txt", "Appended at the end", function(err){
    if(err){
        console.log(err);
    }
    else(
        console.log("Append operation complete")
    )
})

fs.appendFileSync("testFile3.txt", data1);
