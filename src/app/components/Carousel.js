function Carousel({
    images,
    imageSize,
    alt = "",
    children,
    position = {}
}) {
    return (
        <>
            <div className="w-full carousel">
                {images.map((image, i) => (
                    <div className="carousel-item w-full" key={`carousel-item-${i}`}>
                        <div className={`w-full ${imageSize} overflow-hidden ${position[i] ? `flex items-${position[i]}` : ""}`}>
                            <img
                                src={image}
                                alt={alt}
                                className="w-full"
                            />
                        </div>
                        {children}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Carousel