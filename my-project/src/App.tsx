
import { useState } from 'react'
import './App.css'
import Container from './Container'

function App() {
  const [search, setSearch] = useState("")

  const [history, setHistory] = useState("")
  
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
        <h1> More than just shorter links</h1>
        <p>Build your brand’s recognition and get detailed insights 
  on how your links are performing.</p>
        <button>Get Started</button>
      </div>

    </section>
  

  

  {/* link */}
    <section>
      <div className='flex-center text-box'>
        <form onSubmit={(e)=> handleSubmit(e)}>
          <input value={search} onChange={(e)=> setSearch(e.target.value)} type="text" placeholder='Enter your text here' name='link' />
          <label htmlFor="link"></label>
          <button>input buttin </button>
        </form>
       
      </div>
      
    </section>

  {/* advnaced stas*/}
  <section>
    <div className='flex-center text-box'>
      <h3> Advanced Statistics</h3>
      <p> Track how your links are performing across the web with our 
  advanced statistics dashboard.</p>
  <button>Get started </button>
    </div>
    <article className='flex flex-col gap-y-2 items-center'>
      <Container />
      <Container />
      <Container />
    </article>
    
  </section>

  {/* final cta */}
  <section className='text-box flex-center'>
    <h3>
      Boost your links today!
    </h3>
    <button>  Get Started</button>

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
