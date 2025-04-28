//src/features/ideas/views/IdeasListView.tsx

"use client";

import { useIdeas } from "../hooks/use-ideas";


export function IdeasListView() {
    const { ideas, loading } = useIdeas();

    if (loading) { return <p className="text-center mt-8">Loading ideas...</p>; }

    if (ideas.length === 0) return <p className="text-center mt-8 text-gray-500">No ideas yet. Submit the first one!</p>;

    return (
        <div className="max-w-4xl mx-auto p-6 grid gap-6 grid-cols-1 md:grid-cols-2">
            {ideas.map((idea) => (
                <div key={idea.id} className="p-4 border rounded bg-white shadow hover:shadow-lg transition">
                    <h2 className="font-bold text-lg">{idea.title}</h2>
                    <p className="text-sm text-gray-600 mb-2">{new Date(idea.created_at).toLocaleDateString()}</p>
                    <p className="mb-4">{idea.description}</p>
                    {idea.image_url && (
                        <img
                            src={idea.image_url}
                            alt={idea.title}
                            className="max-h-48 object-cover rounded"
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
