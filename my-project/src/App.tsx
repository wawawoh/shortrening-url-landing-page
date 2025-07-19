
import { useState } from 'react'
import './App.css'
import Container from './Container'

function App() {
  const [search, setSearch] = useState("")

  const [history, setHistory] = useState([])
  
  const handleSubmit = (e) => {
  e.preventDefault();

  async function sendData() {
    try {
      let response = await fetch("https://spoo.me", {
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

      response = await response.json();
     console.log("here is the response", response.short_url)
     setHistory((prev)=> [...prev, response.short_url])
     setSearch("")


      
    } catch (err) {
      console.error("Error:", err.message);
    }
  }

  sendData();
};


  return (
   <>
   {/* header */}
   <header className='flex justify-between px-4 py-2'>
    <img src="\public\images\logo.svg" alt="" />
    <button>menu</button>
   </header>
  {/* hero */}
  <main>
    <section className='flex-center flex-col'>
      <div>
        <img src="\images\illustration-working.svg" alt="" />
      </div>
      <div className='flex-center text-box'>
        <h1 className='font-bold'> More than just shorter links</h1>
        <p className='text-gray-700'>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
        <button className='primary-button'>Get Started</button>
      </div>

    </section>
  

  

  {/* link */}
    <section>
      <div className='bg-[url(/images/bg-boost-mobile.svg)]  bg-no-repeat p-2 '>
        <form className='flex-center text-box items-stretch py-2 px-10' onSubmit={(e)=> handleSubmit(e)}>
          <input className='bg-white rounded-2xl py-3 px-2' value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='Enter your text here' name='link' />
          <label htmlFor="link"></label>
          <button className='primary-button py-3 rounded-2xl font-extrabold'>Shorten it! </button>
          {history.map((item,index)=> {
            return <li key={index}>{item}</li>
          })}
        </form>
       
      </div>
      
    </section>

  {/* advnaced stas*/}
  <section>
    <div className='flex-center text-box '>
      <h3 className='font-bold'> Advanced Statistics</h3>
      <p> Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
  <button>Get started </button>
    </div>
    <article className='flex flex-col gap-y-[6rem] items-center text-center px-4 relative after:content-[""] after:w-[0.5em] after:h-[100%] after:bg-teal-500 after:z-1 after:left-[50%] after:absolute after:-translate-x-1 '>
      <Container title={"Brand Recogniton"} text ={"Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content."} img={"/images/icon-brand-recognition.svg"} />
      <Container title={"Deatiled Records"} text ={" Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."} img={"/images/icon-detailed-records.svg"} />
      <Container title={"Fully Customisable"} text ={" Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."} img={"/images/icon-fully-customizable.svg"} />
    </article>
    
  </section>

  {/* final cta */}
  <section className='text-box flex-center bg-[url(/images/bg-boost-mobile.svg)]  bg-no-repeat p-5'>
    <h3 className='font-bold text-2xl text-white'>
      Boost your links today!
    </h3>
    <button className='primary-button'>  Get Started</button>

  </section>
  </main>

  {/* footer */}
  <footer className='flex-center gap-y-3.5'>
    <h3>Shortly</h3>
    <ul>
  <li><strong>Features</strong></li>
  <li>Link Shortening</li>
  <li>Branded Links</li>
  <li>Analytics</li>
</ul>

<ul>
  <li><strong>Resources</strong></li>
  <li>Blog</li>
  <li>Developers</li>
  <li>Support</li>
</ul>

<ul>
  <li><strong>Company</strong></li>
  <li>About</li>
  <li>Our Team</li>
  <li>Careers</li>
  <li>Contact</li>
</ul>


  </footer>
   </>
  )
}

export default App
