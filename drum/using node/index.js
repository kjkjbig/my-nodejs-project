const fs =  require("fs");

// fs.writeFile("message.txt" , "HEllo" , (err) => {
//     if (err) throw err;
//     console.log("file save");
// });

fs.readFile("./message.txt", "utf8" , (err,data) => {
    if (err) throw err;
    for (let i = 0; i < data.length; i++){
        console.log(data[i]);
    }
});
