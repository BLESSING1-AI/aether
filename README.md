# Aether

**Private AI relationship, dating, intimacy & sexual-health coach for adults.**

Aether is a production-ready, privacy-first web application. Every user’s conversations, memories, journal, and personalization are completely isolated. There are no shared accounts, no partner linking, and no way for one user to see another’s data.

## Core Principles

- **Absolute privacy**: Row-level security + ownership checks on every query.
- **Adult-only**: Age gate + 18+ confirmation.
- **Non-judgmental, practical AI**: Warm, honest, evidence-aware coaching.
- **Discreet design**: Neutral branding, no embarrassing notifications.
- **Real features only**: No mocks, no placeholders for core functionality.

## Features

- Email/password authentication (Supabase Auth) with secure sessions
- Private AI chat with streaming, history, search, rename, delete
- Conversation Starter Mode (first message, flirting, asking out, etc.)
- “What do I say?” reply generator
- Relationship Coach
- Intimacy Coach & sexual-health education
- Confidence / performance education
- Educational library
- Optional cycle / fertility tracking (estimates only)
- Tonight & Tomorrow personalised plans
- Private journal
- Transparent memory (view / edit / delete / disable)
- PWA installable
- Dark mode, mobile-first, premium UI
- Free + Premium architecture ready
- Admin dashboard (no access to private chats)

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS 4, Lucide icons
- **Auth & DB**: Supabase (Auth + Postgres + Row Level Security)
- **ORM**: Drizzle ORM
- **AI**: OpenAI SDK (server-side only, configurable model/provider)
- **Validation**: Zod
- **State**: Zustand (client) + server components

## Quick Start

### 1. Prerequisites

- Node.js 20+
- A Supabase project (free tier works)
- An OpenAI API key (or compatible provider)

### 2. Clone & Install

```bash
cd aether
cp .env.example .env.local
# Edit .env.local with your keys
npm install
```

### 3. Database Setup

1. In Supabase Dashboard → SQL Editor, run the contents of `supabase/schema.sql`.
2. Enable Row Level Security policies (included in schema).
3. (Optional) Run `npm run db:generate` if you change the Drizzle schema.

### 4. Run

```bash
npm run dev
```

Open http://localhost:3000

### 5. Production Deploy

- Vercel / Netlify / Railway / Fly.io all work well.
- Set all environment variables from `.env.example`.
- Build command: `npm run build`
- Start command: `npm start`

## Required Credentials

| Variable | Where to get it | Required |
|----------|-----------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project settings | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase project settings | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase project settings (keep secret) | Yes |
| `OPENAI_API_KEY` | platform.openai.com | Yes |
| `OPENAI_MODEL` | e.g. `gpt-4o-mini` | Yes |
| `JWT_SECRET` / `NEXTAUTH_SECRET` | Generate random 32+ char string | Yes |

## Privacy & Security

- Every table has `user_id` and RLS policies that enforce `auth.uid() = user_id`.
- API routes always verify the authenticated user owns the resource.
- AI API key never leaves the server.
- Conversations are never shared or accessible across accounts.
- Account deletion removes all user data.
- No sensitive data stored in localStorage beyond session tokens managed by Supabase.

## Architecture Overview

```
Browser (React)
    ↓ HTTPS
Next.js API Routes / Server Actions
    ↓ ownership checks + rate limit
Supabase Auth + Postgres (RLS)
    ↓
OpenAI (server-side only)
```

## Project Structure

```
src/
  app/                  # App Router pages & API
  components/           # UI components
  lib/                  # Auth, DB, AI, utils
  hooks/                # Client hooks
  types/                # Shared types
supabase/
  schema.sql            # Full schema + RLS
```

## License

Private / proprietary for this project. Adapt as needed.
