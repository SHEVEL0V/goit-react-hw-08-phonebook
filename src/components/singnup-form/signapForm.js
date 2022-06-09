import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import ClipLoader from 'react-spinners/ClipLoader';
import Button from 'components/button/button';
import { singnupUser } from 'redux/user/user-operations';
import { isLoggedIn } from 'redux/user/user-selectors';
import s from './signupForm.module.css';

export default function SignupForm({ onClose }) {
  const [name, getName] = useState('');
  const [email, getEmail] = useState('');
  const [password, getPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(singnupUser({ name, email, password }));
    getName('');
    getEmail('');
    getPassword('');
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <button
        className={s.buttonClose}
        type="button"
        onClick={onClose}
      >
        <IoClose />
      </button>
      <label className={s.items}>
        name:
        <input
          className={s.input}
          name="name"
          placeholder=" name"
          onChange={e => getName(e.target.value)}
          value={name}
        ></input>
      </label>
      <label className={s.items}>
        email:
        <input
          className={s.input}
          name="email"
          placeholder=" email"
          onChange={e => getEmail(e.target.value)}
          value={email}
        ></input>
      </label>
      <label className={s.items}>
        password:
        <input
          className={s.input}
          name="password"
          placeholder=" password"
          onChange={e => getPassword(e.target.value)}
          value={password}
        ></input>
      </label>
      <Button type="submit">
        sinup{useSelector(isLoggedIn) ? <ClipLoader size={15} /> : ''}
      </Button>
    </form>
  );
}
