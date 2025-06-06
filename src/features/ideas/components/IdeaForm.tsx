"use client";

import { useState } from "react";
import { submitIdea } from "../infrastructure/submit-idea";
import { useRouter } from "next/navigation";
import { useIdeaStore } from "../stores/idea-store";

export function IdeaForm() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState<File | null>(null);

    const setLoading = useIdeaStore((state) => state.setLoading);
    const setError = useIdeaStore((state) => state.setError);
    const loading = useIdeaStore((state) => state.loading);
    const error = useIdeaStore((state) => state.error);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            await submitIdea({ title, description, image });
            router.push("/ideas");
        } catch (err) {
            console.error(err);
            setError("Failed to submit idea");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Idea title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="p-2 border rounded"
                required
            />
            <textarea
                placeholder="Describe your idea..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="p-2 border rounded min-h-[100px]"
                required
            />
            <input
                type="file"
                onChange={(e) => setImage(e.target.files?.[0] ?? null)}
                accept="image/*"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                disabled={loading}
            >
                {loading ? "Submitting..." : "Submit Idea"}
            </button>
        </form>
    );
}
