import React from 'react';
import { Link } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <div>
      <h1>Error</h1>
      <p>Vous avez mis mauvais ID ou le page que vous cherchez n'existe pas :)</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default Error;