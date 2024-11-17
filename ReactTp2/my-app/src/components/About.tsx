import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  const handleButtonClick = () => {
    if (id) {
      navigate(`/about/${id}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && id) {
      navigate(`/about/${id}`);
    }
  };

  return (
    <div>
      <h1>About Page</h1>
      <input
        type="text"
        placeholder="Entrer ID"
        value={id}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="btn btn-primary" onClick={handleButtonClick}>Enter</button>
    </div>
  );
};

export default About;