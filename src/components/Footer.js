import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-stone-800 border-t border-amber-900/30 py-4 px-4">
      <div className="container mx-auto text-center">
        <p className="text-amber-100/60 text-sm">
          DM Suite &copy; {new Date().getFullYear()} | Create better adventures
        </p>
      </div>
    </footer>
  );
};

export default Footer;
