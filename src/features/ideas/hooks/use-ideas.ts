"use client";

import { useEffect } from "react";
import { fetchIdeas } from "../infrastructure/fetch-ideas";
import { useIdeaStore } from "../stores/idea-store";

export function useIdeas() {
    const ideas = useIdeaStore((state) => state.ideas);
    const loading = useIdeaStore((state) => state.loading);
    const setIdeas = useIdeaStore((state) => state.setIdeas);
    const setLoading = useIdeaStore((state) => state.setLoading);

    useEffect(() => {
        async function load() {
            setLoading(true);
            const data = await fetchIdeas();
            setIdeas(data);
            setLoading(false);
        }
        load();
    }, [setIdeas, setLoading]);

    return { ideas, loading };
}
