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

export default function DateRange({ screenSize }: { screenSize: string }) {
    return <>
      <div className="filter-row">
        <ConfigProvider theme={{
            components: {
              DatePicker: {
                activeBorderColor: 'var(--color-gray-400)',
                hoverBorderColor: 'var(--border-color)',
                activeShadow: 'none',  // 移除阴影
              }
            }
        }}>
          <Space direction={screenSize === 'large' ? 'horizontal' : 'vertical'}>
            <span className="filter-label">Date Range: </span>
            <DatePicker.RangePicker
              className="filter-date-picker"
              placeholder={['Start Date', 'End Date']}
              minDate={dayjs(new Date())}
              maxDate={dayjs(new Date()).add(6, 'months')}
              format='MMM DD, YYYY'
              popupStyle={{ '--active-bar-bg': 'var(--color-red-600)' } as React.CSSProperties}
              suffixIcon={<DateIcon />}
              separator={<SeparatorIcon />}
              size='small'
              style={{ width: 'var(--input-max-width)' }}
            />
          </Space>
        </ConfigProvider>
      </div>
    </>
}
