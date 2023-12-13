import React from 'react'

function PriceComponent() {

    return(

        <main className='flex items-center justify-center py-16 min-[400px]:h-screen min-[770px]:h-auto min-[820px]:h-screen'>

            {/* Container */}

            <div className='max-w-[90%] w-[1050px]'>

                <header className='p-6 rounded-t-md lg:p-11'>

                    <h1 className='text-[1.28rem] pb-3 sm:text-[2rem] lg:text-[2.5rem]'>Join our community</h1>

                    <h2 className='text-[.9rem] pb-4 sm:text-[1.3rem] lg:text-[1.9rem]'>30-day, hassle-free money back guarantee</h2>

                    <p className='text-[.74rem] sm:text-[1.1rem] lg:text-[1.6rem]'>Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>

                </header>

                <div className='lg:grid lg:grid-cols-2'>

                    <div className='p-6 lg:flex lg:flex-col lg:items-start lg:justify-center lg:p-11 lg:rounded-bl-md'>

                        <h3 className='text-[1.18rem] sm:text-[2rem]'>Monthly Subscription</h3>

                        <div className='mb-6'>

                            <p className='text-white text-[2rem] flex items-center justify-start gap-3 sm:text-[3rem] sm:gap-6'>&#36;29 <span className='text-[.9rem] sm:text-[1.6rem]'>per month</span></p>
                            <p className='text-white text-[.82rem] sm:text-[1.6rem]'>Full access for less than &#36;1 a day</p>

                        </div>

                        <button className='block w-[100%] lg:w-[90%] mx-auto my-0 py-3 lg:py-5 rounded-lg cursor-pointer text-white text-[1rem] lg:text-[1.5rem]'>Sign Up</button>

                    </div>

                    <div className='p-6 rounded-b-md lg:rounded-none lg:rounded-br-md lg:p-11'>

                        <p className='text-white text-[1.18rem] mb-5 sm:text-[2rem]'>Why Us</p>

                        <ul>

                            <li className='text-[.94rem] sm:text-[1.5rem]'>Tutorials by industry experts</li>
                            <li className='text-[.94rem] sm:text-[1.5rem]'>Peer &amp; expert code review</li>
                            <li className='text-[.94rem] sm:text-[1.5rem]'>Coding exercises</li>
                            <li className='text-[.94rem] sm:text-[1.5rem]'>Access to our GitHub repos</li>
                            <li className='text-[.94rem] sm:text-[1.5rem]'>Community forum</li>
                            <li className='text-[.94rem] sm:text-[1.5rem]'>Flashcard decks</li>
                            <li className='text-[.94rem] sm:text-[1.5rem]'>New videos every week</li>
                            
                        </ul>

                    </div>

                </div>

            </div>

        </main>

    );
}

export default PriceComponent;