import { Notify } from 'notiflix';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth/authOperations';

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // console.log(error);
  const onSubmit = async credentials => {
    try {
      await dispatch(
        authOperations.register({ name, email, password }),
      );
      console.log({ name, email, password });
      Notify.success(`${name} registered successfully`);
    } catch (error) {
      console.log(error);
      Notify.error(`${name} failed to register`);
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const credentials = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(credentials);
    onSubmit(credentials);
    formReset();
    form.reset();
  };
  const formReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  const handleChange = evt => {
    const event = evt.currentTarget.name;
    switch (event) {
      case 'name':
        setName(evt.currentTarget.value.trim());
        break;
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
          Name
          <input
            type="text"
            name="name"
            placeholder="Jon Doe"
            value={name}
            onChange={handleChange}
          />
        </label>
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
        <button type="submit">Add user</button>
      </form>
    </>
  );
};
