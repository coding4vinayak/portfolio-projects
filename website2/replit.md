# Insurance Services Web Application

## Overview

This is a full-stack web application for an insurance services business (Urmila Deshmukh Insurance Services) built with React frontend and Express backend. The application serves as a professional insurance advisor platform offering various insurance products with a modern, responsive design.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React Query (@tanstack/react-query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Connect-pg-simple for PostgreSQL session storage
- **Build Tool**: ESBuild for production bundling

### Development Setup
- **Development Server**: tsx for TypeScript execution
- **Hot Module Replacement**: Vite HMR with runtime error overlay
- **Development Tools**: Replit-specific development enhancements

## Key Components

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Migration System**: Drizzle Kit for database schema management
- **Type Safety**: Full TypeScript integration with Drizzle ORM

### UI Components
- **Design System**: Custom Tailwind configuration with CSS variables
- **Component Library**: Comprehensive set of reusable UI components
- **Responsive Design**: Mobile-first approach with breakpoint utilities
- **Accessibility**: ARIA-compliant components using Radix UI

### Business Features
- **Insurance Services**: Life, health, car, travel, and business insurance
- **Contact Forms**: Customer inquiry and quote request functionality
- **Standalone Quote Forms**: Separate shareable HTML/CSS/JS files for independent distribution
- **WhatsApp Integration**: Direct communication channel with automated message generation
- **Image Carousel**: Product showcase with auto-advance
- **Responsive Navigation**: Mobile-friendly menu system
- **Multi-language Support**: English, Hindi, and Marathi translations

## Data Flow

### Client-Server Communication
- **API Layer**: RESTful API with `/api` prefix
- **Request Handling**: Centralized API request utility with error handling
- **Authentication**: Cookie-based session management
- **Data Fetching**: React Query for caching and synchronization

### State Management
- **Server State**: React Query for API data caching
- **Client State**: React hooks for local component state
- **Form State**: React Hook Form for form management
- **Toast Notifications**: Custom toast system for user feedback

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Framework**: Radix UI primitives, Tailwind CSS
- **Database**: Drizzle ORM, Neon Database driver
- **Utilities**: Date-fns, clsx, class-variance-authority
- **Development**: TypeScript, Vite, ESBuild

### Third-Party Services
- **Database Hosting**: Neon Database (PostgreSQL)
- **External APIs**: WhatsApp integration for messaging
- **CDN Resources**: Google Fonts, Font Awesome icons

## Deployment Strategy

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations for schema deployment

### Environment Configuration
- **Database**: Requires `DATABASE_URL` environment variable
- **Build Process**: Separate client and server build steps
- **Static Assets**: Served from Express in production

### Development vs Production
- **Development**: Vite dev server with HMR and error overlay
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection pooling for production scalability

### Key Architectural Decisions

1. **Monorepo Structure**: Organized with separate `client`, `server`, and `shared` directories for clear separation of concerns
2. **Type Safety**: Full TypeScript integration across frontend, backend, and database layers
3. **Modern UI**: Chose Radix UI + Tailwind for accessible, customizable components
4. **Lightweight Routing**: Wouter instead of React Router for smaller bundle size
5. **Database Choice**: Drizzle ORM for type-safe database operations with PostgreSQL
6. **Session Management**: Cookie-based sessions for simpler deployment and security
7. **Build Strategy**: Separate client/server builds for optimal production deployment
8. **Standalone Forms**: Pure HTML/CSS/JS quote forms in `quote-form-standalone/` for independent sharing

### Standalone Quote Form Features

The `quote-form-standalone/` folder contains:

#### Files Structure
- `index.html` - Main interactive form with language switcher
- `styles.css` - Complete responsive styling
- `script.js` - Multi-language support and form validation
- `quote-form-english.html` - Single-file English form
- `quote-form-hindi.html` - Single-file Hindi form  
- `quote-form-marathi.html` - Single-file Marathi form
- `README.md` - Complete documentation

#### Features
- **Multi-language Support**: Seamless switching between English, Hindi, Marathi
- **Form Validation**: Client-side validation with multilingual error messages
- **WhatsApp Integration**: Automatic message generation and sending
- **Professional Design**: Urmila Deshmukh branding with responsive layout
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Mobile Optimized**: Perfect for mobile sharing and usage
- **Standalone**: No dependencies on main React application

### Complete Standalone Website

The `website-standalone/` folder contains a full HTML/CSS/JS version of the entire website:

#### Files Structure
- `index.html` - Complete website structure with all sections
- `styles.css` - Professional responsive styling
- `script.js` - Interactive functionality and animations
- `README.md` - Complete documentation

#### Website Sections
- **Navigation**: Fixed header with mobile hamburger menu
- **Hero Section**: Professional intro with call-to-action
- **Services Carousel**: Auto-advancing showcase of 5 insurance services
- **Services Grid**: Detailed 6-service cards with features
- **About Section**: Why choose Urmila Deshmukh value propositions
- **Contact Section**: Comprehensive form with validation
- **Footer**: Complete information with "Created by abetworks.in" attribution

#### Key Features
- **Interactive Carousel**: Auto-advance, manual controls, touch support
- **Form Validation**: Email, phone validation with success/error messages
- **WhatsApp Integration**: Floating button and form message generation
- **Responsive Design**: Mobile-first approach with all breakpoints
- **Performance Optimized**: Lazy loading, debounced events, smooth animations
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support