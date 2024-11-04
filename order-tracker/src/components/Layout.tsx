import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { headerIcon } from '../utils/icons';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={headerIcon} className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold text-gray-800">Order Tracker</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto py-6">
        {children}
      </main>

      <footer className="bg-white border-t mt-auto">
        <div className="max-w-4xl mx-auto px-4 py-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Order Tracker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;