// src/shared/services/supabase-client.ts

// 1. Polyfill fetch and WebSocket for Node.js (vitest, server tests)
if (typeof window === "undefined") {
    const fetch = require('cross-fetch');
    const WebSocket = require('ws');

    if (!globalThis.fetch) {
        (globalThis as any).fetch = fetch;
    }

    if (!globalThis.WebSocket) {
        (globalThis as any).WebSocket = WebSocket;
    }
}

import { createClient } from '@supabase/supabase-js';

// 2. Read environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in environment variables. Check your .env.local file!"
    );
}

// 3. Create the Supabase client
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
