# CLAUDE.md

这个文件为 Claude Code (claude.ai/code) 在这个仓库中工作时提供指导。

## 项目概述

Singhub UI 是一个基于 React 和 TypeScript 的现代化前端应用，主要用于提供搜索和筛选功能。项目使用 Vite 作为构建工具，Ant Design 作为 UI 组件库，并集成了样式处理和代码质量工具。

## 核心架构

### 技术栈
- **框架**: React 19 + TypeScript
- **构建工具**: Vite 6.1.0
- **UI 组件库**: Ant Design 5.24.1
- **样式处理**: Sass + 自定义 SCSS 组件
- **代码质量**: ESLint + Stylelint

### 目录结构
```
src/
├── singhub/search/          # 搜索功能核心模块
│   ├── SearchBar.tsx        # 主搜索组件
│   ├── GroupSelector.tsx    # 分组选择器
│   ├── DateRange.tsx        # 日期范围选择器
│   ├── PostcodeInput.tsx    # 邮政编码输入
│   ├── SearchList.tsx       # 搜索结果列表
│   └── types.ts            # TypeScript 类型定义
├── styles/                 # 样式文件
│   ├── components/         # 组件样式
│   └── utils/             # 样式工具和混入
└── assets/icons/          # 图标资源
```

### 关键设计模式

1. **URL 状态同步**: SearchBar 组件实现了完整的 URL 状态同步，支持筛选条件与 URL 参数的双向绑定
2. **响应式设计**: 基于屏幕尺寸动态调整组件布局和交互方式
3. **模块化样式**: 使用 SCSS 模块化架构，支持主题切换和组件样式隔离

## 常用开发命令

### 基本开发流程
```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run preview      # 预览构建结果
```

### 代码质量检查
```bash
npm run lint         # 运行 ESLint 检查
make lint           # 运行完整的代码检查（包括 stylelint）
make eslint         # 单独运行 ESLint
make stylelint      # 单独运行 Stylelint 检查 SCSS 文件
```

### 样式处理
```bash
make css-build      # 编译 SCSS 到 CSS
make css-watch      # 监听 SCSS 文件变化并自动编译
```

### 依赖管理
```bash
make install        # 清理并重新安装依赖（使用 --legacy-peer-deps）
```

## 开发注意事项

### 搜索功能开发
- SearchBar 组件是应用的核心，包含复杂的状态管理和 URL 同步逻辑
- 筛选条件通过 FilterState 接口统一管理
- 支持关键词搜索、邮政编码、CCA（课外活动）、位置和日期范围筛选

### 样式开发
- 项目使用混合的样式方案：CSS 模块 + SCSS + 组件样式
- 主题支持通过 CSS 类切换实现（dark-mode/light-mode）
- 响应式断点：768px 为移动端和桌面端的分界线

### TypeScript 配置
- 使用复合项目配置（tsconfig.json, tsconfig.app.json, tsconfig.node.json）
- 严格的 TypeScript 检查配置
- React 19 + 现代化的类型定义

### 构建优化
- Vite 配置了 esbuild 版本锁定为 0.25.0
- 支持 legacy peer deps 安装模式
- 生产构建包含 TypeScript 编译检查
