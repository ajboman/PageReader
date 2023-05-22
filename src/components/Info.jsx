import { logo } from '../assets';

const Info = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-10 pt-3'>
            <img src={logo} alt="page_reader_logo" className='w-28 object-contain'/>

            <button 
            type='button' 
            onClick={() => window.open('https://github.com/ajboman')} 
            className='black_btn'>
                GitHub
            </button>
        </nav>

        <h1 className='head_text'>
            Summarize the Contents of <br/> Webpages or Articles <br />
            <span className='blue_gradient'>
                OpenAI GPT-4
            </span>
        </h1>
        <h2 className='desc'>
            Simplify your reading with Page Reader, 
            an open-source web page summarizer that transforms 
            lengthy articles into clear and consice summaries
        </h2>
    </header>
  )
}

export default Info