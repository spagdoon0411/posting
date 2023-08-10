import { FC } from 'react'
import './Navbar.css'

type NavbarProps = {
    pageTitle: string;
    links: [string, string][];
};

const Navbar: FC<NavbarProps> = (props: NavbarProps) => {
   return(<div className='navBar'>
        <div className='pageList'>
            {
                /* TODO: create functioning links to site pages, likely
                via a Navbar */
                props.links.map(link => <div>{link[0]}</div>)
            }
        </div>
        <div className='pageTitle'>
            {props.pageTitle}
        </div>
    </div>);
}

type PageList = {
    links: [string, string]
}

export { Navbar };