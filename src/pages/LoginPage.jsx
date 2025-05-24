
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // 本当はバリデーションや認証処理が必要
    navigate('/dashboard');
  };

  return (
    <div>
      <h2>ログイン画面</h2>
      <button onClick={handleLogin}>ログイン</button>
    </div>
  );
}

export default LoginPage;
