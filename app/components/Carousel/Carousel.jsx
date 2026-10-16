import './carousel.scss';

const imagesUrl = [
    "/home/carousel1.png",
    "/home/carousel2.png",
    "/home/carousel3.png",
    "/home/carousel4.png",
    "/home/carousel5.png",
    "/home/carousel6.png",
]

export const Carousel = () => {
    return <div id='carousel' role='region' aria-label='Empresas'>
        <div className='carouselViewport'>
            <div className='carouselTrack'>
                {[0, 1].map((copy) => (
                    <div className='carouselGroup' key={copy} aria-hidden={copy === 1 ? true : undefined}>
                        {imagesUrl.map((imageUrl, index) => (
                            <div className='carouselSlide' key={imageUrl}>
                                <img src={imageUrl} alt={copy === 0 ? `Logo empresa ${index + 1}` : ''} />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
}
