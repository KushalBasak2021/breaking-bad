import axios from "axios";
import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import CharacterList from "./components/CharacterList";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function search(items) {
    return items.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.nickname.toLowerCase().includes(query.toLowerCase())
      );
    });
  }

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios("https://breakingbadapi.com/api/characters");
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return (
    <div className="app">
      <Header setQuery={setQuery} query={query} />

      {isLoading ? (
        <div className="container">
          <Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <CharacterList items={search(items)} />
      )}
    </div>
  );
}

export default App;
