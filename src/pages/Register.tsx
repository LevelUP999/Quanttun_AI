
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegisterForm from '@/components/auth/RegisterForm';
import Logo from '@/components/Logo';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-50 py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to="/">
              <Logo className="mx-auto" size="lg" />
            </Link>
          </div>
          <RegisterForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
