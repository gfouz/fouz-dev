'use client';
import ContactForm from './ContactForm';
import { useTheme } from 'store/store';

function Footer() {
  return (
    <footer className='footer bg-base-200 p-10 text-base-content'>
      <nav>
        <header className='footer-title'>Join me on</header>
        <a className='link-hover link' href='https://github.com/gfouz'>
          Github
        </a>
        <a href='https://dev.to/gfouz' className='link-hover link'>DEV TO</a>
        <a className='link-hover link'>Blog</a>
        <a className='link-hover link'>About</a>
      </nav>

      <ContactForm />
    </footer>
  );
}

export default Footer;
