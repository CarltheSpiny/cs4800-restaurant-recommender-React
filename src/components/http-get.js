import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPage = ({ url }) => {
  const [pageContent, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {

      const proxyUrl = `http://localhost:3001/api/proxy?url=${encodeURIComponent(url)}`;

      try {
        const response = await fetch(proxyUrl);
        const jsonData = await response.json();

        console.log(response.data)
        setPageContent(jsonData);
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
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from {url}</h1>
      <pre>{JSON.stringify(pageContent, null, 2)}</pre>
    </div>
  );
};

export default FetchPage;
