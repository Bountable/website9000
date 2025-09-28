import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  inputId?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = 'search', inputId = 'main_search' }) => {
  return (
    <div id="searchform_container" className="col-12 col-md-9">
      <span data-feather="search" style={{ position: 'absolute', marginTop: '0.5rem' }} />
      <input
        className="form-control form-control-dark w-100 search-form py-1"
        type="text"
        id={inputId}
        placeholder={placeholder}
        aria-label="Search"
        style={{ paddingLeft: '30px' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
