import "./header-styles/SearchCatagory.css";
const SearchCatagory = () => {
  return (
    <div className="search-catagory-container">
      <div>
        <p className="search-kata">Stay</p>
        <span className="underline underline-stay"></span>
      </div>
      <div>
        <p className="search-kata">Experiance</p>
        <span className="underline underline-exp "></span>
      </div>
      <div>
        <p className="search-kata">Online Experience</p>
        <span className="underline underline-online "></span>
      </div>
    </div>
  );
};
export default SearchCatagory;
