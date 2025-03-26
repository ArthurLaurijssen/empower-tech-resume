# Empower Tech Resume Website

A dynamic, single-page resume website built with Next.js and TypeScript that automatically updates content from a .NET backend.

## Features

- **Dynamic Content**: Checks for new data from the backend API every hour and rebuilds automatically when changes are detected
- **Contact Form**: Integrated email functionality to directly contact the website owner
- **Responsive Design**: Custom-designed UI based on Figma designs
- **Custom UI Components**: Includes reusable components like gradient effects, circle effects, star ratings, and more
- **Form Validation**: Uses Zod for robust form validation
- **Smooth Scrolling**: Custom hook for smooth page navigation
- **TypeScript**: Fully typed codebase for better developer experience and code quality
- **Modern Stack**: Built with Next.js 15 and React 19

## Tech Stack

### Frontend
- Next.js 15.2.3
- React 19.0.0
- TypeScript
- Tailwind CSS
- SASS

### Backend
- .NET API ([repository](https://github.com/ArthurLaurijssen/empower-tech-resume-api))
- CMS ([repository](https://github.com/ArthurLaurijssen/empower-tech-resume-cms))

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- Docker (for production deployment)

### Environment Variables

Create a `.env.local` file in the root directory based on the provided `.env.example`:

```
# Example environment variables
DEVELOPER_API_URL=developer_api_url_here
RESEND_API_KEY=your_api_key_here
FROM_EMAIL=your@verified-domain.com
TO_EMAIL=your-personal@email.com
```

### Backend Services

This project relies on two backend services:

1. API: [empower-tech-resume-api](https://github.com/ArthurLaurijssen/empower-tech-resume-api)
2. CMS: [empower-tech-resume-cms](https://github.com/ArthurLaurijssen/empower-tech-resume-cms)

Make sure both services are running and accessible at the URLs specified in your environment variables.

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/empower-tech-resume.git
cd empower-tech-resume
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

The development server uses Turbopack for faster build times and improved developer experience.

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result

5. Verify that your backend connections are working correctly by checking the console logs or network requests

## Development

This project uses Next.js with TypeScript and Tailwind CSS. The application is built using the App Router structure from Next.js 15. The codebase is structured as follows:

```
empower-tech-resume/
├── app/              # Next.js App Router files
│   ├── fonts/        # Font definitions
│   ├── layout.tsx    # Root layout
│   ├── not-found.tsx # 404 page
│   ├── page.tsx      # Main page component
│   └── globals.scss  # Global styles
├── components/       # React components
│   ├── developer-skills/  # Developer skills section
│   ├── experiences/       # Work experience section
│   ├── footer/            # Footer components
│   ├── header/            # Header components
│   ├── mission/           # Mission statement section
│   └── shared/            # Shared UI components
│       ├── background-container/
│       ├── break-point-indicator/
│       ├── button/
│       ├── circle-effect/
│       ├── formatted-text/
│       ├── forms/
│       ├── gradient-effect/
│       ├── icons/
│       ├── star-rating/
│       └── swiper/
├── hooks/            # Custom React hooks
│   ├── use-form-submission/  # Form handling hook
│   ├── use-smooth-scroll/    # Smooth scrolling hook
│   └── use-zod-validation/   # Form validation hook
├── lib/              # Utility functions and API connections
│   ├── actions/      # Server actions
│   ├── schemas/      # Zod validation schemas
│   ├── services/     # API service functions
│   └── utils/        # Utility functions
├── models/           # Data models
└── public/           # Static assets
```

## Production Deployment

The project is configured for deployment to a VPS running Docker using github actions.


### CI/CD

The project uses GitHub Actions for continuous integration and deployment:

1. Code is pushed to the repository
2. GitHub Actions workflow builds the application
3. The built application is deployed to the VPS
4. Docker container is updated with the new build

## Backend Integration

This website connects to two backend services:

1. **API**: Provides the resume data ([repository](https://github.com/ArthurLaurijssen/empower-tech-resume-api))
2. **CMS**: Manages the content ([repository](https://github.com/ArthurLaurijssen/empower-tech-resume-cms))

The frontend checks for updates from these services hourly to ensure the content is always up-to-date.

### Auto-rebuild Mechanism

The website implements an automatic rebuild mechanism that:

1. Checks for updates from the backend API every hour
2. Compares the latest data with the current data
3. Triggers a rebuild if changes are detected
4. Ensures users always see the most recent content without manual intervention

This is implemented using a scheduled task and Next.js's revalidation features.

## Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code quality issues

## Custom Hooks

The project includes several custom hooks to enhance functionality:

- **use-form-submission**: Manages form state and submission logic
- **use-smooth-scroll**: Provides smooth scrolling functionality for navigation
- **use-zod-validation**: Integrates Zod validation with form handling

## Architecture

The application follows a modular architecture with:

- **Server Components**: Utilizing Next.js App Router for server-side rendering
- **Client Components**: Interactive UI elements with React hooks
- **Shared Components**: Reusable UI elements across the application
- **Service Layer**: Handles API communication with the backend services
- **Validation Layer**: Zod schemas for data validation

## License

[MIT](LICENSE)