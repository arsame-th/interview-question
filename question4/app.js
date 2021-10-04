const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function arrow(input)
{
    var middle = (input/2).toFixed(0)
    var text = '';
    var text_middle = '';
    for(let i=0;i<input;i++)
    {
        if(i === 0){
            text = text + '*'  
            if(input == 2){
                console.log(text);  
            }
        }else{
            if((i+1) <= middle){
                for(let j=0;j<i;j++)
                {
                   text = text + ' '
                }
                text = text + '*'
                if((i+1) == middle){text_middle = text; 
                    if((input%2) == 0){
                      console.log(text_middle);  
                      i++;
                    }
                }
            }else{
                text_middle = text_middle.substring(1)
                text = text_middle
            }
        }
        
        console.log(text)
        text = ''
    }
}
rl.question("input arrow number:", function(input) {
    arrow(input)
    rl.close();
});


