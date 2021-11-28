import "../styles/about.css";
import Banner from "./banner";
import AboutPic from "../images/pho_kitchen.jpg";
import { useEffect, useState } from "react";

function AboutUs() {
    const [people, setPeople] = useState([]);
    useEffect(() => {
        let res = fetch("https://randomuser.me/api/");
        let res2 = fetch("https://randomuser.me/api/");
        let res3 = fetch("https://randomuser.me/api/");
        Promise.all([res, res2, res3]).then((values) => {
            return Promise.all(values.map((response) => {
                return response.json();
            }));
        }).then((data) => {
            setPeople(data);
        });
    }, []);
    return (
        <div>
            <Banner text="About Us" image={AboutPic} />
            <div className="about-content">
                <h1>Meet Our Team</h1>
                <div className="about-div">
                    {people.map((person) => {
                        return <div className="person-div"
                            key={person.results[0].login.uuid}
                        >
                            <div className="person-image">
                                <img src={person.results[0].picture.large} alt="" />
                            </div>
                            <div className="person-content">
                                <div className="person-about">
                                    <p>{person.results[0].name.first} {person.results[0].name.last}</p>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default AboutUs;