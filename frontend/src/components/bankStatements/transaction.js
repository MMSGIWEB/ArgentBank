import { useState } from 'react';
import './style.css'

function Transaction() {
    // ouverture/fermeture de la transac
    const [isOpened, setClose] = useState(false)
    const openTransac = () => {
        setClose(!isOpened)
    }

    //état de la partie modifiable text1
    const [openedModif, closeModif] = useState(false)
    const openModifier = () => {
        closeModif(!openedModif)
        console.log('text modifier opened/close!')
    }
    //CELLE DU TEXT 2
    const [openedModif2, closeModif2] = useState(false)
    const openModifier2 = () => {
        closeModif2(!openedModif2)
        console.log('text modifier opened/close!')
    }

    //CHAMPS INPUT
    const [formValues, setFormValues] = useState({
        text1: '',
        text2: '',
    });

    //état pour modif le texte
    const changeText = (event) => {
        const { name, value } = event.target;
        setFormValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };


    //conclut la modif du text
    const handleTextChange = (event) => {
        event.preventDefault()
        openModifier()
        console.log('text changed!')
    }

    const handleTextChange2 = (event) => {
        event.preventDefault()
        openModifier2()
        console.log('text changed!')
    }

    //2EME TEXT
    // const [text2, setNewText2] = useState('')
    // const changeText2 = (event) => {
    //     //changer la valeur recupérée!!!
    //     setNewText2(event.target.value)
    //     // setNewText('')
    //     console.log('text changed!')
    // }


    // + input pour modif sur l'exemple de useState() + {modif ?/&& <...>}
    return (
        <div className='transac-container'>
            <article className='transac'>
                <section className='first-block'>
                    <div className='under-block'>
                        <div className='container'>
                            <div className='first'>27/02/20</div>
                            {isOpened &&
                                <div className='types'>
                                    <div className='info'>Transaction type</div>
                                    <div className='info'>Category</div>
                                    <div className='info'>Note</div>
                                </div>
                            }
                        </div>
                    </div>
                    <div className='under-block c'>
                        <div className='container'>
                            <div className='first'>Golden Sun Bakery</div>
                            {isOpened &&
                                <div className='types'>
                                    <div className='info'>Electronic</div>
                                    <div className='info gap'>
                                        {!openedModif ? (
                                            <form>
                                                <fieldset>
                                                    <label htmlFor='text1'>Change description</label>
                                                    <input type='text' id='text1' name='text1' value={formValues.text1} onChange={changeText} maxLength={15} />
                                                </fieldset>
                                                <button type='submit' onClick={handleTextChange}>
                                                    <i className="fa-solid fa-check"></i>
                                                </button>
                                            </form>
                                        ) : (
                                            <>
                                                <p>{formValues.text1}</p>
                                                <i className="fa-solid fa-pencil" onClick={openModifier}></i>
                                            </>
                                        )}
                                    </div>
                                    <div className='info gap'>
                                        {!openedModif2 ? (
                                            <form>
                                                <fieldset>
                                                    <label htmlFor='text2'>Change description</label>
                                                    <input type='text' id='text2' name='text2' value={formValues.text2} onChange={changeText} maxLength={15} />
                                                </fieldset>
                                                <button type='submit' onClick={handleTextChange2}>
                                                    <i className="fa-solid fa-check"></i>
                                                </button>
                                            </form>
                                        ) : (
                                            <>
                                                <p>{formValues.text2}</p>
                                                <i className="fa-solid fa-pencil" onClick={openModifier2}></i>
                                            </>
                                        )}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
                <section className='second-block'>
                    <div className='amount'>
                        <div className='under-block'>
                            <div className='container'>
                                <div className='first a'>$8.00</div>
                            </div>
                        </div>
                        <div className='under-block'>
                            <div className='container'>
                                <div className='first b'>$8.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='under-block'>
                        <i className="fa-solid fa-chevron-down" onClick={openTransac}></i>
                    </div>
                </section>
            </article>
        </div>
    )
}

export default Transaction;