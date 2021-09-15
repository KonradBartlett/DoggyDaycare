import './contact.scss';

export function Contact() {
    return (
        <div className="page">
            <div id="contact" className=" card ">
                <h2>Contact Us</h2>
                <p>
                    <b>Phone: </b>(123) 456-7890<br/>
                    <b>Email:</b><a href="mailto:email@email.com" target="_blank" rel="noopener noreferrer nofollow">FakeEmail@email.com</a>
                </p>
                <form onsubmit={() => {return false;}}>
        
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name"/>

                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" placeholder="Your contact email"/>

                    <label for="topic">Topic</label>
                    <select id="topic" name="topic">
                        <option value="inquiry">Inquiry</option>
                        <option value="complaint">Complaint</option>
                        <option value="other">Other</option>
                    </select>

                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Write something" style={{height:'200px'}}/>

                    <input type="submit" className="dark_hover" value="Submit"/>

                </form>
            </div>
        </div>
    );
}