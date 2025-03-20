import React from 'react';

const Layout = ({ children }) => {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="flex justify-center">
        {children}
      </div>
    </main>
  );
};

export default Layout;
