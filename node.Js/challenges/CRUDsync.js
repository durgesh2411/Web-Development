//making File System.
const fs = require("fs");

//in that we are making a dir named Durgesh.
fs.mkdirSync("Durgesh");

//we are writing a string in file named bio.txt ,if not present than it is created first.
fs.writeFileSync("Durgesh/bio.txt", " John");

//we are adding more string in that file.
fs.appendFileSync("Durgesh/bio.txt", " is nice ");

//reading the data from that file,but it comes in binary so we are using encoding.
 const get_data = fs.readFileSync("Duresh/bio.txt","utf8");
 //ALTERNATE METHODE FOR READING FILE WITHOUT USING UTF8
// [console.log(get_data);
// org_data = get_data.toString();]
console.log(org_data);

//renaming the file to mybio.
 fs.renameSync("Durgesh/bio.txt","Durgesh/mybio.txt");

 //deleting the file.
 fs.unlinkSync("Durgesh/mybio.txt");
 
 //deleting the Folder.
 fs.rmdir("./Durgesh" , (error) => {
     console.log("Error found");
 });

















