'use client'
import { useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import gsap from "gsap"

export default function Home() {
    const comp = useRef(null)

    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        const t1 = gsap.timeline()
        t1.from("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
          delay: 0.3,
        })
          .from(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "+=30",
            stagger: 0.5,
          })
          .to(["#title-1", "#title-2", "#title-3"], {
            opacity: 0,
            y: "-=30",
            delay: 0.3,
            stagger: 0.5,
          })
          .to("#intro-slider", {
            xPercent: "-100",
            duration: 1.3,
          })
          .from("#welcome", {
            opacity: 0,
            duration: 0.5,
          })
      }, comp)

      return () => ctx.revert()
    }, [])

    return (
    <>
      <div className="relative" ref={comp}>
        <div
          id="intro-slider"
          className="h-screen p-10 bg-gray-50 absolute top-0 left-0 font-spaceGrotesk z-10 w-full flex flex-col gap-10 tracking-tight"
        >
          <h1 className="text-9xl text-black font-bold" id="title-1">
            Nationalism
          </h1>
          <h1 className="text-9xl text-black" id="title-2">
            by
          </h1>
          <h1 className="text-9xl text-black" id="title-3">
            Claro M. Recto
          </h1>
        </div>
        <div className="h-screen flex bg-gray-950 justify-center place-items-center">
          <h1
            id="welcome"
            className="text-9xl font-bold text-gray-100 font-spaceGrotesk"
          >
            Presented by Group 4.
          </h1>
        </div>
      </div>
      <div className="h-screen flex justify-center items-center">
        <Link href='/ch1'>
            <Button variant="outline" className="bg-black text-white hover:bg-gray-700 hover:text-white">Button</Button>
        </Link>
      </div>
   </>
  );
}
