import Image from 'next/image'
import React from 'react'
import "./HomeBanner.scss"
import Link from 'next/link'

function HomeBanner() {
    return (
        <section className='mainSec'>
            <figure>
                <Image quality={100} loading='eager' src={'/images/hero_bg.jpg'} alt='Home Banner' width={1922} height={762} />
            </figure>
            <div className="content">
                <h1>
                    UAE's Fastest growing
                    <span>
                        Rent a car marketplace
                    </span>
                </h1>
                <Link href={""} className='themeBtn'>
                    Book now
                </Link>
            </div>
        </section>
    )
}

export default HomeBanner