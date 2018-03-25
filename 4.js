//console.log(process.argv);
var fs = require('fs');
fs.readFile(process.argv[2],'utf8', function(err,data)
{
    var str=data;
    var len= str.length;
    var counter=0;
    
    for (var i=0; i<len;i++)
   {
    if(str[i]=="\n")
    {
        counter++;
    }
   }
   console.log(counter);

} );

