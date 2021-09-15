import { useState } from 'react';
import './team.scss';
import Amy from '../assets/amy.jpg';
import Brennan from '../assets/brennan.jpg';

const people = [
    {
        name: 'Amy',
        role: 'Valkyrie of the night',
        description: 'She walks the dogs',
        image: <img src={Amy} alt="amy our fearless leader" width="500" height="500"/>
    },
    {
        name: 'Brennan',
        role: 'Dog walker 9000',
        description: 'He walks the dogs',
        image: <img src={Brennan} alt="brennan our dog walker" width="500" height="500"/>
    }
]

export function Team() {
    // const [name, setName] = useState('');
    // const [role, setRole] = useState('');
    // const [description, setDescription] = useState('');
    // const [image, setImage] = useState();
    // const [index, setIndex] = useState(0);

    // const updateFact = () => {
    //     if(index + 1 >= people.length){
    //         setIndex(0);
    //     } else {
    //         setIndex(index + 1);
    //     }
    //     setName(people[index].name);
    //     setRole(people[index].role);
    //     setDescription(people[index].description);
    //     setImage(people[index].image)
    // }

    const cards = people.map((person, index) => {
        console.log(person)
        return (
            <div key={index} className="person">
                <div className="info">
                    <h1>{person.name}</h1>
                    <p>{person.role}</p>
                    <p>{person.description}</p>
                </div>
                <div className="crop">
                    {person.image}
                </div>

            </div>
        )
    })

    return (
        <div className="page">
            <div id="team" className=" card ">
                <h2>Meet The team</h2>
                <div className="grid">
                    {cards}
                </div>
            </div>
        </div>
    );
}