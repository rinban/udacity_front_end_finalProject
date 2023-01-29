function updateUI(block,valid, content) {

    // error message if at least one input missing
    if(valid == false){
        block.innerHTML = "<h1 class=\"error\"> Please fill out all the 4 fields </h1>"
        return;

    }
    
    // change text depend on departing time
    let weatherText = "The current weather is:";
    if(content.infuture) {
        weatherText = "The weather forecast then is:"
    }

    block.innerHTML = `
            <div class="image">
                <img src="${content.URLimage}" alt="ok">
            </div>
            <div class="message">
                <h2>Trip to ${content.city} on ${content.departing}</h2>
                <p>Your trip is ${content.countdown} days away. You'll stay in ${content.city} for ${content.duration} days.</p>
                <p>
                    <span>${weatherText}</span><br>
                    High temperature is ${content.high_temp}&deg;C, low temperature is ${content.low_temp}&deg;C<br>
                    ${content.forecast}
                </p>
            </div>
    `

    }

export { updateUI };