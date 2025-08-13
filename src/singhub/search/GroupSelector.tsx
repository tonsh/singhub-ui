import { useEffect, useState } from 'react';
import { Select, Space, ConfigProvider } from 'antd';
import { Label } from './types';

interface GroupData {
  group: Label;
  items: Array<Label>;
}

interface SelectorOption {
  value: string;
  label: string;
}

interface SelectorData {
  [key: string]: SelectorOption[];
}

const ArrowDownIcon = () => {
  return (
    <svg fill="none" viewBox="0 0 24 24">
      <path d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  );
};


interface GroupSelectorProps {
  uri: string;
  label: string;
  groupPlaceholder: string;
  placeholder: string;
  screenSize: string;
  groupValue?: string;
  itemValue?: string;
  onGroupChange?: (value: string | undefined) => void;
  onItemChange?: (value: string | undefined) => void;
}

export default function GroupSelector({ 
  uri, 
  label, 
  groupPlaceholder, 
  placeholder, 
  screenSize,
  groupValue,
  itemValue,
  onGroupChange,
  onItemChange
}: GroupSelectorProps) {
  const [data, setData] = useState<SelectorData>({});
  const [groups, setGroups] = useState<SelectorOption[]>([]);
  const [items, setItems] = useState<SelectorOption[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${import.meta.env.VITE_SINGHUB_API_URL}${uri}`);
        const result: GroupData[] = await response.json();

        const data: SelectorData = {};
        const groups: SelectorOption[] = [];
        result.forEach((item: GroupData) => {
            data[item.group.uuid] = item.items.map((opt: Label) => ({value: opt.uuid, label: opt.name}));
            groups.push({value: item.group.uuid, label: item.group.name});
        });
        setData(data);
        setGroups(groups);
      } catch (error) {
        console.error('获取数据失败:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uri]);

  // 当 groupValue 改变时，更新 items 选项
  useEffect(() => {
    if (groupValue && data[groupValue]) {
      setItems(data[groupValue]);
    } else {
      setItems([]);
    }
  }, [groupValue, data]);

  const handleGroupChange = (value: string) => {
    onGroupChange?.(value);
  };

  const handleItemChange = (value: string) => {
    onItemChange?.(value);
  };

  return (
    <>
      <div className="filter-row">
        <span className="filter-label">{label}: </span>
        <ConfigProvider theme={{
            components: {
            Select: {
                activeBorderColor: 'var(--color-gray-400)',
                hoverBorderColor: 'var(--border-color)',
                activeOutlineColor: 'none',  // 移除阴影
            }
            }}}>
            <Space direction={screenSize === 'large' ? 'horizontal' : 'vertical'} size={12}>
                <Select
                    options={groups}
                    loading={loading}
                    placeholder={groupPlaceholder}
                    allowClear={true}
                    suffixIcon={<ArrowDownIcon />}
                    value={groupValue}
                    onChange={handleGroupChange}
                    style={{ width: '170px' }}
                />
                <Select
                    options={items}
                    loading={loading}
                    placeholder={placeholder}
                    allowClear={true}
                    suffixIcon={<ArrowDownIcon />}
                    value={itemValue}
                    onChange={handleItemChange}
                    style={{ width: 'var(--input-max-width)' }}
                />
            </Space>
        </ConfigProvider>
      </div>
    </>
  );
}