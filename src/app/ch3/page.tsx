import React from 'react';
import TransitionLink from '../components/TransitionLink';

const ch3 = () => {
  return (
    <div className="h-screen max-w-6xl mx-auto mt-10 flex flex-col justify-center items-center gap-10 px-6 text-gray-800">
        <h1 className="text-7xl font-black text-center animate-pulse text-indigo-700">Chapter 3</h1>
        <h2 className="text-4xl font-bold text-center text-indigo-900 mt-4 transition duration-500 transform hover:scale-105">
          Genuine vs. False Nationalism
        </h2>
        
        <div className="max-w-5xl grid grid-cols-1 gap-12 p-8 rounded-lg border-2 border-gray-300 shadow-lg transition-all duration-700 ease-in-out hover:shadow-2xl hover:scale-105">
            <div className="grid grid-cols-1 gap-4 text-center">
                <h2 className="text-3xl font-semibold text-indigo-800">The Danger of Superficial Nationalism</h2>
                <p className="leading-8 text-lg text-gray-700 tracking-wide">
                    Claro M. Recto critiques what he calls “false nationalists,” who make superficial displays of nationalism but lack a true commitment to the Philippines’ welfare. For him, true nationalism requires dedication to Filipino interests beyond appearances or symbolic gestures.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 text-center">
                <h2 className="text-3xl font-semibold text-indigo-800">Identifying True Nationalists</h2>
                <p className="leading-8 text-lg text-gray-700 tracking-wide">
                    Recto argues that genuine nationalism is about consistent dedication to the country’s progress and independence. He warns against individuals who claim to be nationalists but act in ways that serve personal or foreign interests, urging Filipinos to pursue a nationalism that truly supports Filipino welfare.
                </p>
            </div>
        </div>

        <nav className="w-full p-6 flex flex-row items-center mt-10 border-t-2 border-gray-300">
            <div className="w-full flex justify-between">
                <TransitionLink href="/" label="← Home" />
                <TransitionLink href="/ch4" label="Next Page →" />
            </div>
        </nav>
    </div>
  );
}

export default ch3;
