import { useRef, useState } from 'react';
import Tabela from '../tabelka/Tabela';

function Formularz() {
    const klasaRef = useRef();
    const kierunekRef = useRef();
    const iloscRef = useRef();
    const infoTxtRef = useRef();
    const errorTxtRef = useRef();

    const [records, setRecords] = useState([]);
    const klasaRegex = /^\d[A-Za-z]{2,3}$/;

    function newRecord() {
        if((klasaRef.current.value && kierunekRef.current.value && iloscRef.current.value) != "") {
            if (klasaRegex.test(klasaRef.current.value)) {
                const newEntry = {
                    klasa: klasaRef.current.value,
                    kierunek: kierunekRef.current.value,
                    ilosc: iloscRef.current.value,
                };

                setRecords(curr => [...curr, newEntry]);
                console.log('Dodano rekord:', newEntry);

                errorTxtRef.current.textContent = "";
                infoTxtRef.current.textContent = "Dodano nowy rekord!";
            } else {
                errorTxtRef.current.textContent = "Nieprawidłowy format klasy";
                infoTxtRef.current.textContent = "";
            }
        } else {
            errorTxtRef.current.textContent = "Pola nie mogą być puste!";
            infoTxtRef.current.textContent = "";
        }
    }

    const removeRecord = (indexToRemove) => {
        setRecords(records.filter((_, index) => index !== indexToRemove));
    };

    return (
    <div className="w-full">
        <form className="flex flex-col p-2 w-[30%] mx-auto gap-5">
            <div className="flex flex-col">
                <label className="text-xl uppercase">Identyfikator klasy:</label>
                <input className="border-solid border-2 border-black rounded-md p-1" type="text" name="klasa" placeholder="Wpisz klasę..." ref={klasaRef} />
            </div>

            <div className="flex flex-col">
                <label className="text-xl uppercase">Kierunek:</label>
                <select className="text-lg p-1 rounded-md" name="kierunek" ref={kierunekRef}>
                    <option>Technik analityk</option>
                    <option>Technik Elektronik</option>
                    <option>Technik Elektryk</option>
                    <option>Technik Informatyk</option>
                    <option>Technik Programista</option>
                    <option>Technik Mechatronik</option>
                    <option>Technik Robotyk</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-xl uppercase">Ilość uczniów:</label>
                <input className="border-solid border-2 border-black rounded-md p-1" type="number" name="ilosc" placeholder="20" ref={iloscRef} />
            </div>

            <hr/>

            <div className="flex flex-row gap-2 w-full">
                <button className="bg-blue-600 text-white text-xl rounded-md py-2 hover:bg-blue-500 transition-colors duration-200 ease-in-out w-1/2" onClick={newRecord} type="button">Dodaj</button>
                <button className="bg-red-600 text-white text-xl rounded-md py-2 hover:bg-red-500 transition-colors duration-200 ease-in-out w-1/2" type="reset">Resetuj</button>
            </div>

            <div>
                <h1 id="info-txt" ref={infoTxtRef} className='text-green-700 font-bold text-2xl text-center'></h1>
                <h1 id="error-txt" ref={errorTxtRef} className='text-red-700 font-bold text-2xl text-center'></h1>
            </div>
        </form>

        <Tabela records={records} removeRecord={removeRecord} />
    </div>
    );
}

export default Formularz;
