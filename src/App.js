import React, { useState } from "react";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";

function App() {
  const [url, setUrl] = useState("");

  function handleSearchImage(e) {
    if (e.key === "Enter") {
      let searchValue = e.target.value;
      if (e.target.value === "") {
        setUrl(`https://api.pexels.com/v1/curated?page=${1}&per_page=${20}`);
      } else {
        setUrl(
          `https://api.pexels.com/v1/search?query=${searchValue}&per_page=20`
        );
      }
    }
  }
  return (
    <>
      <Header onSearchImage={handleSearchImage} />
      <Gallery search={url} />
    </>
  );
}

export default App;
