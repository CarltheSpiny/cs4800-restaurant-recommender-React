import React, { useState, useEffect } from 'react';
import RestaurantJson from '../network/backup-restaurant-output.json'

const FetchFromURL = ({ url }) => {
  const [data, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const headers = new Headers({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  useEffect(() => {
    const fetchData = async () => {
      var requestOptions = {
        method: 'GET',
        redirect: 'follow',
        header: headers
      };
      
      try {
        const response = await fetch(url, requestOptions);
        const jsonData = await response.json();
        setPageContent(jsonData);
        console.log(jsonData)
        if (response.status == 500) {
          setPageContent(RestaurantJson)
          console.log("Error from Server")
        }
      } catch (error) {
        console.log(error)
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message + ' ' + url}</p>;
  }

  return (
    <div>
      <div>
        <span>Number of Restaurants returned: {Object.keys(data).length} </span>
      </div>
      <div>
        <span>{JSON.stringify(data.restaurants[0].name, null, 2)}</span>
        <span>{JSON.stringify(data.restaurants[1].name, null, 2)}</span>
        <span>{JSON.stringify(data.restaurants[2].name, null, 2)}</span>
      </div>
    </div>
  );
};

export default FetchFromURL;
