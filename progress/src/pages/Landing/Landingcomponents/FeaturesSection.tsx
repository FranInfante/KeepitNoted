import TodoListSvg from "../../../assets/LandingAssets/todolist.svg";
import JournalSvg from "../../../assets/LandingAssets/journal.svg";
import CalendarSvg from "../../../assets/LandingAssets/calendar.svg";

function FeaturesSection() {
  return (
    <div className="h-screen flex flex-col">
      <div className="text-center mt-12 mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-300 mb-4">
          Features
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto text-white w-auto px-9">
          Discover the tools that help you organize your life and stay
          productive.
        </p>
      </div>

      <div className="flex-grow flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8 w-full">
          <div className="flex flex-col items-center text-center">
            <img
              src={JournalSvg}
              alt="Journal Feature"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Daily Journaling
            </h3>
            <p className="font-medium text-sm sm:text-base md:text-lg text-gray-200 w-64">
              Capture your thoughts and reflect daily with our intuitive
              journaling feature.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={TodoListSvg}
              alt="To-Do List Feature"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Organized To-Do Lists
            </h3>
            <p className="font-medium text-sm sm:text-base md:text-lg text-gray-200 w-64">
              Keep your tasks organized by creating, categorizing, and tracking
              them.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src={CalendarSvg}
              alt="Calendar Feature"
              className="w-16 h-16 mb-6"
            />
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Calendar View
            </h3>
            <p className="font-medium text-sm sm:text-base md:text-lg text-gray-200 w-64">
              See your tasks and journal entries in a calendar view for easy
              planning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;