// import Image from 'next/image'
"use client"
import About from "@/components/About";
import Feature from "@/components/Feature";
import Header from "@/components/Header";
import "bootstrap/dist/css/bootstrap.css"

export default function Home() {

  return (
    <main>
      <Header/>
      <About/>
      <Feature/>
    </main>
  )
}
