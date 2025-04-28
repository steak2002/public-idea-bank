export default function HomePage() {
  return (
    <main className="text-center p-20">
      <h1 className="text-3xl font-bold">Welcome to Public Idea Bank</h1>
      <p className="text-gray-600 mt-4">Submit your startup ideas and explore others.</p>
      <a href="/ideas" className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Browse Ideas
      </a>
    </main>
  );
}
