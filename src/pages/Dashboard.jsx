import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>ダッシュボード</h2>
      <button onClick={() => navigate('/register')}>登録画面へ</button>
    </div>
  );
}

export default Dashboard;
