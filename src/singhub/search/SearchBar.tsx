import { useState } from 'react';
import GroupSelector from './GroupSelector';
import DateRange from './DateRange';
import SearchList from './SearchList';

export default function SearchBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`search-wrapper ${isDarkMode ? 'dark-mode' : ''}`}>
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

          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="切换主题模式">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
              </svg>
            )}
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
    </div>
    </>
  );
}
