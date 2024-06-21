import React, { FC } from 'react';
import styles from '../styles/LoginForm.module.scss';

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
