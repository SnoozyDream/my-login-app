import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

//仮の勉強ログ
const studyLogs = [
  { date: '2025/05/21', title: '移動平均線について',time:30},
  { date: '2025/05/20', title: 'ローソク足の読み方',time:15}
]

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ダッシュボード</h2>
      <button onClick={() => navigate('/register')}>登録画面へ</button>

      <hr />

      <h3>勉強履歴一覧</h3>
      <ui>
        {studyLogs.map((log, index)=> (
          <li key={index}>
            ・{log.date} -{log.title} ({log.time}分)
          </li>
        ))}
      </ui>
    </div>
  );
}

export default Dashboard;
