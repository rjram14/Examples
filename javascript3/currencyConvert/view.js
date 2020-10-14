var url = "https://api.exchangeratesapi.io/latest?base="

/*
function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    console.log(`${url}${base}`)
    fetch(`${url}${base}`,{method:'GET'})
    .then((response) => response.json())
    .then((data) => {
        final = data.rates
        final = (final[output]*parseInt(amount)).toFixed(2)
        var result = `Converted value of ${amount} ${base} is ${final} ${output}`
        document.getElementById('converted').innerText=result;
    })

}*/

async function convert(){
    var base = document.getElementById('base').value;
    var output = document.getElementById('output').value;
    var amount = document.getElementById('amount').value;
    var final;
    let response = await fetch(`${url}${base}`,{method:'GET'})
    let data = await response.json()
    final = data.rates
    final = (final[output]*parseInt(amount)).toFixed(2)
    let result = `Converted value of ${amount} ${base} is ${final} ${output}`
    document.getElementById('converted').innerText=result;
}