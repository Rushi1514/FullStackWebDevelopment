const fs=require('fs')
let counter=0;
let count=0;
fs.readFile("text1.txt",'utf-8', function(err, data){
    let lines=data.split('\n');
   for(let i=0;i<lines.length;i++){
   // console.log(lines[i]);
    count++;
}
//console.log(count);
fs.readFile("text2.txt",'utf-8',function(err,file){
    let lines=file.split('\n');
    for(let i=0;i<lines.length;i++){
    // console.log(lines[i]);
     counter++;
    }
    ////console.log(counter);
    if(count>counter){
        console.log("Text 1 file is larger then other file")
    }
    else{
        console.log("Text 2 file is larger then other file")
    }
});
});