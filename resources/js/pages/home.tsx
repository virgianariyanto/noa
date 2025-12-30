import Available from '@/components/landing/available';
import Cookies from '@/components/landing/cookies';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Story from '@/components/landing/story';

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Cookies />
            <Story />    
            <Available />
        </>
    )
}