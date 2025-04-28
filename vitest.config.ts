// vite.config.ts
import { defineConfig } from "vitest/config";
import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const testEnv = process.env.TEST_ENV;

export default defineConfig({
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: "./vitest.setup.ts",
        include: testEnv === "integration"
            ? ["src/**/*.integration.test.ts"]
            : ["src/**/*.test.ts"], // Only in your src folder!
        exclude: [
            "**/node_modules/**",
            "**/dist/**",
            "**/.next/**",
            "**/build/**",
            testEnv !== "integration" ? "**/*.integration.test.ts" : ""
        ].filter(Boolean), // removes empty strings
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
