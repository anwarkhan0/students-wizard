import { useState, useEffect } from 'react';

/**
 * A generic hook to fetch data from a backend API.
 * It handles the loading and error states for you.
 *
 * @template T The expected type of the data to be fetched.
 * @param {string} url The URL of the API endpoint to fetch data from.
 * @returns {{ data: T | null, loading: boolean, error: Error | null }} An object containing the fetched data, loading state, and any errors.
 */
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result: T = await response.json();
        setData(result);
      } catch (e) {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error('An unknown error occurred during fetch.'));
        }
      } finally {
        setLoading(false);
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, loading, error };
}