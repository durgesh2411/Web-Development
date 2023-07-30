//making File System.
const fs = require("fs");

//in that we are making a dir named Doc.
 fs.mkdir("Doc", (err) => {
    console.log("error"); 
 });
//we are writing a string in file named bio.txt ,if not present than it is created first.
 fs.writeFile("./Doc/bio.txt","God bless u", (err) => {     console.log("error")});

//we are adding more string in that file.
 fs.appendFile("./Doc/bio.txt", " and I wish a luck", (err) => {
     console.log("error")});

//reading the data from that file,but it comes in binary so we are using encoding.    
 const data = fs.readFile("./Doc/bio.txt","UTF8",(err) => {
     console.log("error");
 });
 console.log(data);

//renaming the file to mybio.
 fs.rename("./Doc/bio.txt","mybio.txt", (err) => {
     console.log("error")});

 //deleting the file.     
 fs.unlink("./Doc/bio.txt", (err) => {
    console.log("error")});
    
//deleting the Folder.   
 fs.rmdir("Doc", (err) => {
    console.log("error found")
 });






