import { useState } from "react";
import GAT_TOPICS from "../../planner/gatTopics";

export default function GATTopicSelector({ value, onChange }) {
  const [search, setSearch] = useState("");

  const filteredTopics = GAT_TOPICS.filter((topic) =>
    topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mx-auto my-8 max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
      <h2 className="text-2xl font-bold text-slate-900">
        What GAT topic do you want to improve?
      </h2>

      <p className="mt-2 text-slate-600">
        Choose a topic you want PivoTal to focus on.
      </p>

      {/* Search */}
      <div className="mt-6">
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search GAT topics..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Topic list */}
      <div className="mt-6">
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
          GAT Topics
        </h3>

        <div className="grid gap-3">
          {filteredTopics.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => onChange(topic)}
              className={`w-full rounded-xl border-2 p-4 text-left font-medium transition ${
                value === topic
                  ? "border-blue-600 bg-blue-50 text-blue-700"
                  : "border-slate-200 bg-white text-slate-800 hover:border-blue-300 hover:bg-slate-50"
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}