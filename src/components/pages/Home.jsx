// Home.js
import React from 'react';
import Header from '../Header';
function Home() {
  return (

    <div>
        <header>
        <Header />
        </header>
                <div className="bg-scroll bg-cover h-screen" style={{ backgroundImage: 'url(/src/images/beach.jpeg)' }}>
                    <p className="">
                        Welcome to my portfolio. I am a full-stack developer with experience in React, Node.js, Express, and MongoDB.
                    </p>
                </div>
           
    </div>

  );
};

export default Home;
