const fs = require("fs");

//fs.writeFile("message.txt","This is Node!", (err) => {
    //if (err) throw err;
    //c//onsole.log('The file has been saved!');
  //}) If this code runs again then it will delete what you have entered in the text file.

  fs.readFile("message.txt","utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  })