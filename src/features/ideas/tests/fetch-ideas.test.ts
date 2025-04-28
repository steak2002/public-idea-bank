//src/features/ideas/tests/fetch-ideas.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
vi.mock("@/shared/services/supabase-client");

import { fetchIdeas } from "../infrastructure/fetch-ideas";
import { mockSupabaseSelectIdeasSuccess, mockSupabaseGetPublicUrl } from "@/test/utils/supabase-mocks";

describe("fetchIdeas", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("should return an array", async () => {
        mockSupabaseSelectIdeasSuccess([{ id: 1, title: "Idea 1", description: "Desc 1", created_at: new Date().toISOString(), image_url: "image.png" }]);
        mockSupabaseGetPublicUrl();

        const ideas = await fetchIdeas();
        expect(Array.isArray(ideas)).toBe(true);
        expect(ideas.length).toBe(1);
    });

    it("should have correct fields if there are ideas", async () => {
        mockSupabaseSelectIdeasSuccess([{ id: 1, title: "Idea 1", description: "Desc 1", created_at: new Date().toISOString(), image_url: "image.png" }]);
        mockSupabaseGetPublicUrl();

        const ideas = await fetchIdeas();
        expect(ideas[0]).toHaveProperty("id");
        expect(ideas[0]).toHaveProperty("title");
        expect(ideas[0]).toHaveProperty("description");
        expect(ideas[0]).toHaveProperty("created_at");
        expect(ideas[0]).toHaveProperty("image_url");
    });
});
