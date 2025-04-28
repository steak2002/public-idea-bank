import { supabase } from "@/shared/services/supabase-client";

interface SubmitIdeaParams {
    title: string;
    description: string;
    image?: File | null;
}

export async function submitIdea({ title, description, image }: SubmitIdeaParams) {
    let imageUrl: string | null = null;

    if (image) {
        const fileName = `${Date.now()}_${image.name}`;
        const { data, error: uploadError } = await supabase.storage
            .from("idea-images")
            .upload(fileName, image);

        if (uploadError) {
            console.error("Upload error:", uploadError);
            throw new Error("Image upload failed");
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
        throw new Error("Failed to submit idea");
    }
}
