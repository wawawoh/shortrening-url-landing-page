
import { useState } from 'react'
import './App.css'
import React from 'react'
import Container from './Container'

function App() {
  const [search, setSearch] = useState("")
  const [menuDisplay, setMenuDisplay] = useState(false)
  const [copied, setCopied] = useState(100)
  
  const [history, setHistory] = React.useState<{[key:string]: string}>({});
  
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  type shortenResponse = {
    domain: string,
    orignial_url: string,
    short_url:string
  }

  async function sendData() {
    try {
      const response = await fetch("https://spoo.me", {
        method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
        'url': search
    })
      });

      if (!response.ok) {
        throw new Error("URL shortening failed");
      }
      
      const newData: shortenResponse = await response.json();

     console.log("here is the response", newData)
   
     setHistory((prev)=> ({...prev, [newData.short_url]: search}))
    //  brackets around curly brackets otherwise itd be a function, we are returing an object 
     setSearch("")


      
    } catch (err: unknown) {
      if (err instanceof Error) {

        console.error("Error:", err.message);
      } else {
        console.error("unexpected eroor", err)
      }
      
    }
  }

  sendData();

};
const handleCopy = (item: string, index: number) => {
  navigator.clipboard.writeText(item)
  setCopied(index)

}


  return (
   <>
   {/* header */}
   <header className='flex justify-between px-4 py-2 relative lg:gap-8 lg:px-20'>
    <img className='self-center' src="\public\images\logo.svg" alt="" />
    {screen.width < 1024 && 
    <button onClick={()=> setMenuDisplay((prev)=> !prev)}><img aria-label='menu' src='\images\burger-menu-svgrepo-com (3).svg'/></button>
    
    }
    
    <nav className= {menuDisplay || screen.width > 1024 ? "menu-active" : "menu-inactive"}>
      <p><a href="#">Features</a></p>
<p><a href="#">Pricing</a></p>
<p className='mb-auto lg:mr-auto lg:mb-0'><a href="#">Resources</a></p>
{screen.width < 1000 && 

<hr className='w-full h-[2px] bg-white my-2' />}



<p><a href="#">Login</a></p>
<p className='rounded-full bg-cyan px-5 text-white py-3'><a href="#">Sign Up</a></p>

    </nav>
   </header>
  {/* hero */}
  <main className='lg:px-[4rem]'>
    <section className='flex-center flex-col lg:flex-row lg:py-10 '>
      <div className='flex flex-col items-stretc overflow-hidden text lg:order-2'>
        <img className= " translate-x-[10%] lg:min-w-[120%] lg:translate-0 " src="\images\illustration-working.svg" alt="" />
      </div>
      <div className='flex-center text-box '>
        <h1 className='font-bold text-4xl lg:text-7xl '> More than just shorter links</h1>
        <p className='text-gray-700'>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
        <button className='primary-button'>Get Started</button>
      </div>

    </section>
  

  

  {/* link */}
    <section className='p-3 rounded-3xl '>
      <div className='bg-[url(/images/bg-boost-mobile.svg)]  bg-no-repeat p-2 bg-primary-dark-violet rounded-2xl lg:p-5'>
        <form className='flex-center text-box items-stretch py-2 px-6 lg:flex-row gap-5' onSubmit={handleSubmit}>
          <input className='bg-white rounded-2xl py-3 px-2 lg:flex-grow' value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='Enter your text here' name='link' />
          <label htmlFor="link"></label>
          <button className='primary-button py-3 rounded-2xl font-extrabold lg:w-56'>Shorten it! </button>
          
        </form>
       
      </div>
      <div className='flex flex-col gap-3 p-2'>
        {Object.keys(history).map((item,index)=> {
            return (
                <div className='flex flex-col items-start gap-2 px-3 py-4 bg-white rounded-2xl text-[0.8rem] lg:flex-row lg:items-center lg:gap-4 lg:text-[1rem]' key={index}> 
                <p className='lg:mr-auto'>{history[item]}</p>
                {screen.width < 1000 && 

<hr className='w-full h-[1px] bg-gray-300 my-2' />}
            <p className='lg:text-cyan'>{item}</p>
                  
            <button className= {copied !== index ? 'self-stretch primary-button rounded-3xl py-2 lg:px-10 lg:rounded-xl' : 'self-stretch primary-button bg-primary-dark-violet rounded-3xl py-2 lg:px-10 lg:rounded-xl'  } onClick={()=> handleCopy(item,index)}>{copied === index ? "copied" : "copy"}</button>
            
            

            </div> 
//  navigator.clipboard.writeText(item)
            )
          
          })}
      </div>
      
    </section>

  {/* advnaced stas*/}
  <section>
    <div className='flex-center text-box '>
      <h3 className='font-bold text-[1.4rem]'> Advanced Statistics</h3>
      <p > Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
  <button className='pb-8 '>Get started </button>
    </div>
    <article className='flex flex-col gap-y-[6rem] items-center text-center p-4  relative after:content-[""] after:w-[0.5em] after:h-[80%] after:bg-teal-500 after:z-1 after:left-[50%] after:absolute after:-translate-x-1 lg:flex-row lg:gap-9 lg:pb-80 lg:after:w-[80%] lg:after:h-3 lg:after:left-10 lg:after:top-50'>
      <Container title={"Brand Recogniton"} text ={"Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content."} img={"/images/icon-brand-recognition.svg"} order={1}/>
      <Container title={"Deatiled Records"} text ={" Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} img={"/images/icon-detailed-records.svg"} order={2}/>
      <Container title={"Fully Customisable"} text ={" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} img={"/images/icon-fully-customizable.svg"} order={3} />
    </article>
    
  </section>

  {/* final cta */}
  <section className='text-box relative 
     flex-center bg-[url(/images/bg-boost-mobile.svg)]  bg-no-repeat bg-cover bg-center  py-20 bg-primary-dark-violet lg:w-[100vw] lg:-mx-[4rem]'>
    <h3 className='font-bold text-2xl text-white'>
      Boost your links today!
    </h3>
    <button className='primary-button'>  Get Started</button>

  </section>
  </main>

  {/* footer */}
  <footer className='flex-center gap-y-3.5 bg-neutral-very-dark-violet lg:flex-row p-10 justify-around '>
    <h3 className='font-extrabold text-4xl text-white lg:self-start'>Shortly</h3>
    <ul className='footer-links'>
  <li><strong>Features</strong></li>
  <li>Link Shortening</li>
  <li>Branded Links</li>
  <li>Analytics</li>
</ul>

<ul className='footer-links'>
  <li><strong>Resources</strong></li>
  <li>Blog</li>
  <li>Developers</li>
  <li>Support</li>
</ul>

<ul className='footer-links translate-y-3'>
  <li ><strong>Company</strong></li>
  <li>About</li>
  <li>Our Team</li>
  <li>Careers</li>
  <li>Contact</li>
</ul>

<div className='flex px-7 justify-between w-[80vw] lg:w-20 lg:gap-3 self-start'>
  <img src="\images\icon-facebook.svg" alt="" />
  <img src="\images\icon-twitter.svg" alt="" />
  <img src="\images\icon-pinterest.svg" alt="" />
  <img src="\images\icon-instagram.svg" alt="" />
</div>


  </footer>
   </>
  )
}

export default App
