import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadStudyLogs, saveStudyLogs } from './utils/storage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';

function App() {
  const [studyLogs, setStudyLogs] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    const saved = loadStudyLogs();
    setStudyLogs(saved);
  }, []);

  useEffect(() => {
    saveStudyLogs(studyLogs);
  }, [studyLogs]);

  // チェック状態の切り替え
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : [...prev, id]
    );
  };

  // 一括削除処理
  const handleBulkDelete = () => {
    const updatedLogs = studyLogs.filter(log => !selectedIds.includes(log.id));
    setStudyLogs(updatedLogs);
    setSelectedIds([]); // チェックもリセット
    console.log("📝 studyLogs:", studyLogs);
    console.log("✅ selectedIds:", selectedIds);
  };

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <Dashboard 
              studyLogs={studyLogs}
              setStudyLogs={setStudyLogs}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              toggleSelect={toggleSelect}
              handleBulkDelete={handleBulkDelete}
            />}  
        />
        <Route 
          path="/register" 
          element={
            <RegisterPage 
              studyLogs={studyLogs} 
              setStudyLogs={setStudyLogs} 
            />
          } 
        />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
