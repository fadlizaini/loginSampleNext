import React, { FC } from 'react';
import styles from '../styles/LoginForm.module.scss';

interface InputProps {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: FC<InputProps> = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
    />
  );
};

export default Input;
