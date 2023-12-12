import { useState, useEffect } from "react";

function useFetch(url, apiToken) {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [nextPage, setNextPage] = useState("");
  const [totalPhoto, setTotalPhoto] = useState([]);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            authorization: apiToken,
          },
        });
        const data = await response.json();
        setError(false);
        setData(data);
        setTotalPhoto([...totalPhoto, ...data.photos]);
        setNextPage(data["next_page"]);
      } catch (err) {
        setError(true);
        console.log("hopeee");
      } finally {
        setIsLoading(false);
      }
    };
    getData();
    // eslint-disable-next-line
  }, [url, apiToken]);

  const refetch = async (newUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(newUrl, {
        headers: {
          authorization: apiToken,
        },
      });
      const data = await response.json();
      setData(data);
      setTotalPhoto([...totalPhoto, ...data.photos]);
      setNextPage(data["next_page"]);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const searchFetch = async (newUrl) => {
    setIsLoading(true);
    try {
      const response = await fetch(newUrl, {
        headers: {
          authorization: apiToken,
        },
      });
      const data = await response.json();
      setData(data);
      setTotalPhoto([...data.photos]);
      setNextPage(data["next_page"]);
      setError(false);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, nextPage, totalPhoto, refetch, searchFetch };
}

export default useFetch;
