clearInterval()//console.log(process.argv);
var fs = require('fs');
var readme= fs.readFileSync(process.argv[2],'utf8' );
var conv= readme.toString(readme);
var len = conv.length;
var counter =0;

for (var i=0; i<len;i++)
{
    if(conv[i]=="\n")
    {
        counter++;
    }
}

console.log(counter);