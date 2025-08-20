import { useEffect, useState } from 'react';

// Utility function to format price
export const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`; // Format price to two decimal places
};

// Custom hook to fetch data from an API
export const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('Network response was not ok');
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error }; // Return data, loading state, and error
};

// Function to generate a random unique identifier
export const generateId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Generate a random ID
};

// Default export
export default { formatPrice, useFetch, generateId };