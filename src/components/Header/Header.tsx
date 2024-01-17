import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>

        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default Header;