import { describe, it, expect } from "vitest";
import { submitIdea } from "../infrastructure/submit-idea";
import { fetchIdeas } from "../infrastructure/fetch-ideas";

describe("submitIdea (integration)", () => {
    it("should submit a new idea to Supabase", async () => {
        const randomTitle = "Test Integration Idea " + Math.random().toString(36).substring(7);

        await submitIdea({
            title: randomTitle,
            description: "Integration test description",
            image: null,
        });

        const ideas = await fetchIdeas();
        const found = ideas.find((idea) => idea.title === randomTitle);

        expect(found).toBeTruthy();
        expect(found?.description).toBe("Integration test description");
    });
});
