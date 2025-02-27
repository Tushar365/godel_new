
# Godel Space

A Next.js-based web application showcasing AI-powered geospatial insights.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm 9+

### Installation

1. Clone the repository to your local machine 

2. Install dependencies:
```bash
npm install
```

### Development

Run the development server with:
```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000) or the URL provided by Replit.

### Build for Production

Build the application for production:
```bash
npm run build
```

### Run Production Build

After building, start the production server:
```bash
npm run start
```

## Project Structure

- `src/app` - Next.js App Router pages and layouts
- `src/components` - React components
- `public/` - Static assets
- `convex/` - Convex backend functions

## Deployment on Replit

1. Open the Deployments tab by clicking the "Deploy" button in the header
2. Select "Autoscale" deployment type
3. Configure the deployment:
   - Build command: `npm run build`
   - Run command: `npm run start`
4. Click "Deploy" to publish your application

## Technologies Used

- Next.js 15
- React 19
- Tailwind CSS 4
- Convex for backend functions
