# Public Idea Bank

A simple platform for submitting and browsing startup ideas.

## Tech Stack

- Next.js 14
- React + TypeScript
- Zustand (state management)
- Supabase (PostgreSQL + Storage)
- Tailwind CSS (styling)
- Vercel (deployment)

## Features

- Submit ideas with title, description, and optional image
- Upload images to Supabase Storage
- View submitted ideas in a responsive list
- Client-side form validation and loading states

## Architecture

- Feature-Sliced Design (FSD)
- Onion Architecture for clear layering
- Fully client/server separated logic
- Zustand per feature slice
- Supabase service layer

## Deployment

App hosted on Vercel.