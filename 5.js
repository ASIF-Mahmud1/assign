//console.log(process.argv);
var fs= require('fs');
let directory= process.argv[2].toString();
let extension= process.argv[3].toString();
var path= require('path');


fs.readdir(directory, function callback (err,list)
{
    if(err)
    {
        console.log(err.message);
    }
    else
    {
        for(var i=0;i<list.length; i++)
        {
           // console.log(  i+" "+path.extname(list[i]));
            if(path.extname(list[i])== "."+extension)
            {
                console.log(list[i]);
            }
        }
       // console.log(path.extname(list[0]));
    }
});