import directus from "./api/directus";
import { useState, useEffect } from "react";
import Link from "next/link";

// trailers will be populated at build time by getStaticProps()

function Blog({ trailersData }: any) {
  console.log(trailersData);
  const [allTrailers, setAllTrailers] = useState(trailersData);
  const [trailers, setTrailers] = useState(trailersData.slice(0, 2));
  const [countTrailers, setCountTrailers] = useState(trailersData.length);
  const [searchInput, setSearchInput] = useState("");

  const initTrailers = () => {
    setTrailers(allTrailers.slice(0, 2));
  };

  const initGetCountTrailers = () => {
    setCountTrailers(allTrailers.length);
  };

  const updateCountTrailers = (data: any) => {
    setCountTrailers(data.length);
  };

  const getTrailers = (limit: number, offset: number): any => {
    if (!searchInput) {
      setTrailers(allTrailers.slice(offset, limit + offset));
      initGetCountTrailers();
    } else {
      const trailersData = allTrailers.filter((trailer: any) =>
        trailer.title.toLowerCase().includes(searchInput.toLowerCase()),
      );
      setTrailers(trailersData.slice(offset, limit + offset));
      updateCountTrailers(trailersData);
    }
  };

  useEffect(() => {
    (async () => await initGetCountTrailers())();
    initTrailers();
  }, []);

  const [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <div>{count}</div>
      {/* Searchbar */}
      <div>
        <label htmlFor="searchBar">Search bar</label>
        <input
          type="text"
          id="searchBar"
          onChange={(e) => {
            setSearchInput(e.target.value);
            getTrailers(2, 0);
          }}
        />
      </div>

      {/* Trailers */}
      <ul>
        {trailers.map((trailer: any, key: number) => (
          <li key={key}>
            <h3>{trailer.title}</h3>
            <p>{trailer.description}</p>
            <img src={"http://0.0.0.0:8055/assets/" + trailer.image} />
            {/* <p>{trailer.note} / 5</p> */}
            <iframe width="640" height="360" src={trailer.url}></iframe>
            <Link href={"/trailer/" + trailer.id}>Voir la page de ce trailer</Link>
            <hr></hr>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div>
        <h5>Page</h5>
        <section style={{ display: "flex" }}>
          {/* countTrailers / limit */}
          {Array.from({ length: Math.ceil(countTrailers / 2) }, (_, i) => (
            <div
              onClick={() => {
                getTrailers(2, i * 2);
              }}
              key={i}
              style={{ padding: "1rem", background: "grey", marginRight: "1rem" }}
            >
              {i}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  const trailers = await directus.items("trailers").readByQuery();

  return {
    props: {
      trailersData: trailers.data,
    },
  };
}

export default Blog;
