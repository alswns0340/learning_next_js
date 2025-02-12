"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(){
  const path = usePathname();
  // usePathname은 현재 유저가 있는 위치를 알려줌
  console.log(path)
  return(
  <nav> 
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li><Link href="/about-us">About us</Link></li>
    </ul>
  </nav>
  )
}