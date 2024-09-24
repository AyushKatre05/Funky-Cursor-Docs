import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <div className="flex-1 container mx-auto p-4">{children}</div>
    </div>
  );
};

export default Layout;
