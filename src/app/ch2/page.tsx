import React from 'react'
import TransitionLink from '../components/TransitionLink'

const ch2 = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto mt-20 flex flex-col justify-center items-center gap-10">
    <h1 className="text-7xl font-bold">Chapter 2</h1>
    <h1 className="text-7xl font-bold">The Heart of Filipino Nationalism</h1>
    <div className="max-w-5xl grid grid-cols-1 gap-16">
        <div className="grid grid-cols-1 gap-5">
            <h2 className='text-xl font-semibold'>Introduction to Nationalism</h2>
            <p className='leading-8 text-lg'>Claro M. Recto sees nationalism as more than a simple concept; it&apos;s a powerful, guiding belief for the Filipino people. For Recto, nationalism is a “banner of freedom” — a call to action that urges every Filipino to cherish and protect the country&apos;s values, culture, and resources. He defines it as a movement where Filipinos control their own destiny, safeguarding the nation&apos;s wealth for future generations. True nationalism, he asserts, is inseparable from Filipino identity, history, and pride.</p>
        </div>
        <div className="grid grid-cols-1 gap-5">
            <h2 className='text-xl font-semibold'>The Goal of Filipinism</h2>
            <p className='leading-8 text-lg'>Recto envisions a “Filipinism crusade,” a powerful movement where Filipinos are not only inspired by their heritage but also take concrete steps to improve their society. He urges each citizen to champion national welfare, reject dependency on foreign powers, and pursue self-reliance. For Recto, this crusade embodies the spirit of unity, pride, and purpose that he believes is essential for the Philippines to prosper.</p>
        </div>
    </div>
    <nav className="w-full p-5 flex flex-row place-items-center mt-10 border-t-2 border-black">
      <div className="w-full flex justify-between">
        <TransitionLink href="/ch1" label="← Go Back" />
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/ch3" label="Next Page →" />
      </div>
    </nav>
    </div>
  )
}

export default ch2
