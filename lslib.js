//console.log(process.argv);
var fs= require('fs');
var path= require('path');

module.exports = function(dirname, ext, callback)
{
    let directory=dirname;
    let extension= "." + ext;
    
    fs.readdir(directory, function (err,list)
{
    if(err)
    {
        //console.log(err.message);
         callback(err, null);
    }
    else
    
    {
        collect= [];
        
        for(var i=0;i<list.length; i++)
        {
           // console.log(  i+" "+path.extname(list[i]));
            if(path.extname(list[i])==extension)
            {
                collect.push(list[i]);
                //console.log(list[i]);
            }
        }
        //console.log(collect);
        callback(null, collect);
       // console.log(path.extname(list[0]));
    }
});  
    
}
