import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPage = ({ url }) => {
  const [pageContent, setPageContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, { withCredentials: true });
        setPageContent(response.data);
      } catch (error) {
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
      <h1>Page Content</h1>
      <pre>{JSON.stringify(pageContent, null, 2)}</pre>
    </div>
  );
};

export default FetchPage;
