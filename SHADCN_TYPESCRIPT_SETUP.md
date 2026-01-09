# Shadcn UI & TypeScript Setup Instructions

The current codebase uses Tailwind CSS and Vite but lacks a full Shadcn UI and TypeScript integration. This document outlines how to set them up.

## 1. Why `/components/ui`?
Shadcn UI operates on a "copy-paste" philosophy where you own the component code. 
- **Organization**: Separates generic UI components (Buttons, Inputs) from business-logic components.
- **Independence**: Each component in `ui/` is standalone and can be customized directly.
- **Convention**: The CLI tools explicitly look for and place components in this directory.

## 2. Setting up Shadcn UI
Since Tailwind is already installed, initialize Shadcn UI:

```bash
# Initialize shadcn-ui
npx shadcn-ui@latest init
```

You will be asked a few questions. Recommended answers for this project:
- **TypeScript**: no (currently) or yes (if migrating)
- **Style**: Default
- **Base Color**: Slate
- **Global CSS**: `src/index.css`
- **CSS Variables**: yes
- **Tailwind config**: `tailwind.config.js`
- **Components alias**: `@/components`
- **Utils alias**: `@/lib/utils`

## 3. Migrating to TypeScript
To support TypeScript, follow these steps:

### A. Install Dependencies
```bash
npm install -D typescript @types/react @types/react-dom @types/node
```

### B. Create `tsconfig.json`
Create a `tsconfig.json` in the root directory:
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### C. Update Vite and Linting
Ensure `vite.config.js` handles TS (usually automatic). You may need `vite-tsconfig-paths` plugin for alias resolution if standard aliases don't suffice.

### D. Rename Files
Rename your `.jsx` files to `.tsx` and `.js` files to `.ts`. Fix type errors.

## 4. Install Component Dependencies
The `FeaturedSpotlight` component requires:
```bash
npm install lucide-react
```
