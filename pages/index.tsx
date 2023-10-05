import Head  from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
      <main>

  <Head>
    <title>Lee_blog</title>
    <meta name="description" content="Generated by create next app" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main>
    <section className={utilStyles.h3x}>
      <ul className={utilStyles.lee}>
                <h3><Link href="posts/market">  Marketing  </Link></h3> 
                <h3><Link href="posts/innovation">Innovation</Link></h3>
                <h3><Link href="posts/management">Management</Link></h3>
                <h3><Link href="posts/faqs">FAQs</Link></h3> 
                <h3><Link href="posts/resources">Resources</Link></h3>
                <h3><Link href="/UserList">UserList</Link></h3>          
          </ul>
    </section>
    <div className={utilStyles.h1x}> 
      <h1>THE LEE BUSINESS BLOG</h1>
    </div>
    
    <div className={utilStyles.button}>
      <div className='dropdown'>
          <button className='dropdown-toggle' onClick={toggleDropdown}>Social Media</button>
            {
              isOpen && (
                <div className={utilStyles.ico}>
                 <a href="facebook.com">
                  <Image
                  src='/images/icons/fb.png'
                  alt='facebook'
                  height={30}
                  width={40}
                  />
                  </a>
                  <a href="instagram.com">
                    <Image
                  src='/images/icons/ig.png'
                  alt='ig'
                  height={30}
                  width={40}
                  />
                  </a>
                  <a href="twitter.com"> 
                  <Image
                  src='/images/icons/tweet.jpeg'
                  alt='twitter'
                  height={30}
                  width={40}
                  />
                  </a>
                </div>
              )
           }
      </div>
      <Link href=''><button>Recruitment</button></Link>
      <Link href=''><button>Web</button></Link>
      <Link href=''><button>About Us</button></Link>
      <Link href=''><button>Contact</button></Link>
    </div>

    <div className='dropdown'>
      <button className='dropdown-toggle' onClick={toggleDropdown}>
        Already have an account?
        </button>
        {isOpen && (
          <div>
            <a href='posts/login'>Login</a> <br />
            <a href='#'>Register</a> <br />
          </div>
        ) }
    </div>
    
<div className={utilStyles.venture}>
  <p>
        Venture the Adventures of our Business&nbsp;
  </p>
</div>

<div className={utilStyles.image}>
  <Link href='/posts/market'>
    <Image
    src='/images/P5.jpeg'
  alt='marketing'
    height={210}
    width={227}
  /></Link>

  <Link href='/posts/innovation'>
    <Image
    src='/images/images (12).jpeg'
    alt='innovation'
    height={210}
    width={227}

  /></Link>
  <Link href='/posts/management'>
    <Image
  src='/images/leads.jpeg'
  alt='management'
  height={210}
  width={227}
  /></Link>
 <Link href='/posts/faqs'> 
 <Image
  src='/images/faqs.jpeg'
  alt='faqs'
  height={210}
  width={227}
  /></Link>
  <Link href='/posts/resources'>
    <Image
  src='/images/P10.jpeg'
  alt='resources'
  height={210}
  width={227}/></Link>
</div>

<div className={utilStyles.box}>
<p className={utilStyles.par}>Unlock the secrets to success, and stay ahead of the competetion with our expert insights. <br/> We are your ultimate destination for all things business-whether you're an aspiring entrepenuer, a seasoned proffesional or just someone with passion for the world of commerce.</p>
<p className={utilStyles.par}>Join a thriving community of like-minded individuals and take your business to new heights!</p>
</div>


<div className={utilStyles.lin}></div>
<div className={utilStyles.lin1}></div>
<div className={utilStyles.lin2}></div>
<div className={utilStyles.next}>
  <Image
  src='/next.svg'
  alt='next'
  height={100}
  width={100}/>
</div>

  </main>
   </main>   
  );
}
