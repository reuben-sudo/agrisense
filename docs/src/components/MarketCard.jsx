export default function MarketCard({ title, price, seller, image }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-full sm:w-64">
      <img src={image} alt={title} className="w-full h-32 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold text-agriBlue-dark">{title}</h3>
      <p className="text-gray-600">Ksh {price}</p>
      <p className="text-sm text-gray-500 mt-1">Sold by: {seller}</p>
    </div>
  );
}
