//src/features/ideas/infrastructure/submit-idea.ts

import { supabase } from "@/shared/services/supabase-client";

interface SubmitIdeaParams {
    title: string;
    description: string;
    image?: File | null;
}

export async function submitIdea({ title, description, image }: SubmitIdeaParams) {
    if (!title.trim() || !description.trim()) {
        throw new Error("Title and description are required");
    }

    let imageUrl: string | null = null;

    if (image) {
        const fileName = `${Date.now()}_${image.name}`;
        const { data, error: uploadError } = await supabase.storage
            .from("idea-images")
            .upload(fileName, image);

        if (uploadError) {
            console.error("Upload error:", uploadError);
            throw new Error(uploadError.message);
        }
        imageUrl = data?.path ?? null;
    }

    const { error } = await supabase.from("ideas").insert([
        {
            title,
            description,
            image_url: imageUrl,
        },
    ]);

    if (error) {
        console.error("Insert error:", error);
        throw new Error(error.message);
    }
}

