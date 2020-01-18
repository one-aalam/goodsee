import { useEffect, useState } from 'react';


export const useFetch = (url: string, options: any) => {
    const [ response, setResponse ] = useState(null!);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const res = await fetch(url, options);
              const json = await res.json();
              setResponse(json);
              setLoading(false)
            } catch (error) {
               setError(error);
               setLoading(false)
            }
        };
        fetchData();
    }, [ url, options ]);

    return {
        error,
        loading,
        response
    };
};

// https://dev.to/pallymore/clean-up-async-requests-in-useeffect-hooks-90h