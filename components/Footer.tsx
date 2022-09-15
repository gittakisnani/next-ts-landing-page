import { BsLinkedin, BsFacebook, BsTwitter, BsGithub} from './Icons'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='bg-white py-10 md:p-14'>
        <Container>
            <div className='flex flex-col gap-4 items-center'>
                <div className='flex items-center gap-2 text-primary'>
                    <a href='https://facebook.com' className='text-xl'><BsFacebook /></a>
                    <a href='https://github.com/gittakisnani' className='text-xl'><BsGithub /></a>
                    <a href='https://www.linkedin.com/in/taki-snani-1ba6ba236/' className='text-xl'><BsLinkedin /></a>
                    <a href='https://twitter.com/yestakisnani' className='text-xl'><BsTwitter /></a>
                </div>
                <div className='w-full max-w-[650px] text-center'>Copyright ©2022 All rights reserved | This template is made with ❤ by <a href="https://portfolio-sepia-kappa.vercel.app/" className='text-primary font-semibold'>Taki Snani</a></div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer