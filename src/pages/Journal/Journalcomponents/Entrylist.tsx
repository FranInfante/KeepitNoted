type Entry = {
    date: string;
    subject: string;
    content: string;
  };
  
  type EntryListProps = {
    entries: Entry[];
    openDetails: (entry: Entry) => void;
  };
  
  function EntryList({ entries, openDetails }: EntryListProps) {
    return (
      <ul>
        {entries.map((entry, index) => (
          <li
            key={index}
            className="bg-indigo-800 text-white p-4 rounded-lg shadow-md mb-4"
            onClick={() => openDetails(entry)}
          >
            <p className="text-sm text-gray-400">{entry.date}</p>
            <p className="mt-2">{entry.subject}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default EntryList;
  