---
description: How to run the FSBO Deal Analyzer locally
---

# Local Development Setup

Follow these steps to get the platform running on your local machine.

## 1. Prerequisites
- **Node.js**: v18 or higher
- **PostgreSQL**: Running locally or via Docker
- **Redis**: Running locally (required for Automations)

## 2. Environment Configuration

### Backend (`server/.env`)
Create a `.env` file in the `server` directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/fsbo_analyzer"
JWT_SECRET="your-super-secret-key"
REDIS_HOST="localhost"
REDIS_PORT=6379
OPENAI_API_KEY="sk-..."
```

### Frontend (`client/.env.local`)
Create a `.env.local` file in the `client` directory:
```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## 3. Running the Backend
// turbo
```powershell
cd server
npm install
npx prisma generate
npx prisma db push
npm run start:dev
```

## 4. Running the Frontend
// turbo
```powershell
cd client
npm install
npm run dev
```

The UI will be available at `http://localhost:3000` and the API at `http://localhost:3001`.
