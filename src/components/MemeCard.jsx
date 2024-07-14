const MemeCard = ({ meme }) => {
  return (
    <div className="h-80 w-72 border border-black flex flex-col justify-center items-center">
      <img className="h-64 w-60" src={meme.url} alt="" />
      <p>{meme.title}</p>
    </div>
  );
};

export default MemeCard;
