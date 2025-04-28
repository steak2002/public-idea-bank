//src/features/ideas/infrastructure/fetch-ideas.ts

import { supabase } from "@/shared/services/supabase-client";

export async function fetchIdeas() {
    const { data, error } = await supabase
        .from("ideas")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        console.error(error);
        return [];
    }

    return (data ?? []).map((idea) => ({
        ...idea,
        image_url: idea.image_url
            ? supabase.storage.from('idea-images').getPublicUrl(idea.image_url).data.publicUrl
            : null,
    }));
}