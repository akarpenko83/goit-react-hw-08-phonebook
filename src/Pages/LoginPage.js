import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';

export const LoginPage = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async credentials => {
    try {
      await dispatch(
        authOperations.login({ email, password }),
      );

      Notify.success(`${email} logged in successfully`);
    } catch (error) {
      console.log(error);
      Notify.failure(`failed to login`);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    onSubmit(credentials);
    formReset();
    form.reset();
  };
  const formReset = () => {
    setEmail('');
    setPassword('');
  };
  const handleChange = evt => {
    const event = evt.currentTarget.name;
    switch (event) {
      case 'email':
        setEmail(evt.currentTarget.value.trim());
        break;
      case 'password':
        setPassword(evt.currentTarget.value.trim());
        break;
      default:
        break;
    }
  };

  return (
    <>
      <h2> RegisterPage </h2>
      <form onSubmit={handleSubmit} autoComplete="on">
        <label>
          E-mail Address
          <input
            type="email"
            name="email"
            placeholder="e-mail address"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            placeholder="enter your password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">LOGIN</button>
      </form>
    </>
  );
};
