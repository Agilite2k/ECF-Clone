"use client"
import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "@/app/utils/animations"

interface Props {
  href: string
  label: string
}

const TransitionLink = ({ href, label }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router)
    }
  }

  return (
    <button
      className="text-xl text-neutral-900 hover:text-neutral-700 hover:underline"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default TransitionLink
