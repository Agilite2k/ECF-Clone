import React from 'react'
import TransitionLink from '../components/TransitionLink'

const ch4 = () => {
  return (
    <div className="h-screen max-w-7xl mx-auto mt-20 flex flex-col justify-center items-center gap-10">
        <h1 className="text-7xl font-bold">Chapter 4</h1>
        <h1 className="text-6xl font-bold">Balancing Nationalism and Global Cooperation</h1>
        <div className="max-w-5xl grid grid-cols-1 gap-16">
            <div className="grid grid-cols-1 gap-5">
                <h2 className='text-xl font-semibold'>Constructive Internationalism</h2>

                <p className='leading-8 text-lg'>While Recto champions nationalism, he also acknowledges the importance of constructive internationalism, a global cooperation that respects each country&apos;s sovereignty. He argues that Filipinos should engage in international efforts, but without compromising their national interests.</p>
            </div>

            <div className="grid grid-cols-1 gap-5">
                <h2 className='text-xl font-semibold'>Rejecting Imperialistic Influences:</h2>

                <p className='leading-8 text-lg'>Recto cautions against foreign agreements that may disguise imperialistic intentions, which could erode the Philippines&apos; autonomy. He believes that true internationalism allows nations to develop as equals without external interference, and advocates for partnerships that genuinely benefit the Philippines.</p>
        </div>
    </div>

    <nav className="w-full p-5 flex flex-row place-items-center mt-10 border-t-2 border-black">

      <div className="w-full flex justify-between">
        <TransitionLink href="/ch3" label="← Go Back" />
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/ch5" label="Next Page →" />
      </div>
    </nav>
    </div>
  )
}

export default ch4
