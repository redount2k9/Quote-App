function getQuote() {
    let request = new XMLHttpRequest();

    // the API url
    let url = 'https://thesimpsonsquoteapi.glitch.me/quotes';

    request.open("GET", url);

    request.onload = function() {
        let data = JSON.parse(this.response);

        // a single object array is returned by the API, so we can access it by the [0] index
        // otherwise we'd have to use the array.forEach function
        let text = `${data[0].quote} - ${data[0].character}`; 

        document.getElementById("quoteDisplay").innerHTML = text;
    };

    request.send();
}
