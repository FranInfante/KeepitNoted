import { Link } from "react-router-dom"; // Optional: You can use an icon library or replace with inline SVG

type BackToPageProps = {
  to: string; 
};

function BackToPage({ to }: BackToPageProps) {
  return (
    <Link
      to={to}
      className="flex items-center text-indigo-900 hover:text-indigo-700 transition-colors mt-3"
      aria-label="Go back"
    >
      <i className="fas fa-arrow-left mr-2 text-2xl"></i>
    </Link>
  );
}

export default BackToPage;
