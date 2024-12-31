import React, { useEffect, useState } from 'react';
import CardContainer from '../components/UI/CardContainer';
import { getQuestions } from '../api/GetApi';

const Cards = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const result = await getQuestions();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h1>Loading...</h1>;

  return (
    <main className="main-cards">
      <nav>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here..."
          className="search-input"
        />
      </nav>
      <section className="cards-section">
        {filteredData.length > 0 ? (
          filteredData.map((curElem, index) => (
            <CardContainer data={curElem} route={curElem.title} key={index} />
          ))
        ) : (
          <h2>No results found</h2>
        )}
      </section>
    </main>
  );
};

export default Cards;
