# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 React + TypeScript + Vite 的前端项目，名为 singhub-ui。项目使用 Ant Design 作为 UI 组件库，主要功能是提供一个搜索界面，包含关键词搜索、邮政编码筛选、CCA（课外活动）筛选、场地筛选和日期范围筛选等功能。

## 常用命令

### 开发相关
```bash
npm run dev          # 启动开发服务器
npm run build        # 构建项目（TypeScript 编译 + Vite 打包）
npm run preview      # 预览构建结果
```

### 代码质量检查
```bash
npm run lint         # 运行 ESLint 检查
make lint           # 运行 ESLint + Stylelint（推荐）
make eslint         # 仅运行 ESLint
make stylelint      # 仅运行 Stylelint（检查 SCSS 文件）
```

### CSS 相关
```bash
make css-build      # 编译 SCSS 为 CSS
make css-watch      # 监听 SCSS 文件变化并自动编译
```

### 安装依赖
```bash
make install        # 清理并重新安装依赖（使用 --legacy-peer-deps）
```

## 项目架构

### 技术栈
- **构建工具**: Vite 6.1.0
- **框架**: React 19 + TypeScript 5.7.2
- **UI 组件库**: Ant Design 5.24.1
- **样式**: SCSS + CSS Modules
- **代码规范**: ESLint + Stylelint
- **日期处理**: dayjs

### 目录结构
```
src/
├── App.tsx                    # 主应用组件
├── main.tsx                   # 应用入口
├── singhub/                   # 核心业务模块
│   └── search/                # 搜索功能模块
│       ├── SearchBar.tsx      # 主搜索组件（包含筛选逻辑）
│       ├── GroupSelector.tsx  # 分组选择器组件
│       ├── DateRange.tsx      # 日期范围选择器
│       ├── PostcodeInput.tsx  # 邮政编码输入
│       ├── SearchList.tsx     # 搜索结果列表
│       ├── CategoryIcon.tsx   # 分类图标组件
│       └── types.ts           # TypeScript 类型定义
├── styles/                    # 样式文件
│   ├── main.scss             # 主样式入口
│   ├── theme.scss            # 主题变量
│   ├── components/           # 组件样式
│   └── utils/                # 工具样式
└── assets/                   # 静态资源
    └── icons/                # SVG 图标
```

### 核心功能架构

**搜索功能 (SearchBar.tsx)**
- 状态管理：使用 useState 管理筛选状态，包括关键词、邮政编码、CCA、场地、日期范围
- URL 同步：通过 URLSearchParams 实现筛选条件与浏览器 URL 的双向同步
- 响应式设计：根据屏幕尺寸动态调整布局（大屏/中屏）
- 模态框筛选：使用 Ant Design Modal 组件提供高级筛选选项

**组件通信模式**
- 父子组件通过 props 传递状态和回调函数
- 使用受控组件模式管理表单状态
- 通过回调函数实现子组件向父组件的状态更新

**API 集成**
- GroupSelector 组件通过 uri 属性动态获取筛选选项
- SearchList 组件根据搜索参数动态加载结果

## 开发注意事项

### TypeScript 配置
- 使用严格模式 (`strict: true`)
- 启用未使用变量和参数检查
- 配置为 ESNext 模块解析

### 样式开发
- 使用 SCSS 作为 CSS 预处理器
- 样式文件采用模块化组织方式
- 支持主题切换（深色/浅色模式）

### 代码规范
- 遵循 ESLint 和 React Hooks 规则
- 所有 SCSS 文件需通过 Stylelint 检查
- CI/CD 会自动运行代码质量检查

### 浏览器兼容性
- 目标浏览器：支持 ES2020 的现代浏览器
- 使用 DOM API 和 DOM.Iterable

### API 端点模式
项目中的 API 调用遵循以下模式：
- `/school/cca/` - 课外活动数据
- `/location/` - 场地位置数据
- `/subject/list/` - 搜索结果数据
