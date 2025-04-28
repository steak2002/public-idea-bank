import { create } from "zustand";
import { Idea } from "../domain/idea";

interface IdeaStore {
    ideas: Idea[];
    loading: boolean;
    error: string;
    setIdeas: (ideas: Idea[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string) => void;
}

export const useIdeaStore = create<IdeaStore>((set) => ({
    ideas: [],
    loading: false,
    error: "",
    setIdeas: (ideas) => set({ ideas }),
    setLoading: (loading) => set({ loading }),
    setError: (error) => set({ error }),
}));

