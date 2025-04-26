'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '../components/navbar'

const generate = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = async () => {
        if (!url || !shorturl) {
            alert("Both fields are required!");
            return;
        }

        try {
            const res = await fetch("/api/generate", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url, shorturl })
            })

            const result = await res.json()

            if (result.success) {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setUrl("")
                setShorturl("")
                alert(result.message)
            } else {
                alert("Something went wrong!")
            }
        } catch (error) {
            console.error("Error generating short URL:", error)
            alert("Failed to generate short URL.")
        }
    }

    return (
        <>
            <Navbar />
            <div className='mx-auto max-w-lg bg-purple-100 my-16 p-10 rounded-lg flex flex-col gap-5'>
                <h1 className='font-bold text-3xl'>Generate Your Short URLs</h1>
                <div className='flex flex-col gap-4'>
                    <input
                        type="text"
                        placeholder='Enter your URL'
                        className='px-4 py-2 focus:outline-purple-600 rounded-md'
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />

                    <input
                        type="text"
                        className='px-4 py-2 focus:outline-purple-600 rounded-md'
                        placeholder='Enter your preferred short URL text'
                        value={shorturl}
                        onChange={(e) => setShorturl(e.target.value)}
                    />

                    <button
                        onClick={generate}
                        className='cursor-pointer bg-gradient-to-br from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300 text-white font-semibold rounded-xl text-sm px-6 py-2.5 shadow-lg'
                    >
                        Generate
                    </button>
                </div>

                {generated && (
                    <div className='mt-4 text-center'>
                        <span className='font-bold text-lg'>Your Short Link: </span>
                        <code>
                            <Link target='_blank' href={generated} className='text-blue-600 underline'>
                                {generated}
                            </Link>
                        </code>
                    </div>
                )}
            </div>
        </>
    )
}

export default generate
