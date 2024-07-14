import { useState } from "react";
import { useEffect } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "../utils/Shimmer";

const Meme = () => {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      fetchMeme();
    }, 500);

    window.addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // window.innerHeight - height of the visible screen
    // window.scrollY - how much i have scroll
    // document.body.scrollHeight - total height of the web page
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMeme();
    }
  };

  const fetchMeme = async () => {
    setShowShimmer(true);
    const response = await fetch("https://meme-api.com/gimme/20");
    const json = await response.json();
    setShowShimmer(false);
    setMemes((memes) => [...memes, ...json.memes]);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 my-3">
        {memes?.map((meme, i) => (
          <MemeCard key={i} meme={meme} />
        ))}
        {showShimmer && <Shimmer />}
      </div>
    </div>
  );
};

export default Meme;
