import React, {useEffect, useState} from 'react';
import Logo from "../../asset/svg/logo-forest-green.svg"

function TeamMaker(props) {
    const [numberOfGroup, setNumberOfGroup] = useState(3);
    const [groupPattern, setGroupPattern] = useState([3, 3, 3]);
    const [numberOfStudent, setNumberOfStudent] = useState(9);
    const cardColors = ["#C3E0C7", "#FFF1BF", "#FFC1AD", "#C8D9DF", "#F4EEFF", "#FFCCCC", "#DFD0C8", "#FAC4A7", "#E1F6FD", "#DCC0E0"]
    const logoColors = ["#839C84", "#EECE5C", "#FF784D", "#468399", "#DEC8F3", "#FF7C7C", "#AE8B79", "#DE8E64", "#B5DBF6", "#C16CCF"]
    const nameColors = ["#ABC4AC", "#EFE2B5", "#FFA78B", "#AEC9D2", "#EEE0F4", "#E7B7B7", "#CEBFB7", "#EDB495", "#C8EDF9", "#D3A7DA"]

    useEffect(() => {
        setNumberOfGroup(props.numberOfGroup);
        setGroupPattern(props.groupPattern);
        setNumberOfStudent(props.numberOfStudent)
    }, [props.numberOfGroup, props.groupPattern, props.numberOfStudent]);

    function handleNameChange(e) {
        const value = e.target.value
        const img = e.target.parentElement.querySelector("img")

        if (value !== "") {
            img.classList.add("is-active")
        } else {
            img.classList.remove("is-active")
        }

        checkIfAllNameAreFilled()

    }

    function resetName(e) {
        const input = e.target.parentElement.querySelector("input")
        input.value = ""
        e.target.classList.remove("is-active")
        checkIfAllNameAreFilled()
    }

    function checkIfAllNameAreFilled() {
        const allActiveMember = document.querySelectorAll(".member-wrapper img.is-active")
        const buttonNext = document.querySelector(".student-group .button.next")

        if (allActiveMember.length === Number(numberOfStudent)) {
            buttonNext.classList.remove("disabled")
        } else {
            buttonNext.classList.add("disabled")
        }
    }

    return (
        <div className="team-wrapper">
            {Array.from({length: numberOfGroup}, (_, index) => (
                <div className="team" key={index} style={{background: cardColors[index]}}>

                    <Logo className="logo" fill={logoColors[index]}/>

                    <div className="team-name" style={{background: nameColors[index]}}>
                        <p>Équipe {index + 1}</p>
                    </div>

                    {Array.from({length: groupPattern[index]}, (_, indexPattern) => (
                        <div className="member-wrapper">
                            <input type="text" placeholder="..." className="team-member" maxLength="20" key={indexPattern} onInput={(e) => handleNameChange(e)}/>
                            <img src={"cross-icon-blue.svg"} alt="Cross icon to reset name" className="cross" onClick={(e) => resetName(e)}/>
                        </div>
                    ))}

                </div>
            ))}
        </div>
    );
}

export default TeamMaker;