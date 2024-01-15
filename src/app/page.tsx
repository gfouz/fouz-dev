import localFont from 'next/font/local';
import Image from 'next/image';
import MotionOnScroll from 'components/motiononscroll/MotionOnScroll';
import HamburgerMenu from 'components/menu/HamburgerMenu';
import GreenBlueButton from 'components/buttons/GreenBlueButton';
import Footer from 'components/footer/Footer';
import MarkdownToHtml from 'components/markdowntohtml/MarkdownToHtml';
import FouzLogo from 'logo/FouzLogo';
import Ratingbar from 'components/rating-bar/Ratingbar';
import blog from '../../public/images/blog.jpg';
import black_gradient from '../../public/images/purple.jpg';
import fouz_logo from '../../public/images/fouz-green.png';
import finances from '../../public/images/finances.jpg';
import hello from '../../public/images/hello.jpg';
import hexagonal from '../../public/images/hexagonal.jpg';
const helvetica_bold = localFont({
  src: '../../public/fonts/helvetica-bold.otf',
});
const segoe_light = localFont({ src: '../../public/fonts/segoe-light.otf' });

export default async function Home() {
  const zooming = {
    visible: { transition: { duration: 0.5 }, scale: 1 },
    hidden: { scale: 0 },
  };
  
  return (
    <div className='dark-purple-article'>
      <header className='portfolio'>
        <HamburgerMenu />
      </header>
      <main>
        <section className='relative'>
          <Image className='h-auto max-w-[100%]' src={hello} alt='blog-image' />
          <div className='flex flex-col items-center absolute w-[100%] aspect-[1.85] top-0 left-0'>
            <div className='h-[32%]'></div>
            <div className='w-[70%] h-[38%] '>
              
            </div>
            <a
              className='flex items-center justify-center w-[70px] h-[70px] rounded-[50%] bg-[--dark-purple] hover:bg-purple-800   transition-all duration-500'
              href='https:github.com/gfouz'
            >
              <FouzLogo color='#e5e5e5' size='30' />
            </a>
          </div>
        </section>
        <section className='flex flex-1 items-center justify-center p-4 py-[4rem] dark-theme-article'>
          <MarkdownToHtml
            className=' paragraph-w-600 markdown-heading text-left text-neutral-300'
            title='welcome-words'
          />
        </section>
        <article className='py-16 dark-theme-article'>
          <h2 className='text-neutral-300'>
            Projects and their links
          </h2>
        </article>
        <article className='md:flex'>
          <div className='flex-1 overflow-hidden '>
            <Image
              className='h-[100%] w-[100%] object-fill transition-all duration-500 hover:scale-[1.1] '
              src={blog}
              alt='blog-image'
            />
          </div>
          <section className='flex flex-1 flex-col items-center justify-center p-4 py-6 text-left'>
            <MarkdownToHtml
              className='markdown-paragraph'
              title='blog-introduction'
            />
            <a className='p-8' href='#'>
              <GreenBlueButton>visit site</GreenBlueButton>
            </a>
          </section>
        </article>

          <section className='w-[100%] flex flex-col justify-center items-center py-[8em] bg-[--dark-purple]'>
            <div className='text-left'>
              <h2 className='text-neutral-300'>I use these technologies</h2>
              <a href='https:github.com/gfouz'>
                <Ratingbar
                  color='#ec4899'
                  percent='90'
                  name='Html, Css & Scss'
                />
              </a>
              <a href='https:github.com/gfouz'>
                <Ratingbar
                  color='#fde047'
                  percent='85'
                  name='JavaScript & TypeScript'
                />
              </a>
              <a href='https:github.com/gfouz'>
                <Ratingbar color='#60a5fa' percent='90' name='React NextJs' />
              </a>
              <a href='https:github.com/gfouz'>
                <Ratingbar
                  color='#8b5cf6'
                  percent='15'
                  name='Learning Golang'
                />
              </a>
            </div>
          
        </section>
        <article className='md:flex'>
          <section className='flex flex-1 flex-col items-center justify-center p-4 py-6 text-left'>
            <MarkdownToHtml
              className='markdown-paragraph markdown-heading'
              title='finances-tracker'
            />
            <a className='p-8' href='#'>
              <GreenBlueButton>visit site</GreenBlueButton>
            </a>
          </section>
          <div className='flex-1 mx-2'>
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
