import React from "react";

const SearchBox = ({ onChangeSearch, routeChanging }) => {
  return (
    <div>
      <input
        onChange={onChangeSearch}
        className="--lightest-blue 1"
        type="text"
      />

      <input
        onClick={routeChanging}
        className="b ph3 pv2 input-reset ba br2 b--black bg-transparent grow pointer shadow-5 f6 dib"
        type="submit"
        value="Sign Out"
      />
    </div>
  );
};

export default SearchBox;
