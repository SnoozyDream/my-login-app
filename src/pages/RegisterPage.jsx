import React from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // 仮の登録処理
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>登録画面</h2>
      <button onClick={handleSubmit}>記録する</button>
    </div>
  );
}

export default RegisterPage;
