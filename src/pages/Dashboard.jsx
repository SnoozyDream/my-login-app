import React from 'react';
import { useNavigate } from 'react-router-dom';


function Dashboard({ 
  studyLogs = [], 
  setStudyLogs,
  selectedIds = [],
  setSelectedIds,
  toggleSelect,
  handleBulkDelete
 }) {

  const navigate = useNavigate();
 

  return (
     <div style={{ padding: '2rem' }}>
       <h2>ダッシュボード</h2><hr />

       <button onClick={() => navigate('/register')}>登録画面へ</button>

      <h3 style={{ marginTop: '2rem' }}> 勉強履歴一覧</h3>

      <ul>
        {studyLogs.map((log, index)=> (
          <li key={log.id}>
            <input
            type="checkbox"
            checked={selectedIds.includes(log.id)}
            onChange={() => toggleSelect(log.id)}
            />

            {log.date} -{log.title} ({log.time}分)
          </li>
        ))}
      </ul>

        {selectedIds.length > 0 && (
          <button
            onClick={handleBulkDelete}
            style={{ maringTop: '1rem', backgroudColor: 'red', color: 'red' }}
            >
              選択したログをまとめて削除
            </button>
        )}
    </div>
  );
}

export default Dashboard;
