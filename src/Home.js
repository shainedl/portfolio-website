import React from 'react'
import Typical from 'react-typical'

function Home(props){

    return (
        <div className='home'>
            <Typical
            steps={/*['SHAINE LEIBOWITZ', 2000, 'MACHINE LEARNING', 2000, 'PYTHON', 2000, 'CORNELL TECH', 2000, 'DATA', 2000, 'NLP', 2000, 'COLUMBIA', 2000, 'ENGINEER', 2000, 'COMPUTER SCIENCE', 2000, 'SQL', 2000]*/
            ['SHAINE LEIBOWITZ', 2000, 'BUILT', 2000, 'DESIGNED', 2000, 'THIS WEBSITE WITH', 2000, 'JAVASCRIPT', 2000, 'REACT', 2000, 'CSS', 2000]
                    }
            loop={Infinity}
            wrapper="p"
            />
        </div>
    )
}

export default Home;