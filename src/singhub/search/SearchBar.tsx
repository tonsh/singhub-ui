import { useState } from 'react';
import GroupSelector from './GroupSelector';
import DateRange from './DateRange';
import SearchList from './SearchList';

export default function SearchBar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-bar">
          <div className="search-inputs">
            <div className="keyword-field">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              <input type="text" placeholder="Search by keyword" />
            </div>

            <div className="postcode-field">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
                <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
              </svg>
              <input placeholder="Enter postal code" type="text" />
            </div>

            <button className="search-button">Search</button>
          </div>

          <button className="filter-button" title="More Filters" onClick={toggleFilter}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className={isFilterOpen ? "active-icon" : ""}>
              <path d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
          </button>
        </div>

        <div className={`filter-panel${!isFilterOpen ? ' hide' : ''}`}>
          <GroupSelector uri="/school/cca/" label="CCA" groupPlaceholder="Category" placeholder="Co-curricular activities" />
          <GroupSelector uri="/location/" label="Loc" groupPlaceholder="Region" placeholder="Venue" />
          <DateRange />
        </div>
      </div>

      <div className="container">
        <ul>
          <SearchList uri="/subject/list/"/>
        </ul>
      </div>
    </>
  );
}
