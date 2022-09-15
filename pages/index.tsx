import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Container from '../components/Container'
import Feature from '../components/Feature'
import Header from '../components/Header'
import Section from '../components/Section'
import FEATURES from '../config/Features'
import Investing from '../public/assets/Investing.svg'
import Bookmark from '../public/assets/Bookmark.svg'
import PERSONS from '../config/Persons'
import FeatureWithImage from '../components/FeatureWithImage'
import { BsCheck2 } from '../components/Icons'
import Team from '../components/Team'
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Testimonial from '../components/Testimonial'
import Blog1 from '../public/assets/Blog1.webp'
import Blog2 from '../public/assets/Blog2.webp'
import Blog3 from '../public/assets/Blog3.webp'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import { Fade } from 'react-awesome-reveal'
const Home: NextPage = () => {
  return (
    <div className='relative'>
      <Header />
      <Container>
        <div className='flex flex-col-reverse md:flex-row md:justify-between gap-4 items-center p-4 md:p-6 my-14 md:my-18'>
          <div className='flex flex-col gap-4 text-center max-w-[80%] md:text-left items-center md:items-start md:max-w-[full]'>
          <Fade triggerOnce cascade direction='left'>
          <h1 className='text-black text-3xl md:text-5xl leading-10'>
            Make Your Business <br /> More Profitable
          </h1>
          <p className='text-slate-400 font-light max-w-[650px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <Link href="#">
            <a className='link mt-4'>Get Started</a>
          </Link>
          </Fade>
          </div>
          <div className='bg-wrapper overflow-hidden flex-grow z-0'>
            <Fade triggerOnce direction='right'>
              <Image src={Investing} alt='Investing' className='z-0' />
            </Fade>
          </div>
        </div>
        <div className='my-14 md:my-18'>
         <Fade triggerOnce cascade>
          <Section title='Imagine Features' desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero." />
         </Fade>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 my-14'>
            {FEATURES.map(({ feature, link, desc, icon }, index) => (
                <Fade key={index} direction='up'>
                  <Feature feature={feature} link={link} desc={desc} icon={icon}  />
                </Fade>
            ))}
          </div>
        </div>
        {PERSONS.map((person, index) => (
          <FeatureWithImage index={index} key={index} person={{...person, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}} />
        ))}
      </Container>

        <div className='py-14 md:py-18 bg-gray-100/60'>
          <Container>
            <Fade triggerOnce>
            <h2 className='text-3xl md:text-4xl capitalize font-semibold mb-2 text-center'>About us</h2>
            </Fade>
            <div className='flex flex-col md:flex-row md:items-center gap-10'>
              <div className='md:basis-1/2'>
                <Fade triggerOnce direction='left'>
                  <Image src={Bookmark} alt='Bookmark' />
                </Fade>
              </div>
              <div className='md:basis-1/2'>
                <Fade cascade direction='right'>
                  <h2 className='text-xl md:text-2xl'>Our mission</h2>
                  <p className='text-slate-500 font-light leading-8'>
                  Eos cumque optio dolores excepturi rerum temporibus magni recusandae eveniet, totam omnis consectetur maxime quibusdam expedita dolorem dolor nobis dicta labore quaerat esse magnam unde, aperiam delectus! At maiores, itaque.
                  </p>
                <div className='my-6 flex flex-col gap-2'>
                  {['Laborum enim quasi at modi', 'Ad at tempore', 'Labore quaerat esse'].map((item, index) => (
                    <Fade triggerOnce key={index} direction='right' cascade>
                    <div className='flex items-center gap-2' >
                      <span className='text-green-700 text-2xl'><BsCheck2 /></span>
                        <p className='text-slate-500 font-light'>{item}</p>
                    </div>
                    </Fade>
                  ))}
                </div>

                <a href="#" className='link'>Learn More</a>
                  </Fade>
              </div>
            </div>
            
          </Container>
        </div>
        <div className='bg-white my:14 md:my-18'>
          <Container>
              <Section title='Our Team' desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero.' />
              <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
                {PERSONS.map((person, index) => (
                  <Team key={index} person={{...person, desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}} />
                ))}
              </div>
          </Container>
        </div>
        <div className='py-14 md:py-18 md:pb-10 bg-gray-100'>
          <Container>
            <h2 className='text-3xl md:text-4xl capitalize font-bold text-center'>Testimonials</h2>
            <div className='my-6'>
              <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{
                  delay: 5000
                }}
                pagination={{
                  clickable: true,
                }}
              >
                {PERSONS.map((person, index) => (
                  <SwiperSlide key={index}>
                    <Testimonial person={{...person, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Container>
        </div>
        <div className='py-14 md:py-18'>
          <Container>
          <h2 className='text-3xl md:text-4xl capitalize font-semibold text-center'>Blog posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            {[Blog1, Blog2, Blog3].map((blog, index) => (
              <Blog key={index} img={blog} />
            ))}
          </div>
          </Container>
        </div>
        <div className='bg-blue-400/40 py-14 md:py-18'>
          <Container>
           <Fade triggerOnce>
           <h2 className='text-3xl md:text-4xl capitalize font-semibold text-center text-white'>Contact us</h2>
           </Fade>
           <div className='my-6'>
            <Fade direction='right' triggerOnce>
              <form className='p-4 md:p-6 flex flex-col gap-4 bg-white max-w-[600px] mx-auto' onSubmit={e => e.preventDefault()}>
                <h4 className='text-xl font-semibold text-black mb-6'>Contact Form</h4>
                <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                  <label className='label' htmlFor='fName'>
                    First Name
                    <input 
                      type="text" 
                      className='input'
                      id='fName'
                    />
                  </label>
                  <label className='label' htmlFor='lName'>
                    Last Name
                    <input 
                      type="text" 
                      className='input'
                      id='lName'
                    />
                  </label>
                </div>
                <label className='label' htmlFor='email'>
                    Email
                    <input 
                      type="email" 
                      className='input'
                      id='email'
                    />
                  </label>
                <label className='label' htmlFor='subject'>
                    Subject
                    <input 
                      type="text" 
                      className='input'
                      id='subject'
                    />
                  </label>
                <label className='label' htmlFor='message'>
                    Message
                    <textarea 
                      className='input min-h-[140px] resize-y'
                      id='message'
                    />
                  </label>
                  <button className='link'>Send Message</button>
              </form>
              </Fade>
           </div>
          </Container>
        </div>
          <Footer />
    </div>
  )
}

export default Home
