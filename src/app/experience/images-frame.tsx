"use client";
import Image from 'next/image';
import { Fragment, useRef, useState } from 'react';

export const ImagesFrame = ({ images }: { images: { src: string, alt: string }[] }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollToIndex = (index: number) => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const width = container.offsetWidth;
        container.scrollTo({ behavior: 'smooth', left: width * index })
        determinActiveIndex();
    }

    const determinActiveIndex = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const actIndex = Math.round((container.scrollLeft / container.scrollWidth) * images.length)
        if (activeIndex !== actIndex)
            setActiveIndex(actIndex)
    }

    return <>
        {/* images */}
        <div ref={containerRef} onScroll={determinActiveIndex} className="flex overflow-auto no-scrollbar relative snap-x snap-mandatory gap-2">
            {images.map((img, i) => <Fragment key={`img-${i}`}>
                <div className="relative aspect-video min-w-full border-2 rounded-md snap-center">
                    <Image src={img.src} alt={img.alt} fill className="object-cover rounded-md"></Image>
                </div>
            </Fragment>)}
        </div>
        {/* images scroll controlls */}
        <div className="flex gap-2 justify-center">
            {images.map((_, i) => <Fragment key={`scrollnob-${i}`}>
                <button onClick={(e) => {e.stopPropagation();e.preventDefault();scrollToIndex(i)}} className={`w-2.5 h-2.5 ${i===activeIndex?'bg-primary border-primary':'bg-inherit'} border rounded-full`}></button>
            </Fragment>)}
        </div>
    </>;
}