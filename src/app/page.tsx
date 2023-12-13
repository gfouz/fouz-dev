import localFont from 'next/font/local';
import Image from 'next/image';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';
import HamburgerMenu from 'components/menu/HamburgerMenu';
import  PurpleBlueButton  from 'components/buttons/PurpleBlueButton'
import Footer from 'components/footer/Footer';
import MarkdownToHtml from 'components/markdowntohtml/MarkdownToHtml';

import blog from '../../public/images/blog.jpg';
import black_gradient from '../../public/images/purple.jpg';
import fouz_logo from '../../public/images/fouz-green.png';
import finances from '../../public/images/finances.jpg';
import hello from '../../public/images/forest.jpg';
const timesRoman = localFont({ src: '../../public/fonts/times-roman.ttf' });

export default async function Home() {
  const zooming = {
    visible: { transition: { duration: 0.5 }, scale: 1 },
    hidden: { scale: 0 },
  };
  return (
    <div className=' text-base-color bg-[#000000]'>
      <header>
        <HamburgerMenu />
      </header>
      <main>
        <section className=''>
          <Image alt='image' src={hello} className='h-auto max-w-[100%]' />
        </section>
        <section className='flex flex-1 items-center justify-center p-4 py-[4rem]'>
          <MarkdownToHtml
            className='paragraph-w-600 markdown-heading text-left'
            title='welcome-words'
          />
        </section>
        <article className='py-12'>
          <h2 className='text-purple-500'>Projects and their Links</h2>
        </article>
        <article className='md:flex'>
          <div className='flex-1 overflow-hidden'>
            <Image
              className='h-[100%] w-[100%] object-fill transition-all duration-500 hover:scale-[1.1] '
              src={blog}
              alt='blog-image'
            />
          </div>
          <section className='flex flex-1 flex-col items-center justify-center p-4 text-left'>
            <MarkdownToHtml
              className='markdown-paragraph markdown-heading '
              title='blog-introduction'
            />
            <PurpleBlueButton>
              see alive
            </PurpleBlueButton>
          </section>
        </article>
        <div className='flex items-center justify-center py-[6em] aspect-[2.5] bg-[#040B15]'>
          <MotionOnScroll variants={zooming}>
            <a
              className='flex h-[auto] w-[300px] flex-col items-center justify-center '
              href='https://github.com/gfouz'
            >
              <h2 className='text-[#6CFF00] font-extralight'>
                Follow me on Github.
              </h2>
              <Image
                className='h-[50px] w-[50px] '
                src={fouz_logo}
                alt='technical-stack'
              />
            </a>
          </MotionOnScroll>
        </div>
        <article className='md:flex'>
          <section className='flex flex-1 flex-col items-center justify-center p-4 text-left'>
            <MarkdownToHtml
              className='markdown-paragraph markdown-heading'
              title='finances-tracker'
            />
            <button
              type='button'
              className='mb-4 mt-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800'
            >
              see alive
            </button>
          </section>
          <div className='flex-1'>
            <Image
              className='h-[100%] w-[100%] object-fill'
              src={finances}
              alt='finances'
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

