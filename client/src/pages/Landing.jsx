import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import main from '../assets/images/main.svg';
import { Button, Logo } from '../components';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to="/" />}
      <main>
        <nav className="w-fluidWidth max-w-xl my-0 mx-auto h-navHeight flex items-center">
          <Logo />
        </nav>
        <div className="container min-h-[calc(100vh-96px)] grid items-center -mt-12 lg:grid-cols-2 lg:gap-12">
          <div className="info">
            <h1 className="font-bold">
              job <span className="text-primary-500">tracking</span> app
            </h1>
            <p className="text-grey-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
              laudantium porro quas adipisci eaque voluptatum alias dignissimos
              placeat at reprehenderit autem accusamus, laboriosam molestiae
              dolor id nisi voluptatibus?
            </p>
            <Link to="/register">
              <Button primary className="text-xl py-2 px-5">
                Login/Register
              </Button>
            </Link>
          </div>
          <img
            src={main}
            alt="john"
            className="hidden w-full object-cover lg:block"
          />
        </div>
      </main>
    </React.Fragment>
  );
};
export default Landing;
