import Carousel from "./Carousel"
function Hero() {
    const size = "md:aspect-[5/2] aspect-[7/4]"
    const images = [
        "https://images.unsplash.com/photo-1588609460031-22705bc49db0?auto=format&fit=crop&q=80&w=2664&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1598978396434-6987130ce46b?auto=format&fit=crop&q=80&w=2671&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1544244015-9c72fd9c866d?auto=format&fit=crop&q=80&w=2564&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ]

    return (
        <div className={`relative ${size}`}>
            <Carousel
                images={images}
                imageSize={size}
                position={{
                    2: "center"
                }}
            />
            <div className="hidden sm:flex flex-col gap-2 absolute top-[12rem] -translate-y-1/2 text-white opacity-[0.8] lg:px-24 px-8 py-32">
                <span className="text-6xl">
                    All brands
                </span>
                <span className="text-4xl">
                    All phones
                </span>
                <span className="text-2xl">One place.</span>
            </div>
        </div>
    )
}

export default Hero