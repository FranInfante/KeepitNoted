import { useState, useEffect } from "react";
import EntryForm from "./Journalcomponents/Entryform";
import EntryList from "./Journalcomponents/Entrylist";
import Modal from "./Journalcomponents/JournalModal";
import BackToPage from "../../components/BackToPage";

function Journal() {
  const [entries, setEntries] = useState<
    { date: string; subject: string; content: string }[]
  >([]);
  const [content, setContent] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedEntry, setSelectedEntry] = useState<{
    date: string;
    subject: string;
    content: string;
  } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const savedEntries = localStorage.getItem("journalEntries");
    if (savedEntries) {
      setEntries(JSON.parse(savedEntries));
    }
  }, []);

  useEffect(() => {
    if (entries.length > 0) {
      localStorage.setItem("journalEntries", JSON.stringify(entries));
    }
  }, [entries]);

  const addEntry = () => {
    if (!content.trim() || !subject.trim()) return;
    const newEntry = {
      date: new Date().toISOString().split("T")[0],
      subject,
      content,
    };
    setEntries([...entries, newEntry]);
    setContent("");
    setSubject("");
  };

  const openDetails = (entry: {
    date: string;
    subject: string;
    content: string;
  }) => {
    setSelectedEntry(entry);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedEntry(null);
    setModalVisible(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-indigo-700 p-6 text-white">
       <BackToPage to="/" />
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-300 mb-6 text-center">
          My Journal
        </h1>
        <p className="text-lg text-center mb-8">What's going through your head?</p>

        <EntryForm
          subject={subject}
          setSubject={setSubject}
          content={content}
          setContent={setContent}
          addEntry={addEntry}
        />

        <EntryList entries={entries} openDetails={openDetails} />

        {modalVisible && selectedEntry && (
          <Modal entry={selectedEntry} closeModal={closeModal} />
        )}
      </div>
    </div>
  );
}

export default Journal;
