import React from 'react';
import { useNavigate } from 'react-router-dom';

function ExampleComponent() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/other-page');
  };

  return (
    <button onClick={handleButtonClick}>
      Go to other page
    </button>
  );
}

export default ExampleComponent;