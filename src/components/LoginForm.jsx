// src/components/LoginForm.jsx
import React, { useState } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  // 🔽 バリデーション関数をファイル内にまとめて書く
  const validate = () => {
    const errors = {};

    if (!email) {
      errors.email = 'メールアドレスは必須です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = '形式が不正です';
    }

    if (!password) {
      errors.password = 'パスワードは必須です';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('ログイン成功（仮）');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>メールアドレス:</label><br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
      </div>
      <div>
        <label>パスワード:</label><br />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>
      <button type="submit">ログイン</button>
    </form>
  );
}

export default LoginForm;
