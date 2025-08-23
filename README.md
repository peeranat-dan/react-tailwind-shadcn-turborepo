# React Tailwind Shadcn Turbo Monorepo

A modern React application setup using Tailwind CSS v4, Shadcn UI components, and pnpm workspaces for scalable monorepo development.

## 🚀 Features

- ⚡ **React 19** with TypeScript
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🧩 **Shadcn UI** components with modern design system
- 📦 **pnpm Workspaces** for efficient monorepo management
- ⚡ **Turbo** for lightning-fast builds and caching
- 🔧 **Vite** for blazing fast development
- 🧪 **ESLint** with modern configuration
- 🎯 **TypeScript** for type safety

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v22.18.0 or higher)
- **pnpm** (v10.12.1 or compatible)

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd react-tailwind-pnpm-workspace
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

## 🏃‍♂️ Quick Start

### Development

Start the development server with hot reload:

```bash
pnpm dev
```

This will start the development server at `http://localhost:5173`

### Build

Build all packages for production:

```bash
pnpm build
```

### Type Checking

Check TypeScript types:

```bash
pnpm --filter web check-types
```

## 📁 Project Structure

```
.
├── apps/
│   └── web/                    # Main React application
│       ├── src/
│       │   ├── main.tsx        # Application entry point
│       │   ├── index.css       # Global styles
│       │   └── vite-env.d.ts   # Vite type definitions
│       ├── package.json        # Web app dependencies
│       ├── vite.config.ts      # Vite configuration
│       └── tsconfig.json       # TypeScript configuration
├── libs/
│   ├── ui/                     # Shared UI component library
│   │   ├── src/
│   │   │   ├── components/ui/  # Shadcn UI components
│   │   │   ├── lib/
│   │   │   │   └── utils.ts    # Utility functions
│   │   │   └── styles/
│   │   │       └── globals.css # Global UI styles
│   │   ├── components.json     # Shadcn configuration
│   │   └── package.json        # UI library dependencies
│   ├── eslint-config/          # Shared ESLint configuration
│   │   ├── base.config.js
│   │   └── vite-react.config.js
│   └── tsconfig/               # Shared TypeScript configuration
│       └── tsconfig.react.json
├── package.json                # Root package configuration
├── pnpm-workspace.yaml         # pnpm workspace configuration
└── turbo.json                  # Turbo configuration
```

## 🎨 Design System

This project uses Tailwind CSS v4 with a custom design system featuring:

- **Color Palette**: Neutral base colors with CSS variables
- **Typography**: Consistent text scales and weights
- **Spacing System**: Standardized spacing units
- **Dark Mode**: Built-in dark mode support
- **Component Variants**: Multiple styles for each component

## 🔧 Configuration

### Workspace Configuration

The project uses pnpm workspaces defined in `pnpm-workspace.yaml`:

```yaml
packages:
  - "apps/*"
  - "libs/*"
  - "packages/*"
```

### Turbo Configuration

Turbo is configured for optimal build performance with caching:

- **Build**: Outputs cached to `dist/**`
- **Dev**: Persistent development servers
- **Type Checking**: Dependency-aware type checking

### Shadcn Configuration

Shadcn UI is configured with:

- **Style**: New York design system
- **Base Color**: Neutral
- **CSS Variables**: Enabled for theming
- **Icon Library**: Lucide React

## 📦 Package Scripts

### Root Level

- `pnpm dev` - Start development servers
- `pnpm build` - Build all packages
- `pnpm test` - Run tests

### Web App (`apps/web`)

- `pnpm dev` - Start Vite dev server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check-types` - TypeScript type checking
- `pnpm lint` - ESLint

### UI Library (`libs/ui`)

- `pnpm dev` - Watch and build CSS
- `pnpm build` - Build CSS output

## 🚀 Usage Examples

### Using UI Components

```tsx
import { Button } from "@workspace/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/ui/card";
import { Input } from "@workspace/ui/components/ui/input";

function App() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input placeholder="Enter your name" />
        <Button className="w-full">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎯 Development Tips

1. **Component Development**: Add new components to `libs/ui/src/components/ui/`
2. **Styling**: Use Tailwind classes with the provided design tokens
3. **Type Safety**: Leverage TypeScript for better development experience
4. **Hot Reload**: Changes in the UI library automatically reflect in the web app
5. **Build Optimization**: Turbo handles intelligent caching and builds

## 🔗 Links

- [React Documentation](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [Turbo](https://turbo.build/)
- [Vite](https://vitejs.dev/)
