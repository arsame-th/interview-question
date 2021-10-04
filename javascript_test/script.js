console.log('hello')

const asyncFunction = async() => {
    let result = 0;
    await fetch('http://codequiz.azurewebsites.net/data')
    .then(res => {
    return res.json();
    })
    .then(response =>{
    result = response.data
    })
    return result
    }
    const calculation = async () => {
    const number1 = await asyncFunction()
    console.log(number1 * 10)
    }
    calculation()