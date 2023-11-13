import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DataFetchingComponent = ({ url, request }) => {
  const [data, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const proxyUrl = `http://localhost:3001/api/proxy?url=${encodeURIComponent(url + '?' + request)}`;

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      try {
        const response = await fetch(proxyUrl, requestOptions);
        const textData = await response.text();
        setPageContent(textData);
        console.log(textData)
      } catch (error) {
        setError(error);
        console.log("failed to get response for:" + requestData)
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, request]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from: "{url + '?' + request}"</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetchingComponent;
