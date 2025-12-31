import Available from '@/components/landing/available';
import Cookies from '@/components/landing/cookies';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Story from '@/components/landing/story';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Cookies />
            <Story />   
            <Contact /> 
            <Available />
            <Footer />
        </>
    )
}