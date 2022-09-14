import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../components/Card'
import Container from '../components/Container'
import Feature from '../components/Feature'
import Header from '../components/Header'
import Logo from '../components/Logo'
import Section from '../components/Section'
import FEATURES from '../config/Features'
import Investing from '../public/assets/Investing.svg'
import Bookmark from '../public/assets/Bookmark.svg'
import PERSONS from '../config/Persons'
import FeatureWithImage from '../components/FeatureWithImage'

const Home: NextPage = () => {
  return (
    <div className='relative'>
      <Header />
      <Container>
        <div className='flex flex-col-reverse md:flex-row md:justify-between gap-4 items-center p-4 md:p-6 my-14 md:my-18'>
          <div className='flex flex-col gap-4 text-center max-w-[70%] md:text-left items-center md:items-start md:max-w-[full]'>
          <h1 className='text-black text-3xl md:text-5xl leading-10'>
            Make Your Business <br /> More Profitable
          </h1>
          <p className='text-slate-400 font-light max-w-[650px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
          <Link href="#">
            <a className='text-white bg-primary p-3 rounded-lg w-fit'>Get Started</a>
          </Link>
          </div>
          <div className='bg-wrapper overflow-hidden flex-grow z-0'>
            <Image src={Investing} alt='Investing' className='z-0' />
          </div>
        </div>
        <div className='my-14 md:my-18'>
          <Section title='Imagine Features' desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quos quaerat sapiente nam, id vero." />
          <div className='grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 my-14'>
            {FEATURES.map(({ feature, link, desc, icon }, index) => (
                <Feature feature={feature} link={link} desc={desc} icon={icon} key={index} />
            ))}
          </div>
        </div>
        {PERSONS.map((person, index) => (
          <FeatureWithImage index={index} key={index} person={{...person, desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}} />
        ))}
      </Container>
    </div>
  )
}

export default Home
