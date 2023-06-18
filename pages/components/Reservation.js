import {useEffect, useState} from "react";
import TeamMaker from "./TeamMaker";
import Ressources from "./Ressources";

function Reservation() {

    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
    const placeNameArray = ["La Turbine", "Palexpo", "Exposition"]
    const [place, setPlace] = useState("Annecy - La Turbine")
    const [placeName, setPlaceName] = useState("La Turbine")
    const [monthSelected, setMonthSelected] = useState(months[new Date().getMonth()])
    const [dayReserved, setDayReserved] = useState("Mardi 27/06")
    const [timeReserved, setTimeReserved] = useState("09h00")
    const [endTimeReserved, setEndTimeReserved] = useState("12h00")
    const [numberOfStudent, setNumberOfStudent] = useState("")
    const [studentClass, setStudentClass] = useState("")
    const [alreadyVisit, setAlreadyVisit] = useState("")
    const [numberOfGroup, setNumberOfGroup] = useState(0)
    const [groupPattern, setGroupPattern] = useState([])

    useEffect(() => {

        updateSizeOfContainer("is-active")

        let currentMonth = months[new Date().getMonth()]
        const monthText = document.querySelector('.book-online-planning .month')
        monthText.innerHTML = currentMonth
        setMonthSelected(currentMonth)

        const showingSectionId = document.querySelector('.sub-wrapper.is-active').getAttribute("data-id")
        updateStateOfReservation(showingSectionId)

        window.addEventListener('resize', () => {
            updateSizeOfContainer("is-active")
        })

    }, [])

    useEffect(() => {
        verifyInfoGroupProfile()
    }, [numberOfStudent, studentClass, alreadyVisit])

    function updateStateOfReservation(stateId) {
        const allState = document.querySelectorAll('.state-wrapper .state')
        allState.forEach(state => {
            state.classList.remove('is-active')
        })
        allState[stateId].classList.add('is-active')
    }

    function updateSizeOfContainer(section) {
        const container = document.querySelector('#reservation .container')
        const showingSection = document.querySelector('#reservation .container .sub-wrapper.' + section)
        container.style.height = showingSection.getBoundingClientRect().height + "px"
    }

    function changeProgress(event, hideSection, showSection) {
        if (!event.target.closest('.button').classList.contains('disabled')) {
            document.querySelector("." + hideSection).classList.remove('is-active')
            document.querySelector("." + showSection).classList.add('is-active')
            updateSizeOfContainer(showSection)
            updateStateOfReservation(document.querySelector("." + showSection).getAttribute("data-id"))
        }
    }

    function handleClickOnBookOnlinePlace(e) {
        const allPlace = document.querySelectorAll('.place-wrapper .place')
        const buttonNext = document.querySelector('.book-online-place .button.next')
        if (e.target.closest('.place').classList.contains('is-active')) {
            e.target.closest('.place').classList.remove('is-active')
            buttonNext.classList.add('disabled')
        } else {
            allPlace.forEach(place => {
                place.classList.remove('is-active')
            })
            e.target.closest('.place').classList.add('is-active')
            buttonNext.classList.remove('disabled')
            setPlace(e.target.closest('.place').querySelector('p').innerHTML)
            setPlaceName(placeNameArray[e.target.closest('.place').id])
        }
    }

    function handleMonthChange(direction) {
        if (direction === "back") {
            if (months[months.indexOf(monthSelected) - 1]) {
                setMonthSelected(months[months.indexOf(monthSelected) - 1])
            }
        }
        if (direction === "next") {
            if (months[months.indexOf(monthSelected) + 1]) {
                setMonthSelected(months[months.indexOf(monthSelected) + 1])
            }
        }
    }

    function handleClickOnTimePlanning(e) {
        const buttonNext = document.querySelector('.book-online-planning .button.next')
        const allTime = document.querySelectorAll('.calendar-wrapper .date .time')
        const timeSelected = e.target.closest('.time')

        if (timeSelected.classList.contains("is-active")) {
            timeSelected.classList.remove('is-active')
            setTimeReserved("")
            setEndTimeReserved("")
            buttonNext.classList.add('disabled')
        } else {
            allTime.forEach(time => {
                time.classList.remove('is-active')
            })
            timeSelected.classList.add('is-active')
            buttonNext.classList.remove('disabled')
        }

        setDayReserved(e.target.closest(".time").parentElement.childNodes[0].getAttribute("data-day"))
        setTimeReserved(e.target.closest('.time').querySelector("p").textContent)
        setEndTimeReserved(e.target.closest(".time").getAttribute("data-end"))

        const popUp = document.querySelector('.pop-up')
        popUp.classList.add('is-active')
        const popUpBackground = document.querySelector('.pop-up-background')
        popUpBackground.classList.add('is-active')

    }

    function closePopUp() {
        const popUp = document.querySelector('.pop-up')
        popUp.classList.remove('is-active')
        const popUpBackground = document.querySelector('.pop-up-background')
        popUpBackground.classList.remove('is-active')
    }

    function handleInputNumberOfStudent(e) {
        if (e.target.value > 30 || e.target.value < 6) {
            setNumberOfStudent("")
            e.target.classList.add('error')
        } else {
            setNumberOfStudent(e.target.value)
            e.target.classList.remove('error')
        }
    }

    function handleClickOnGroupProfile(e, wrapper) {
        const allWrapper = document.querySelectorAll('.group-profile .' + wrapper)
        const wrapperSelected = e.target.closest('.' + wrapper)

        if (wrapperSelected.classList.contains("is-active")) {
            wrapperSelected.classList.remove('is-active')
            if (wrapper === "level") {
                setStudentClass("")
            } else {
                setAlreadyVisit("")
            }
        } else {
            allWrapper.forEach(wrapper => {
                wrapper.classList.remove('is-active')
            })
            wrapperSelected.classList.add('is-active')
            if (wrapper === "level") {
                setStudentClass(wrapperSelected.innerHTML)
            } else {
                setAlreadyVisit(wrapperSelected.innerHTML)
            }
        }

    }

    function verifyInfoGroupProfile() {
        const buttonNext = document.querySelector('.group-profile .button.next')
        if (numberOfStudent > 5 && numberOfGroup < 31 && studentClass !== "" && alreadyVisit !== "") {
            calculateNumberOfGroup()
            buttonNext.classList.remove('disabled')
        } else {
            buttonNext.classList.add('disabled')
        }
    }

    function calculateNumberOfGroup() {
        let numberOfStudentsRemaining = numberOfStudent
        let numberOfGroup = 0
        let groupPattern = []

        while (numberOfStudentsRemaining >= 3) {
            numberOfStudentsRemaining -= 3
            groupPattern.push(3)
            numberOfGroup++
        }

        if (numberOfStudentsRemaining === 2) {
            numberOfStudentsRemaining -= 2
            numberOfGroup++
            groupPattern.push(2)
        }

        if (numberOfStudentsRemaining === 1) {
            numberOfStudentsRemaining--
            groupPattern[numberOfGroup - 1] = 2
            numberOfGroup++
            groupPattern.push(2)
        }

        setNumberOfGroup(numberOfGroup)
        setGroupPattern(groupPattern)

    }

    return (
        <section id="reservation">

            <div className="global-wrapper">

                <h3 className="title">Venir à l'exposition Elie en <span>4 étapes</span></h3>

                <div className="state-wrapper">

                    <div className="state is-active" id="0">
                        <div className="state-number">1</div>
                        <p>Réserver votre créneau</p>
                    </div>

                    <div className="line"></div>

                    <div className="state" id="1">
                        <div className="state-number">2</div>
                        <p>Renseigner votre profil de groupe</p>
                    </div>

                    <div className="line"></div>

                    <div className="state" id="2">
                        <div className="state-number">3</div>
                        <p>Créer les groupes d'élèves</p>
                    </div>

                    <div className="line"></div>

                    <div className="state" id="3">
                        <div className="state-number">4</div>
                        <p>Récapitulatif de votre réservation</p>
                    </div>

                </div>

                <div className="container">

                    <div className="book-online-place sub-wrapper is-active" data-id="0">

                        <h5 className="title">Réserver en ligne</h5>

                        <h6 className="sub-title">Choisir le lieu d'exposition</h6>

                        <div className="place-wrapper">

                            <div className="place" id="0" onClick={(e) => handleClickOnBookOnlinePlace(e)}>
                                <p>Annecy - La Turbine</p>
                            </div>
                            <div className="place" id="1" onClick={(e) => handleClickOnBookOnlinePlace(e)}>
                                <p>Lyon - Palexpo</p>
                            </div>
                            <div className="place" id="2" onClick={(e) => handleClickOnBookOnlinePlace(e)}>
                                <p>Grenoble - Exposition</p>
                            </div>

                        </div>

                        <div className="button-wrapper">
                            <div className="button prev disabled">
                                <p>Précédent</p>
                            </div>
                            <div className="button next disabled"
                                 onClick={(e) => changeProgress(e, "book-online-place", "book-online-planning")}>
                                <p>Suivant</p>
                            </div>
                        </div>

                    </div>

                    <div className="book-online-planning sub-wrapper" data-id="0">

                        <div className="top-part">

                            <p className="localisation">{place}</p>

                            <h5 className="title">Réserver en ligne</h5>

                            <div className="month-wrapper">
                                <img src={"month-icon.svg"} alt="Arrow icon for the month selector"
                                     onClick={() => handleMonthChange("back")}/>
                                <p className="month">{monthSelected}</p>
                                <img src={"month-icon.svg"} alt="Arrow icon for the month selector" className="next"
                                     onClick={() => handleMonthChange("next")}/>
                            </div>

                        </div>

                        <div className="calendar-wrapper">

                            <div className="date">

                                <div className="day">Lun. 26</div>

                                <div className="time margin disabled">
                                    <p>09h00</p>
                                </div>

                                <div className="time disabled">
                                    <p>13h00</p>
                                </div>

                            </div>

                            <div className="date">

                                <div className="day" data-day={"Mardi 27/06"}>Mar. 27</div>

                                <div className="time margin" data-end={"12h00"} onClick={(e) => handleClickOnTimePlanning(e)}>
                                    <p>09h00</p>
                                </div>

                                <div className="time" data-end={"16h00"} onClick={(e) => handleClickOnTimePlanning(e)}>
                                    <p>13h00</p>
                                </div>

                            </div>

                            <div className="date">

                                <div className="day" data-day={"Mercredi 28/06"}>Mer. 28</div>

                                <div className="time" data-end={"12h00"} onClick={(e) => handleClickOnTimePlanning(e)}>
                                    <p>09h00</p>
                                </div>

                            </div>

                            <div className="date">

                                <div className="day" data-day={"Jeudi 29/06"}>Jeu. 29</div>

                                <div className="time margin" data-end={"12h00"} onClick={(e) => handleClickOnTimePlanning(e)}>
                                    <p>09h00</p>
                                </div>

                                <div className="time disabled">
                                    <p>13h00</p>
                                </div>

                            </div>

                            <div className="date">

                                <div className="day" data-day={"Vendredi 30/06"}>Ven. 30</div>

                                <div className="time margin disabled">
                                    <p>09h00</p>
                                </div>

                                <div className="time" data-end={"16h00"} onClick={(e) => handleClickOnTimePlanning(e)}>
                                    <p>13h00</p>
                                </div>

                            </div>

                        </div>

                        <div className="pop-up">

                            <img src={"cross-icon.svg"} alt="Cross icon to cancel popup" className="cross-icon"
                                 onClick={() => closePopUp()}/>

                            <p className="normal-text">Créneau selectionné</p>
                            <p className="bold-text">{dayReserved} à {timeReserved}.</p>

                            <p className="normal-text">Lieu</p>
                            <p className="bold-text">{place}.</p>

                            <p className="conditions">Conditions</p>
                            <p className="conditions-text">Vous avez une session de 15 minutes renouvelable
                                pour complété votre réservation sur le site. En cas de paiement il sera définitivement
                                bloqué. Vous pouvez annuler une réservation, et être remboursé, jusqu’à 5 jours
                                ouvrables précédant la date du créneau. Pour toute demande d’annulation, veuillez nous
                                contacter par mail à contact@elie.fr.</p>

                        </div>

                        <div className="pop-up-background" onClick={() => closePopUp()}></div>

                        <div className="button-wrapper">
                            <div className="button prev"
                                 onClick={(e) => changeProgress(e, "book-online-planning", "book-online-place")}>
                                <p>Précédent</p>
                            </div>
                            <div className="button next disabled"
                                 onClick={(e) => changeProgress(e, "book-online-planning", "group-profile")}>
                                <p>Suivant</p>
                            </div>
                        </div>

                    </div>

                    <div className="group-profile sub-wrapper" data-id="1">

                        <h5 className="sub-title">Combien d'élèves avez-vous ?</h5>
                        <input type="number" step="1" min="0" max="30" placeholder="Nombre d'élèves" maxLength="2"
                               onInput={(e) => handleInputNumberOfStudent(e)}/>

                        <h5 className="sub-title">Quel est le niveau du groupe ?</h5>
                        <div className="level-wrapper">
                            <div className="level" onClick={(e) => handleClickOnGroupProfile(e, "level")}>CM1</div>
                            <div className="level" onClick={(e) => handleClickOnGroupProfile(e, "level")}>CM2</div>
                            <div className="level" onClick={(e) => handleClickOnGroupProfile(e, "level")}>Autre</div>
                        </div>

                        <h5 className="sub-title">Êtes-vous déjà venu à {placeName} ?</h5>
                        <div className="visit-wrapper">
                            <div className="visit" onClick={(e) => handleClickOnGroupProfile(e, "visit")}>oui</div>
                            <div className="visit" onClick={(e) => handleClickOnGroupProfile(e, "visit")}>non</div>
                        </div>

                        <div className="button-wrapper">
                            <div className="button prev"
                                 onClick={(e) => changeProgress(e, "group-profile", "book-online-planning")}>
                                <p>Précédent</p>
                            </div>
                            <div className="button next disabled"
                                 onClick={(e) => changeProgress(e, "group-profile", "student-group")}>
                                <p>Suivant</p>
                            </div>
                        </div>

                    </div>

                    <div className="student-group sub-wrapper" data-id="2">

                        <TeamMaker numberOfStudent={numberOfStudent} numberOfGroup={numberOfGroup} groupPattern={groupPattern}/>

                        <div className="button-wrapper">
                            <div className="button prev"
                                 onClick={(e) => changeProgress(e, "student-group", "group-profile")}>
                                <p>Précédent</p>
                            </div>
                            <div className="button next disabled"
                                 onClick={(e) => changeProgress(e, "student-group", "recap")}>
                                <p>Suivant</p>
                            </div>
                        </div>

                    </div>

                    <div className="recap sub-wrapper" data-id="3">

                        <div className="left-part">

                            <div className="wrapper">

                                <h3 className="title">Récapitulatif de votre réservation</h3>

                                <h6 className="sub-title">Créneau</h6>
                                <p className="text">{dayReserved} de {timeReserved} à {endTimeReserved}</p>

                                <h6 className="sub-title">Lieu</h6>
                                <p className="text">{place}</p>

                                <h6 className="sub-title">Groupe</h6>
                                <p className="text">1 classe, {numberOfStudent} élèves, {studentClass}</p>

                            </div>

                            <div className="wrapper padding">

                                <h3 className="title">Ressources</h3>

                                <Ressources margin={false}/>

                            </div>

                            <div className="wrapper">

                                <h3 className="title">Des questions ?</h3>
                                <h6 className="sub-title">Téléphone</h6>
                                <p className="text">06 44 62 94 41</p>

                                <h6 className="sub-title">Mail</h6>
                                <p className="text">Contact@elie.fr</p>

                            </div>

                        </div>

                        <div className="right-part">

                            <div className="payWall">

                            </div>

                            <div className="button-wrapper">
                                <div className="button prev"
                                     onClick={(e) => changeProgress(e, "recap", "student-group")}>
                                    <p>Précédent</p>
                                </div>
                                <div className="button next"
                                     onClick={(e) => changeProgress(e, "recap", "book-online-place")}>
                                    <p>Suivant</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </section>
    )

}

export default Reservation