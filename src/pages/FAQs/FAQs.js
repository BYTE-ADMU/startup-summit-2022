// DEPENDENCIES
import React from 'react';

// COMPONENTS
import FAQ from "../../components/FAQ";

// STYLES
import './styles.css';

// ASSETS
import leftShard from "./assets/left-shards.png";
import rightShard from "./assets/right-shards.png";
import leftCircle from "./assets/left-circle.png";
import rightCircle from "./assets/right-circle.png";

const data = [
    {
        question: "When is Startup Summit?",
        answer: "Startup Summit will span 3 days and will take place on April 6, 7, and 8 respectively. There will also be a post-event to be held on April 9."
    },
    {
        question: "When are sign-ups closed? ",
        answer: "Registration period will run from March 18 to March 31, 2022."
    },
    {
        question: "Is there an entrance fee?",
        answer: "There will be no entrance fee. Registration is free!"
    },
    {
        question: "Are the talks recorded?",
        answer: "Though the event may be recorded, recordings of the talks will not be made available for participants. However, we highly encourage participants to attend other talk sessions and visit our startup booth expo."
    },
    {
        question: "Are there networking opportunities?",
        answer: "Yes. Networking Night will be held on April 9, 5:30-7 pm via Zoom. Participants can expect registration details to be announced on April 2, 2022, on the Startup Summit FB page and website. \n\nInternship opportunities may also be open for applications during the expo booths."
    },
    {
        question: "What if I won’t be able to attend a session?",
        answer: "Though the recordings of the event will not be available, we still highly encourage participants to attend other talk sessions and visit our startup booth expo to maximize their Startup Summit experience."
    },
    {
        question: "Do I have to attend every session?",
        answer: "No. Participants are not required to attend every session, but they are highly encouraged to attend as many talk sessions and visit as many startup booths as they would like."
    },
    {
        question: "Do I need to be in Metro Manila to attend?",
        answer: "No. Startup Summit 2022 will be completely held online so we encourage students to attend from anywhere they are in the world."
    },
    {
        question: "How do I get updates for Startup Summit?",
        answer: "Like and follow our social media pages and check out our website!"
    }
]

const FAQs = () => {
    return (
        <div className="faq__container">
            {/* ABSOLUTE IMAGES */}
            <img src={leftShard} className="shard left" alt="Background" />
            <img src={rightShard} className="shard right" alt="Background" />
            <img src={leftCircle} className="circle left" alt="Background" />
            <img src={rightCircle} className="circle right" alt="Background" />

            {/* CONTENT */}
            <h1 className="faq--header">Frequently Asked Questions</h1>
            <div className="faq__wrapper">
                {
                    data.map((faq) => (
                        <FAQ title={faq.question} body={faq.answer} />
                    ))
                }
            </div>
        </div>
    )
}

export default FAQs;