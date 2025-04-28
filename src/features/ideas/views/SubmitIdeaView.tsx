import { IdeaForm } from "../components/IdeaForm";

export function SubmitIdeaView() {
    return (
        <div className="max-w-xl mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Submit a New Idea</h1>
            <IdeaForm />
        </div>
    );
}
