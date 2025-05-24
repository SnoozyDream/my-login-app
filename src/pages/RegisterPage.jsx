import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [title,setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 仮の処理（あとで状態管理 or DBに送るようにする）
    console.log("記録:", { title, date, time });

    //登録後にダッシュボードへ戻る
    navigate('/dashboard');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>学習内容の登録</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>学習内容:</label><br />
          <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          />
        </div>
        <div>
          <label>日付:</label><br />
          <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          />
        </div>
        <div>
          <label>勉強時間(分) :</label><br />
          <input
          type="number"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          />
        </div>
        <br />
        <button onClick={handleSubmit}>記録する</button>
      </form>
    </div>
  );
}

export default RegisterPage;
