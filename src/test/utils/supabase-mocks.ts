// src/test/utils/supabase-mocks.ts
import { supabase } from "@/shared/services/supabase-client";
import { vi, Mock } from "vitest";

const supabaseMock = supabase as unknown as {
    from: Mock;
    storage: {
        from: Mock;
    };
};

export function mockSupabaseInsertSuccess() {
    supabaseMock.from.mockReturnValue({
        insert: vi.fn().mockResolvedValue({
            data: null,
            error: null,
            count: null,
            status: 201,
            statusText: "Created",
        }),
    });
}

export function mockSupabaseInsertFailure(message = "Insert failed") {
    supabaseMock.from.mockReturnValue({
        insert: vi.fn().mockResolvedValue({
            data: null,
            error: {
                message,
                details: "",
                hint: "",
                code: "400",
                name: "PostgrestError",
            },
            count: null,
            status: 400,
            statusText: "Bad Request",
        }),
    });
}

export function mockSupabaseUploadSuccess(path = "some/path/to/image.png") {
    supabaseMock.storage.from.mockReturnValue({
        upload: vi.fn().mockResolvedValue({
            data: { path },
            error: null,
        }),
    });
}

export function mockSupabaseUploadFailure(message = "Upload failed") {
    supabaseMock.storage.from.mockReturnValue({
        upload: vi.fn().mockResolvedValue({
            data: null,
            error: {
                message,
                details: "",
                hint: "",
                code: "400",
                name: "StorageError",
            },
        }),
    });
}

export function mockSupabaseSelectIdeasSuccess(ideas: unknown[] = []) {
    supabaseMock.from.mockReturnValue({
        select: vi.fn().mockReturnThis(),
        order: vi.fn().mockResolvedValue({
            data: ideas,
            error: null,
        }),
    });
}

export function mockSupabaseGetPublicUrl(path = "https://fakeurl.com/fake-image.png") {
    supabaseMock.storage.from.mockReturnValue({
        getPublicUrl: vi.fn(() => ({
            data: { publicUrl: path },
            error: null,
        })),
    });
}
