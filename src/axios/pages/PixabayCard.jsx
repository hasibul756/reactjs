
const PixabayCard = ({ image }) => {
    return (
        <div className="bg-white border rounded-lg shadow-lg overflow-hidden">
            <img
                src={image.webformatURL}
                alt={image.tags}
                loading="lazy"
                className="w-full h-64 object-contain transition-transform transform hover:scale-105"
            />
            <div className="p-4 flex justify-between items-center">
                <div className="flex items-center">
                    <i className="fas fa-heart text-red-500 mr-2"></i>
                    <span className="text-gray-700">{image.likes}</span>
                </div>
                <div className="flex items-center">
                    <i className="fas fa-eye text-gray-500 mr-2"></i>
                    <span className="text-gray-700">{image.views}</span>
                </div>
            </div>
        </div>
    );
};

export default PixabayCard;