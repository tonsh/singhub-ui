# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Notes

- You MUST reply in Chinese in the chat window.
- You MUST write any document in Chinese.

## Project Overview

SingHub UI is a React-based web application for searching and booking sports activities and services. The app features a search interface with filters for dates, times, gender preferences, and activity types, displaying activity listings with availability status and booking information.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
# OR
make lint

# Preview production build
npm run preview

# Reinstall shadcn/ui components and dependencies
make install
```

## Architecture Overview

This is a React + TypeScript + Vite application for SingHub UI, focused on search functionality for activities/services.

### Key Structure
- **Main App**: Simple wrapper that renders the SearchBar component
- **Search Module**: Core functionality in `src/singhub/search/`
  - `SearchBar.tsx` - Main search interface with responsive design, dark mode toggle, and filter modal
  - `SearchList.tsx` - Displays search results
  - `GroupSelector.tsx` - Multi-level dropdown for categories/locations
  - `DateRange.tsx` - Date selection component
  - `PostcodeInput.tsx` - Location input field
  - `CategoryIcon.tsx` - Dynamic icons for different activity categories
  - `types.ts` - TypeScript interfaces (mainly Label interface)

### Technology Stack
- **Frontend**: React 19 + TypeScript + Vite
- **UI Framework**: Ant Design (antd)
- **Styling**: SCSS with modular structure in `src/styles/`
- **Icons**: SVG assets in `src/assets/icons/` for different activity categories

### Responsive Design
- Uses `screenSize` state to toggle between 'medium' (mobile) and 'large' (desktop) layouts
- Responsive breakpoint at 768px
- Filter panel transforms to modal on smaller screens

### Styling Architecture
- Main styles in `src/styles/main.scss`
- Component-specific styles in `src/styles/components/`
- Utility mixins and common styles in `src/styles/utils/`
- Dark mode support via CSS classes

### Development Notes
- The app uses esbuild override to version 0.25.0
- TypeScript configuration splits into app and node configs
- Contains both deprecated inline filter panel and new modal-based filtering