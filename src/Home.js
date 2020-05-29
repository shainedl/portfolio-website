import React from 'react'

/*https://reactjsexample.com/react-animated-typing-in-400-bytes-of-javascript/*/
import Typical from 'react-typical'

function Home(props){

    return (
        <div className='home'>
            <Typical
            steps={
            ['SHAINE LEIBOWITZ', 2000, 'BUILT', 2000, 'AND', 1000, 'DESIGNED', 2000, 'THIS WEBSITE WITH', 2000, 'JAVASCRIPT', 2000, 'REACT', 2000, 'CSS', 2000]
                    }
            loop={Infinity}
            wrapper="p"
            />
        </div>
    )
}

export default Home;