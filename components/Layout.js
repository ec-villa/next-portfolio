import Link from 'next/link';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = url => {
    console.log('url: ', url);
    Nprogress.start();
}
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError= () => Nprogress.done();

const Layout = ({children, title}) => (
    <div className='root'>
    <header>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>About</a></Link>
        <Link href='/hireme'><a>Hire me</a></Link>
        <Link href='/projects'><a>Projects</a></Link>
    </header>

    <h1>{title}</h1>
    {children}
    <footer>&copy; {new Date().getFullYear()}</footer>
    <style jsx global>{`
        body {
            font-family: 'Noto Sans JP', sans-serif;
            margin: 0;
        }
    `}</style>
    <style jsx>{`
        .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        header {
            width: 100%;
            padding: 1em;
            display: flex;
            justify-content: space-around;
            background: black;
        }
        header a {
            display: flex;
            justify-content: space-around;
            color: white;
            text-decoration: none;
        }
    `}</style>
    </div>
);

export default Layout;