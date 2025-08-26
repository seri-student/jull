import React from 'react';
import { Navigation } from './Navigation';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Navigation />
      </div>
    </header>
  );
};