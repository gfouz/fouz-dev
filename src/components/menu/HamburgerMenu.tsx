'use client';
import React from 'react';
import Image from 'next/image';
import DarkButton from 'components/darkbutton/DarkButton';
import fouz_golden from '../../../public/images/fouz-golden.png';
import { useTheme, useSetTheme } from 'store/store';
import FouzLogo from 'logo/FouzLogo';
import { fetchPdf } from 'lib/fetchPdf'

const HamburgerMenu = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const setTheme = useSetTheme();
  const downloadPdf = ()=> {
     fetchPdf();
  }
  return (
    <nav className='border-gray-200  dark:border-gray-700 ' data-theme={theme}>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <a
          href='https://github.com/gfouz'
          className='flex items-center space-x-3 rtl:space-x-reverse tooltip tooltip-bottom tooltip-warning'
          data-tip='Join me on Github!'
        >
          <FouzLogo size='25' color='#be7e40' />
          <span className='self-center whitespace-nowrap text-md font-semibold '>
            Giovani Fouz
          </span>
        </a>
        <button  onClick={() => setOpen(!open)} type="button" className="md:hidden text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-0.5 text-center me-2 mb-2">
           {open ? 'close' : 'open'}
        </button>

        <div
          className={
            open
              ? 'w-full md:block md:w-auto'
              : 'hidden w-full md:block md:w-auto'
          }
          id='navbar-solid-bg'
        >
          <ul className='mt-4 flex flex-col rounded-lg  text-left font-medium rtl:space-x-reverse dark:border-gray-700  md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-transparent md:dark:bg-transparent'>
            <li className='tooltip tooltip-bottom tooltip-warning' data-tip='click to download my curriculum'>
              <a
                onClick={downloadPdf}
                className='block rounded px-3 py-2   dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Curriculum
              </a>
            </li>
            <li className='tooltip tooltip-bottom tooltip-warning' data-tip='Know a little about me'>
              <a
                href='#'
                className='block rounded px-3 py-2 hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
                aria-current='page'
              >
                About
              </a>
            </li>
            <li className='tooltip tooltip-bottom tooltip-warning' data-tip='Join me on Github!'>
              <a
                href='https://github.com/gfouz'
                className='block rounded px-3 py-2 hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500'
              >
                Github
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default HamburgerMenu;
