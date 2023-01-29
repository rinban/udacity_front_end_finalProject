export async function fetchingData (url,data) {
    
    // send post request to server
    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    try{
        const newData = await response.json();
        return newData;
  
    }catch(error) {
         console.log("error", error);
    }
}