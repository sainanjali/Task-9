const fs = require("fs");

// fs.mkdirSync("Anjali");

fs.writeFileSync("Anjali/bio.txt", "My name is Anjali Sain");

fs.appendFileSync("Anjali/bio.txt", " and I am pursuing my btech from Inderprastha Engineering College GZB");

const data = fs.readFileSync("Anjali/bio.txt", "utf8");
console.log(data);

fs.renameSync("Anjali/bio.txt", "Anjali/MyBio.txt");

fs.unlinkSync("Anjali/MyBio.txt");

fs.rmdirSync("Anjali");
