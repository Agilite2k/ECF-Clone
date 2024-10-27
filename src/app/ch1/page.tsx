import React from 'react'
import TransitionLink from '../components/TransitionLink'

const ch1 = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto mt-20 flex flex-col justify-center items-center gap-10">
        <h1 className="text-7xl font-bold">Chapter 1</h1>
        <h1 className="text-7xl font-bold">The Heart of Filipino Nationalism</h1>
        <div className="max-w-5xl grid grid-cols-1 gap-16">
            <div className="grid grid-cols-1 gap-5">
                <h2 className='text-xl font-semibold'>Introduction to Nationalism</h2>
                <p className='leading-8 text-lg'>Claro M. Recto sees nationalism as more than a simple concept; it&apos;s a powerful, guiding belief for the Filipino people. For Recto, nationalism is a “banner of freedom” — a call to action that urges every Filipino to cherish and protect the country&apos;s values, culture, and resources. He defines it as a movement where Filipinos control their own destiny, safeguarding the nation&apos;s wealth for future generations. True nationalism, he asserts, is inseparable from Filipino identity, history, and pride.</p>
            </div>
            <div className="grid grid-cols-1 gap-5">
                <h2 className='text-xl font-semibold'>Components of True Nationalism:</h2>
                <ul className='text-lg leading-8 list-disc'>
                    <li>
                        <span className="font-medium">National Identity:</span> Recognizing the uniqueness of Filipino culture, ideals, and shared history.
                    </li>
                    <li>
                    <span className="font-medium">Historical Awareness:</span> He argues that understanding the lives and sacrifices of heroes like José Rizal and Andrés Bonifacio is essential for genuine nationalism.
                    </li>
                    <li>
                    <span className="font-medium">Holistic Devotion:</span> For Recto, nationalism extends beyond politics; it embodies love for Filipino culture, the land, and the people, promoting unity and pride.
                    </li>
                </ul>
            </div>
        </div>
    <nav className="w-full p-5 flex flex-row place-items-center mt-10 border-t-2 border-black">
      <div className="w-full flex justify-between">
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/ch2" label="Next Page →" />
      </div>
    </nav>
    </div>
  )
}

export default ch1
