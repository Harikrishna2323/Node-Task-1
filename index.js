const path = require('path');
const fs = require('fs');
//joining path of directory 

const folderFiles = ['documents', 'pictures', 'B23WD']
const folderLoop = folderFiles.forEach((el)=>{
    const directoryPath = path.join(__dirname, `${el}`);
//passsing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        console.log(__dirname," :  " ,file); 
    });
});
});
