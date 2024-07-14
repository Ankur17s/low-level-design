const Shimmer = () => {
  return Array(10)
    .fill(0)
    .map((n, i) => (
      <div key={i} className="h-80 w-72 border border-black flex flex-col justify-center items-center">
        <div className="h-64 w-60 bg-gray-300"></div>
      </div>
    ));
};

export default Shimmer;
