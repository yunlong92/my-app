import React from "react";

const Search = ({ search }) => {
  function handleChange(event) {
    search.map((item) => {
      const pokeName = item.name;
      if (pokeName === event.target.value) {
        return (
          console.log(pokeName)
        );
      }
    });
    //console.log(event.target.value);
  }

  return (
    <>
      <div className="search">
        <input placeholder="Write pokemonname" onChange={handleChange} />
      </div>
    </>
  );
};

export default Search;
