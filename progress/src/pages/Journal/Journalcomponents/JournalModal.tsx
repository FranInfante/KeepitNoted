type ModalProps = {
  entry: { date: string; subject: string; content: string };
  closeModal: () => void;
};

function Modal({ entry, closeModal }: ModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-gray-800 opacity-75"
        onClick={closeModal}
      ></div>
      <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg max-w-md w-full z-10">
        <h2 className="text-xl font-bold mb-4">{entry.subject}</h2>
        <p className="text-sm text-gray-500 mb-4">{entry.date}</p>
        <p className="mb-6">{entry.content}</p>
        <div className="flex justify-end">
          <button
            className="bg-yellow-400 text-indigo-900 font-semibold px-4 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
