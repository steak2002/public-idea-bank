// src/test/utils/supabase-mocks.ts
import { supabase } from "@/shared/services/supabase-client";
import { vi } from "vitest";

const supabaseMock = supabase as any;

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


export function mockSupabaseSelectIdeasSuccess(ideas: any[] = []) {
    const select = vi.fn().mockReturnThis();
    const order = vi.fn().mockResolvedValue({
        data: ideas,
        error: null,
    });

    const from = vi.fn(() => ({
        select: () => ({
            order,
        }),
    }));

    const supabaseMock = supabase as any;
    supabaseMock.from.mockImplementation(from);
}


export function mockSupabaseGetPublicUrl(path = "https://fakeurl.com/fake-image.png") {
    const supabaseMock = supabase as any;

    supabaseMock.storage.from.mockReturnValue({
        getPublicUrl: vi.fn((imagePath: string) => ({
            data: {
                publicUrl: `${path}`,
            },
            error: null,
        })),
    });
}
