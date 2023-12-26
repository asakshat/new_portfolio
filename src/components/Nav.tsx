import {motion} from 'framer-motion';
import { useState } from "react";
import {useMediaQuery} from "@components/util/useMediaQuery";

const navMotion = {
    visible:{
        opacity:1,
        transition:{
            when:'beforeChildren',
            staggerChildren:0.15,
        },
    },
    hidden:{
        opacity:0,
    },
}

const itemMotion = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }
const itemMotionDesktop = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 1, x: 0 },
  }
const navLinks = [
    { name: "Home", href: "/", id: 1 },
    { name: "Projects", href: "#project_cards", id: 2 },
    { name: "Contact", href: "#contact", id: 3 },
  ]
  const NavLinks = ({
    isMobile,
    className,
    onClickLink,
  }: {
    isMobile: boolean;
    className: string;
    onClickLink?: () => void;
  }) => (
    <div className={className}>
      {navLinks.map(({ name, href, id }) => (
        <motion.a
          key={id}
          variants={isMobile ? itemMotion : itemMotionDesktop}
          href={href}
          onClick={()=>{
            if (onClickLink) {
              onClickLink();
            };
          }}
        >
          {name}
        </motion.a>
      ))}
    </div>
  )
  


export default function Nav() {
   
        const [toggled, setToggled]=useState(false);
        const isMobile = useMediaQuery('(min-width: 1280px)');
        const toggleMenu = () => {
          setToggled((prevToggle)=> !prevToggle);
        };
        const closeMenu=()=>{
          setToggled(false);
        };

        return(
        <nav className='relative mx-8 mb-5 bg-base-100 flex justify-between items-center pt-12 pb-6 font-medium md:mx-16 lg-mx-32'>
        <svg className='absolute bottom-0 left-1/2 -translate-x-1/2'
        width={250}
        height={4}
        viewBox='0 0 250 4'
        fill='none'
        xmlns='http://www.w3.org/200/svg'
        >
            <motion.path
            animate={{pathLength:1,opacity:1}}
            initial={{pathLength:0,opacity:0}} 
            transition={{delay:0.75,duration:0.75}}

            d='M2 2l428 2' strokeWidth={3} stroke='#1a1b26' strokeLinecap='round'/>
            </svg>

            <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -25 }}
                transition={{ delay: 0.35 }}>
                <a href='/'>
                <img src="https://raw.githubusercontent.com/asakshat/new_portfolio/main/public/sshshs.png" alt ="My avatar" className="w-[50px] h-[50px] rounded-full"/>
                </a>
            </motion.div>

        
            <h1  
            className="text-lg  font-bold absolute left-1/2 transform -translate-x-1/2">
             Sakshat
            </h1>
            
            {toggled && (
        <motion.div
          variants={navMotion}
          animate="visible"
          initial="hidden"
          className="bg-base-300 fixed left-0 top-0  z-40 flex h-screen
          w-full flex-col items-center  justify-center text-2xl font-bold text-accent sm: pb-80"
        >
          <NavLinks
            className="flex flex-col gap-24 text-lg "
            isMobile={true}
            onClickLink={closeMenu}
          />
        </motion.div>
      )}
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 25 }}
        transition={{ delay: 0.35 }}
        className="   hidden xl:flex xl:items-center  xl:justify-center xl:gap-12 xl:text-lg   "
      >
        <NavLinks className="flex gap-12" isMobile={false} />
      </motion.div>


 {/* this hidden checkbox controls the state */}

      <label className="btn btn-circle swap z-50 swap-rotate xl:hidden">
  
      <input
        type="checkbox"
        checked={toggled}
        onChange={toggleMenu}
        className={``}
      />
  
  {/* hamburger icon */}
  <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
  
  {/* close icon */}
  <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
  
</label>
    
     
        </nav>
        )
}