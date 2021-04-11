
function handleSubmit(event) {
    event.preventDefault()

    let baseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=10001";
    let apiKey = "&appid=feb5077347ee53d4e8314a88815be83d&units=imperial";

    // check what text was put into the form field
    let formText = document.getElementById('name').value;

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch("http://api.openweathermap.org/data/2.5/weather?zip=10001&appid=feb5077347ee53d4e8314a88815be83d&units=imperial")
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message
    })
}

export { handleSubmit }
