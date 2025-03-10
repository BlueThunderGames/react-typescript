import Logo from '@/assets/Logo.png';
import { SelectedPage } from "@/shared/types.ts";
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Footer = ({setSelectedPage}: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <AnchorLink 
                    href="#home" 
                    onClick={(event) => {
                        event.preventDefault();
                        setSelectedPage(SelectedPage.Home);
                    }}
                >
                <img src={Logo} alt="Logo"/>
                </AnchorLink>
                <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>&copy; Evogym All Rights Reserved</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Massa orci senectus</p>
                <p className="my-5">Et gravida id et etiam</p>
                <p className="my-5">Ullamcorpoer vivamus</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact Us</h4>
                <p className="my-5">Tempus metus mattis risus volutpat egestas.</p>
                <p className="my-5">(333) 425-6825</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer;