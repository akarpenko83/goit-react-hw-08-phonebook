import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useLoginUserMutation } from 'redux/authSlice';
import { updateFilter } from 'redux/filterSlice';
import { updateUser } from 'redux/userSlice';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [loginUser] = useLoginUserMutation();

  const onSubmit = credentials => {
    loginUser(credentials)
      .then(response => console.log(response.data.token))
      .then(response =>
        dispatch(updateUser(response.data.token)),
      )
      .then(response => dispatch(updateFilter(response)))
      .then(credentials =>
        toast.success(
          `${credentials} successfully logged in`,
        ),
      )
      .catch(error =>
        toast.error(
          `${credentials.email} unable to log in`,
        ),
      );
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const credentials = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(credentials);
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
      <h1>Login page</h1>
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
        <button type="submit">login</button>
      </form>
    </>
  );
};
