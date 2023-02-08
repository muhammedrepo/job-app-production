import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert, Button } from '../components';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};
const Register = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState(initialState);

  const { user, isLoading, showAlert, displayAlert, setupUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      setupUser({
        currentUser,
        endPoint: 'login',
        alertText: 'Login Successful! Redirecting...',
      });
    } else {
      setupUser({
        currentUser,
        endPoint: 'register',
        alertText: 'User Created! Redirecting...',
      });
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <main className="min-h-screen grid items-center">
      <form
        className="w-[90vw] max-w-md py-8 px-10 my-12 mx-auto bg-white shadow-shadow2 rounded-sm border-t-[5px] border-solid border-t-primary-500 transition-type hover:shadow-shadow4"
        onSubmit={onSubmit}
      >
        <div className="flex justify-center mx-auto mb-5 ">
          <Logo />
        </div>
        <h3 className="text-center">
          {values.isMember ? 'Login' : 'Register'}
        </h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <Button
          type="submit"
          primary
          disabled={isLoading}
          className="w-full mt-4"
        >
          submit
        </Button>
        <Button
          className="mt-2"
          hipster
          disabled={isLoading}
          onClick={() => {
            setupUser({
              currentUser: { email: 'testuser@test.com', password: '123456' },
              endPoint: 'login',
              alertText: 'login Successful! Redirecting...',
            });
          }}
        >
          {isLoading ? 'loading...' : 'demo app'}
        </Button>
        <p className="m-0 mt-4 text-center">
          {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
          <button
            type="button"
            onClick={toggleMember}
            className="bg-transparent border-transparent text-primary-500 cursor-pointer tracking-wide"
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </main>
  );
};
export default Register;
