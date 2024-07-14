const ProductCard = ({
  id,
  title,
  price,
  description,
  discountPercentage,
  thumbnail,
}) => {
  return (
    <div className="m-4 p-2 w-80 border border-black text-center">
      <div className="flex justify-center mb-1">
        <img className="h-56 object-contain" src={thumbnail} alt={title} />
      </div>
      <h2 className="font-bold text-xl">
        {id} {title}
      </h2>
      <p className="font-bold text-lg">
        ${price} - discount of:{discountPercentage}%
      </p>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ProductCard;
