const Banner = ({ images, speed = 5000 }) => {
    return (
        <div className="inner">
            <div className="wrapper">
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map((image) => (
                        <div className="image" key={image.id}>
                            <img src={image.src} alt='' />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map((image) => (
                        <div className="image" key={image.id}>
                            <img src={image.src} alt='' />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map((image) => (
                        <div className="image" key={image.id}>
                            <img src={image.src} alt='' />
                        </div>
                    ))}
                </section>
                <section style={{ "--speed": `${speed}ms` }}>
                    {images.map((image) => (
                        <div className="image" key={image.id}>
                            <img src={image.src} alt='' />
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
};

export { Banner };
