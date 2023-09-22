const whereAmI = function (lat, lng) {
    
    return new Promise((resolve, reject) => {
        $.ajax({
            method: "GET",
            url: `https://geocode.xyz/${lat},${lng}?geoit=json`,
            dataType: "json",
            
        })
        .done(function (data) {
            if (data.city === "Throttled! See geocode.xyz/pricing"){
                reject("Request Throttled");
            }
            resolve(data);
        })
        .fail(function (err) {
            reject(err);
        })
    })

}

whereAmI(52.508, 13.381)
.then((data) => console.log(`You are in ${data.city}, ${data.country}`))
.catch((err) => console.log(err));

/* § Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
 */

whereAmI(19.037, 72.873)
.then((data) => console.log(`You are in ${data.city}, ${data.country}`))
.catch((err) => console.log(err));

whereAmI(-33.933, 18.4743)
.then((data) => console.log(`You are in ${data.city}, ${data.country}`))
.catch((err) => console.log(err));