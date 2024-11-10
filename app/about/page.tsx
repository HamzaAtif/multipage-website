import React from 'react'
import "../globals.css";
import Image from 'next/image';

export default function About() {
    return (
        <div className="aboutContainer">
            {/*about  welcome Section */}
            <section className="about-welcome">
                <h1>About Us</h1>
                <p>Discover our story, mission, and values.</p>
            </section>

            {/* Company Description */}
            <section className="about-content">
                <h2>Our Mission</h2>
                <p>
                    We are dedicated to delivering top-quality services to our clients. Our goal is to provide innovative solutions and build lasting relationships.
                </p>

                {/* Team Section */}
                <h2>Meet the Team</h2>
                <div className="team">
                    <div className="team-member">
                        <Image
                            src="https://sp-uploads.s3.amazonaws.com/uploads%2Fservices%2F11488738%2F20240319191624_65f9e488e5fe5_typescript_mastery__a_step_by_step_learning_experience__part1_page1.jpg"
                            alt="TypeScript Mastery Cover"
                            width={1000} 
                            height={1000} 
                            layout="responsive"
                        />

                        <h3>Ameen alam</h3>
                        <p>Manager</p>
                    </div>
                    <div className="team-member">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_7A4AAHw5fq8raSN6a14ZMEi9MKsUk7s1Q&s"
                            alt="Example Image"
                            width={1000} 
                            height={1000} 
                            layout="responsive" 
                        />

                        <h3>Sir Zia Khan</h3>
                        <p>CEO</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
