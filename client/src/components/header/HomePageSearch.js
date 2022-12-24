import { useContext } from "react";
import { Context } from "../../context/Context";
import "./header-styles/HomePageSearch.css";

const Search = () => {
  const { handleSearchClick } = useContext(Context);

  return (
    <div className="search-box">
      <span onClick={handleSearchClick}>Anywhere</span>
      <span className="horizontal"></span>
      <span onClick={handleSearchClick}>Any week</span>
      <span className="horizontal"></span>

      <span onClick={handleSearchClick} className="add-guests">
        Add guests
      </span>
      <span className="search-icon-box">
        <i
          onClick={handleSearchClick}
          className="fa-solid fa-magnifying-glass"
        ></i>
      </span>
    </div>
  );
};
export default Search;
