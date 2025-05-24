// src/utils/storage.js

const STORAGE_KEY = "studyLogs";

// 保存：ログ配列をlocalStorageに保存
export function saveStudyLogs(logs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
}

// 読み込み：localStorageからログを取得（なければ空配列）
export function loadStudyLogs() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}