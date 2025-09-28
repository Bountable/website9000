import React from 'react';
import SearchBar from './SearchBar';

interface HeaderProps {
  brandLabel?: string;
  brandHref?: string;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  brandLabel = 'DARCY.',
  brandHref = '/',
  searchValue,
  onSearchChange,
}) => {
  return (
    <header className="navbar navbar-white sticky-top bg-white flex-md-nowrap p-0 border-bottom border-1 border-dark">
      <a className="navbar-brand col-3 col-md-2 me-0 ps-3 fw-bold" href={brandHref} id="top-left-menu">
        {brandLabel}
      </a>
      <div id="top-right-menu" className="container-fluid px-3">
        <div className="d-flex justify-content-between align-items-center w-100">
          <SearchBar value={searchValue} onChange={onSearchChange} />
        </div>
      </div>
    </header>
  );
};

export default Header;
