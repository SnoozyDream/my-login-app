import React from 'react';
import LoginForm from './components/LoginForm'; // ← 相対パス注意！

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>My ログインアプリ</h1>
      <LoginForm /> {/* ← 呼び出すだけ！ */}
    </div>
  );
}

export default App;
