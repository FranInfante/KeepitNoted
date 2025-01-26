import { Link } from "react-router-dom";
import JournalSvg from "../../../assets/LandingAssets/journal.svg";
import TodoListSvg from "../../../assets/LandingAssets/todolist.svg";



function CallToActions() {
    return (
      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
      <Link
        to="/journal"
        className="px-6 py-3 bg-yellow-400 text-indigo-900 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all"
      >
        <img
          src={JournalSvg}
          alt="Productivity Illustration"
          className="w-6 h-6 mr-2 inline"
        />
        Go to Journal
      </Link>
      <Link
        to="/todo"
        className="px-6 py-3 bg-green-400 text-indigo-900 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all"
      >
        <img
          src={TodoListSvg}
          alt="Productivity Illustration"
          className="w-6 h-6 mr-2 inline"
        />
        Go to To-Do List
      </Link>
    </div>
    );
  }
export default CallToActions;  