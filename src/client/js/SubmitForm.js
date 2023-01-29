export async function submitForm (event) {

    let formData = {};

    let userData = {
        from: document.getElementById('from').value,
        to: document.getElementById('to').value,
        departDate: document.getElementById('depart').value,
        returnDate: document.getElementById('return').value
    };
    
    let valid = await Client.validateForm(userData);

    if (valid == true){
        formData = Client.CalcDates(userData.departDate, userData.returnDate);

        const geoCoordinates = await Client.fetchingData('/LocationInfo', { location: userData.to});

        const weaForcast = await Client.fetchingData('/WeatherInfo', { 
            latit: geoCoordinates.latit
             , longit: geoCoordinates.longit
            });

        let forecasting= 0;
        if(! formData.infuture) {
            forecasting = formData.countdown; 
        }

        formData.city = weaForcast.city_name;
        formData.high_temp = weaForcast.data[forecasting].high_temp;
        formData.low_temp = weaForcast.data[forecasting].low_temp;
        formData.forecast = weaForcast.data[forecasting].weather.description;

        const cityImage = await Client.fetchingData('/Photo',{ city: userData.to })
        formData.URLimage = cityImage.hits[0].largeImageURL;
        
    }

    const dash = document.getElementById('dashboard');
    Client.updateUI(dash,valid, formData);

}