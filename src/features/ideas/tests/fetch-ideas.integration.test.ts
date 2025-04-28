// src/features/ideas/tests/fetch-ideas.integration.test.ts
import { describe, it, expect } from "vitest";
import { fetchIdeas } from "../infrastructure/fetch-ideas";

describe("fetchIdeas (integration)", () => {
    it("should fetch real ideas from Supabase", async () => {
        const ideas = await fetchIdeas();
        expect(Array.isArray(ideas)).toBe(true);

        if (ideas.length > 0) {
            const idea = ideas[0];
            expect(idea).toHaveProperty("id");
            expect(idea).toHaveProperty("title");
            expect(idea).toHaveProperty("description");
            expect(idea).toHaveProperty("created_at");
        }
    });
});
