import { NextPage } from 'next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Link from 'next/link'
import Head from 'next/head'

const NotFound: NextPage = () => {
  return (
    <>
    <Head>
        <title>Not found</title>
        <meta name="description" content="Not Found page" />
        <meta name="keywords" content="Not Found, 404, oops" />
    </Head>
    <Header />
    <main className='h-screen flex justify-center items-center flex-col'>
        <h2 className='text-6xl md:text-8xl font-semibold md:font-bold text-slate-700'>
            404
        </h2>
        <p className='text-slate-700 py-2 font-semibold text-lg'>...Oops! Something is missing</p>
        <Link href='/'>
            <a className='p-2 bg-primary/80 duration-200 ease-in hover:bg-primary text-white text-xl font-semibold w-[200px] text-center rounded-md'>Home</a>
        </Link>
    </main>
    <Footer />
    </>
  )
}

export default NotFound