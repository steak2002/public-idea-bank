// src/features/ideas/tests/submit-idea.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
vi.mock("@/shared/services/supabase-client");

import { submitIdea } from "../infrastructure/submit-idea";
import { mockSupabaseInsertSuccess, mockSupabaseInsertFailure } from "@/test/utils/supabase-mocks";

describe("submitIdea", () => {
    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("should throw an error if title or description is missing", async () => {
        await expect(submitIdea({ title: "", description: "", image: null })).rejects.toThrow("Title and description are required");
    });

    it("should submit successfully with valid data", async () => {
        mockSupabaseInsertSuccess();
        const randomTitle = "Test Idea " + Math.random().toString(36).substring(7);

        await expect(
            submitIdea({ title: randomTitle, description: "Some description", image: null })
        ).resolves.not.toThrow();
    });

    it("should throw an error if Supabase insert fails", async () => {
        mockSupabaseInsertFailure();
        const randomTitle = "Test Fail Idea " + Math.random().toString(36).substring(7);

        await expect(
            submitIdea({ title: randomTitle, description: "Some description", image: null })
        ).rejects.toThrow("Insert failed");
    });
});
