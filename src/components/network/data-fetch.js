import React, { useEffect, useState } from 'react';

/**Gets Account info from the Account API and uses the email in @request. Adds the '?' when fetching */
const FetchAccountInfo = ({ url, request }) => {
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
        const response = await fetch(url + '?' + request, requestOptions);
        const textData = await response.json();
        setPageContent(textData);
        console.log(textData)
      } catch (error) {
        setError(error);
        console.log("failed to get response for:" + request)
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
      <pre>{JSON.stringify(data.result.firstName.S, null, 2)}</pre>
    </div>
  );
};


export default FetchAccountInfo;
