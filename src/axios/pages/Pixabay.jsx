import axios from "axios";
import { useEffect, useState } from "react";
import PixabayCard from "./PixabayCard";

const MAX_IMAGES = 100; // Set the maximum number of images to load

const Pixabay = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const apiKey = import.meta.env.VITE_PIXABAY_API_KEY;

    const fetchImages = async (page) => {
        const api = `https://pixabay.com/api/?key=${apiKey}&per_page=20&page=${page}`;
        try {
            const response = await axios.get(api);
            setData((prevData) => {
                const newHits = response.data.hits;
                return [...prevData, ...newHits].slice(0, MAX_IMAGES); // Limit to MAX_IMAGES
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages(page);
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (scrollY + windowHeight >= documentHeight - 200 && !loading && data.length < MAX_IMAGES) {
                setPage((prevPage) => prevPage + 1);
                setLoading(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, data.length]);

    if (loading && page === 1) return <div className="text-center">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error.message}</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Pixabay Image Gallery</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {data.map((image) => (
                    <PixabayCard key={image.id} image={image} />
                ))}
            </div>
            {loading && <div className="text-center mt-4">Loading more images...</div>}
            {data.length >= MAX_IMAGES && !loading && (
                <div className="text-center mt-4 text-gray-600">No more images to load.</div>
            )}
        </div>
    );
};

export default Pixabay;