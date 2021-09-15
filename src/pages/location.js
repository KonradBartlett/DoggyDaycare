import './location.scss';

export function Location() {
    return (
        <div className="page">
            <div id="location" className=" card ">
                <div>
                    <h2>Our Location</h2>
                    <p>
                        Doggy Daycare is based out of the beautiful sunshine coast.<br/>
                        We can drive anywhere within 50km to pick up your dog for a walk, or for a home visit.<br/>
                    </p>
                </div>
                <iframe className="map" width="600" height="450" loading="lazy" allowfullscreen
                src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJgcgbobMsfVQRp2t86PDhTFY&key=AIzaSyCMFq9T-wqZqHLjrcRppF60be58RN-LAUk"></iframe>
                
            </div>
        </div>
    );
}