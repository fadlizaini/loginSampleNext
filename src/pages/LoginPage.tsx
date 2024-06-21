"use client";
import React, { useState, useCallback, useMemo } from 'react';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';
import styles from '../styles/LoginForm.module.scss';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const validateEmail = useMemo(() => {
    return (email: string): boolean => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  }, []);

  const handleLogin = useCallback(async () => {
    if (!validateEmail(email)) {
      setError('Invalid email address');
      return;
    }

    try {
      const response = await axios.post('https://www.sample.app/login', { email, password });
      setError(null);
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  }, [email, password, validateEmail]);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Login</h2>
        {error && <div className={styles.error}>{error}</div>}
        <div>
          <label className={styles.inputLabel}>Email</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className={styles.inputLabel}>Password</label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <Button onClick={handleLogin} text="Login" />
      </div>
    </div>
  );
};

export default LoginPage;
