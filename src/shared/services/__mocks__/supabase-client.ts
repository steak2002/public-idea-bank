// src/shared/services/__mocks__/supabase-client.ts
import { vi, Mock } from "vitest";

export const supabase = {
    from: vi.fn() as Mock,
    storage: {
        from: vi.fn() as Mock,
    },
};
