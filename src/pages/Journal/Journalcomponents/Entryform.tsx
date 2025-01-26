import { toast } from "react-hot-toast";

type EntryFormProps = {
  subject: string;
  setSubject: (value: string) => void;
  content: string;
  setContent: (value: string) => void;
  addEntry: () => void;
};

function EntryForm({
  subject,
  setSubject,
  content,
  setContent,
  addEntry,
}: EntryFormProps) {
  const handleAddEntry = () => {
    if (!subject.trim()) {
      toast.error("Subject cannot be empty.");
      return;
    }

    if (!content.trim()) {
      toast.error("Content cannot be empty.");
      return;
    }

    addEntry();
    toast.success("Entry added successfully!");
  };

  return (
    <div>
     

      {/* Form */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg mb-8">
        <label
          htmlFor="subject"
          className="block text-gray-700 font-bold mb-2"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-3 py-2 border rounded mb-4 text-gray-900"
          placeholder="Enter a subject..."
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          className="w-full px-3 border rounded mb-4 text-gray-900 resize-none"
          rows={10}
          placeholder="Write your thoughts..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="w-full bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
          onClick={handleAddEntry}
        >
          Add Entry
        </button>
      </div>
    </div>
  );
}

export default EntryForm;
