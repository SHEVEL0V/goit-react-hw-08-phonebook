import s from './home.module.css';
import { useSelector } from 'react-redux';
import { isLoggedIn, userName } from 'redux/user/user-selectors';
import { useState } from 'react';
import Modal from 'components/modal/modal';
import SignupForm from 'components/singnup-form/signapForm';
import Button from 'components/button/button';

export default function HomePge() {
  const [modal, setModal] = useState(false);
  const status = useSelector(isLoggedIn);
  const name = useSelector(userName);

  const onModal = () => setModal(!modal);

  return (
    <div className={s.container}>
      <h1 className={s.title}>Hello {status ? name : '!'}</h1>
      {status || (
        <>
          {modal && (
            <Modal onClose={onModal}>
              <SignupForm onClose={onModal} />
            </Modal>
          )}
          <Button onClick={() => setModal(true)}>
            <b>Signap</b>
          </Button>
        </>
      )}
    </div>
  );
}