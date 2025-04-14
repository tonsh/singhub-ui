import { useEffect, useState } from "react";
import { CategoryIcon } from "./CategoryIcon";

interface Subject {
  uuid: string;
  title: string;
  url: string;
  category_icon: string | null;
  info: string | null;
  register_info: string | null;
  is_full: boolean;
  venue: string | null;
  date_range: string | null;
  open_time: string | null;
}

interface SearchResult {
  total: number;
  next_cursor: number;
  items: Subject[];
}

export default function SearchList({ uri }: { uri: string }) {
    const [data, setData] = useState<SearchResult>({
      total: 0,
      next_cursor: 0,
      items: [],
    });

    useEffect(() => {
      const fetchData = async () => {
        // setLoading(true);

        try {
          const response = await fetch(`${import.meta.env.VITE_SINGHUB_API_URL}${uri}`);
          const result: SearchResult = await response.json();

          console.log(result);
          setData(result);
        } catch (error) {
          console.error('获取数据失败:', error);
        } finally {
        //   setLoading(false);
        }
      };

      fetchData();
    }, [uri]);

    return (
      <>
        {data.items.map((item: Subject) => (
          <li key={item.uuid} className="item-card">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <h2 className="card-title">
                {item.title}
                {item.title}
              </h2>

              <div className="card-info">
                {item.register_info && (
                  <div className="card-row">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                      <span className={`${item.is_full ? 'alert-warning' : 'alert-normal'}`}>{item.register_info}</span>
                  </div>
                )}

                <div className="card-row">
                  {item.category_icon && (
                    <CategoryIcon name={item.category_icon} className="category-icon" />
                  )}
                  <span>{item.info}</span>
                </div>

                {item.venue && (
                  <div className="card-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                      <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span>{item.venue}</span>
                  </div>
                )}

                {item.date_range && (
                  <div className="card-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                        <path d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <span>{item.date_range}</span>
                  </div>
                )}

                {item.open_time && (
                  <div className="card-row">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-4 stroke-current stroke-[1.5]">
                    <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span>{item.open_time}</span>
                </div>
                )}
              </div>
            </a>
          </li>
        ))}
      </>
    );
  }
