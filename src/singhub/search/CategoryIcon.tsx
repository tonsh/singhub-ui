import { useEffect, useState } from "react";

const Icons = import.meta.glob('/src/assets/icons/*.svg', { as: 'raw', eager: true });
console.log(Icons);

export const CategoryIcon = ({ name, className }: { name: string, className: string }) => {
  const [SvgPath, setSvgPath] = useState<string | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        // 确保路径正确
        let iconPath = `/src/assets/icons/${name}.svg`;
        if (!Icons[iconPath]) {
            iconPath = '/src/assets/icons/default.svg';
        }

        setSvgPath(Icons[iconPath]);
      } catch (error) {
        console.error('加载 SVG 失败:', error);
      }
    };

    loadIcon();
  }, [name]);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      dangerouslySetInnerHTML={{ __html: SvgPath || '' }}
    />
  );
};
