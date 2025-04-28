// vitest.setup.ts
import { vi } from "vitest";
import dotenv from "dotenv";
import 'cross-fetch/polyfill';  // ✅ ADD THIS LINE

// Always load environment variables first
dotenv.config({ path: ".env.local" });