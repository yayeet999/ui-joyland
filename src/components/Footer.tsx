import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-8 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} UIverse - Beautiful UI Components</p>
      </div>
    </footer>
  );
};

export default Footer; 