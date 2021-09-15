import './services.scss';

// TODO: REPLACE TEXT THIS TEXT IS PLACEHOLDER/PLAGARISED

export function Services() {
    return (
        <div className="page">
            <div id="services" className=" card ">
                <h2>Service Offered</h2>
                <div className="grid">
                    <div className="container">
                        <div className="cell">
                            <div id="walk" className="image dark_hover" />
                            <h2>Dog Walking</h2>
                            <p>
                                Our Individual Dog Walking service gives your pet maximum attention. 
                                This is for dogs that are still learning their manners with other dogs or simply prefer to be on their own. 
                                One on one time is a great way to socialize your dog with other people, practice walking on leash and learning basic commands. 
                                Get in touch to book a session today.
                            </p>
                        </div>
                        <details>
                            <summary>Pricing</summary>
                            <p><h3>30 Minutes: </h3>$35</p>
                            <p><h3>45 Minutes: </h3>$40</p>
                            <p><h3>1 Hour: </h3>$45</p>
                        </details>
                    </div>
                    <div className="container">
                        <div className="cell">
                            <div id="group" className="image dark_hover" />
                            <h2>Group Walks</h2>
                            <p>
                                Sign up your dogs to join the pawsie! 
                                Our Group Dog Walking service gives your pet the chance to socialize with other dogs and make new friends. 
                                We walk a maximum of 3 dogs at a time which allows for lots of attention and support on our walks. 
                            </p>
                        </div>
                        <details>
                            <summary>Pricing</summary>
                            <p><h3>30 Minutes: </h3>$25</p>
                            <p><h3>1+ Hour: </h3>$30</p>
                        </details>
                    </div>
                    <div className="container">
                        <div className="cell">
                            <div id="visit" className="image dark_hover" />
                            <h2>Home Visits</h2>
                            <p>
                                Do you have a puppy or a senior dog that isn't up for walks but needs a little TLC? 
                                We can do home visits to let your dog out for bathroom breaks, feeding or medication times and a whole lot of attention.
                            </p>
                        </div>
                        <details>
                            <summary>Pricing</summary>
                            <p><h3>30 Minutes: </h3>$30</p>
                            <p><h3>45 Minutes: </h3>$35</p>
                            <p><h3>1 Hour: </h3>$40</p>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
}