import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../../AnimatedLetters'
import Logo from './Logo'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = 'Ifeanyi'.split('')
    const jobArray = 'A Web Developer'.split('')

    useEffect(()=>{
        setTimeout(()=>{
            setLetterClass('text-animate-hover')
        }, 4000)
        return ()=>{}
    }, [])
    return(
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span> 
                    <span className={`${letterClass} _14`}>'m</span>
                    {' '}
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={nameArray}
                        idx={15}
                    />
                    <br />
                    {' '}<AnimatedLetters 
                        letterClass={letterClass}
                        strArray={jobArray}
                        idx={23}
                    />
                </h1>
                <h2>
                    Full Stack Software Engineer <br />
                    Technology Stack =&gt; Javascript / PHP / Mysql  
                </h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
           <Logo />
        </div> 
    )
}

export default Home