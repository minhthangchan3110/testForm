import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
test('renders login form correctly', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    
    expect(getByLabelText('Username')).toBeInTheDocument();
    expect(getByLabelText('Password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });
  
  test('displays error messages for empty fields', () => {
    const { getByText } = render(<LoginForm />);
    
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
    

    expect(getByText('Please enter username')).toBeInTheDocument();
    expect(getByText('Please enter password')).toBeInTheDocument();
  });
  
  test('displays error message for wrong username or password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');
    
    
    fireEvent.change(usernameInput, { target: { value: 'wrongusername' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    
    fireEvent.click(loginButton);
    
    
    expect(getByText('Invalid username or password')).toBeInTheDocument();
  });
  
  test('displays success message for correct username and password', () => {
    const { getByLabelText, getByText } = render(<LoginForm />);
    
    const usernameInput = getByLabelText('Username');
    const passwordInput = getByLabelText('Password');
    const loginButton = getByText('Login');
    
   
    fireEvent.change(usernameInput, { target: { value: 'correctusername' } });
    fireEvent.change(passwordInput, { target: { value: 'correctpassword' } });
    
    fireEvent.click(loginButton);
    
    
    expect(getByText('Login successful')).toBeInTheDocument();
  });