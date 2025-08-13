import { ConfigProvider, Input, Space } from "antd";

const PostcodeIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"></path>
      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"></path>
    </svg>
  );
};

interface PostcodeInputProps {
  screenSize: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function PostcodeInput({ screenSize, value, onChange }: PostcodeInputProps) {
  return (
    <div className="filter-row">
      <ConfigProvider theme={{
        components: {
          Input: {
            hoverBorderColor: 'var(--border-color-hover)',
            activeShadow: 'none',
          },
        },
      }}>
        <Space direction={screenSize === 'large' ? 'horizontal' : 'vertical'}>
          <span className="filter-label">Postal Code: </span>
          <Input
            className="postcode-input"
            placeholder="Enter postal code"
            allowClear={true}
            prefix={<PostcodeIcon />}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            style={{ width: 'var(--input-max-width)' }}
           />
        </Space>
      </ConfigProvider>
    </div>
  );
}
