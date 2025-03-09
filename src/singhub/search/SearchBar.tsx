import { useState } from 'react';
import { Space, DatePicker, ConfigProvider } from 'antd';
import dayjs from 'dayjs';

const DateIcon = () => {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
};

const SeparatorIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
    </svg>
  );
};

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
          <ConfigProvider theme={{
            components: {
              DatePicker: {
                activeBorderColor: 'var(--color-gray-400)',
                hoverBorderColor: 'var(--border-color)',
                activeShadow: 'none',  // 移除阴影
              }
            }
          }}>
            <Space direction="vertical" size={12}>
              <DatePicker.RangePicker
                className="filter-date-picker"
                placeholder={['Start Date', 'End Date']}
                minDate={dayjs(new Date())}
                maxDate={dayjs(new Date()).add(6, 'months')}
                format='MMM DD, YYYY'
                popupStyle={{ '--active-bar-bg': 'var(--color-red-600)' } as React.CSSProperties}
                suffixIcon={<DateIcon />}
                separator={<SeparatorIcon />}
              />
            </Space>
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
