const https = require('https');
const options = {
    headers: {
        'Cookie': 'hasCookie=true',
    }
}
const node_arg = process.argv[2];
if(!node_arg){console.log('Please input argument \nUse `node app.js <Fund Name>` to get Nav value'); process.exit(1);}
https.get("https://codequiz.azurewebsites.net/",options, res => {
    const filter = /<td[^>]*>(.*?)<\/td>/
    const regexp =  new RegExp(filter, "gm")
    res.on('data', (data) => {
      var matches = data.toString().matchAll(regexp)
      var filtered_data = [];
      for (match of matches) {
        filtered_data.push(match[1].trim());
      }
      filtered_data.forEach((data, index) => {
        if(data === node_arg.trim()){console.log(filtered_data[index+1])}  
      });
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });