import React, { useEffect, useState } from "react";
import opencage from 'opencage-api-client'

const LocationComponent = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [address, setAddress] = useState("");

  var api_key = '68cf56fa9c6a4506a10ff5550808ded7'
  var api_url = 'https://api.opencagedata.com/geocode/v1/json'
  

  useEffect(() => {
    const getCoords = async () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                const { latitude, longitude} = position.coords;
                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);
                var query = latitude + ',' + longitude
                setCoordinates(position.coords)
                fetchData(query)
                }
            )
        }
    }
    const fetchData = async (queryIn) => {       

        var stringIsInvalid = queryIn === undefined ||
                            typeof queryIn !== 'string' ||
                            queryIn.length < 1;

        if(stringIsInvalid) {
            console.error("URI component would be undefined, aborting fetch")
            return;
        };

      //  console.info("Query: " + queryIn)
       // console.info("Encoded URI: " + encodeURIComponent(queryIn))
        //var request_url = api_url + '?' + 'key=' + api_key + '&q=' + encodeURIComponent(queryIn) + '%pretty=1' + '&no_annotations=1'

        //console.info("URL Query: " + request_url)
        console.warn("Fetching from api")
        const api_key1 = '68cf56fa9c6a4506a10ff5550808ded7';
        opencage.geocode({ key: api_key1, q: queryIn }).then(response => {
            //results = response
            setAddress(response.results[0].formatted)
        }).catch(err => {
            console.error(err);
        })
    };
    getCoords();
  }, []);

  // Replace YOUR_API_KEY with your actual OpenCage API key

  return (
    <div>
      {address && <p>Address: {address}</p>}
    </div>
  );
};

export default LocationComponent;
