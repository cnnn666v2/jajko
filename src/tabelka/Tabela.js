function Tabela({records, removeRecord}) {
  return (
    <table className="border-collapse border border-black p-2 w-[30%] mx-auto">

        <thead>
            <tr>
                <th className="border border-black">ID klasy</th>
                <th className="border border-black">Kierunek</th>
                <th className="border border-black">Ilość uczniów</th>
                <th className="border border-black">Akcja</th>
            </tr>
        </thead>

        <tbody>
            {records.map((item, index) => (
                <tr key={{index}} className="text-center">
                    <td className="border border-black">{item.klasa}</td>
                    <td className="border border-black">{item.kierunek}</td>
                    <td className="border border-black">{item.ilosc}</td>
                    <td className="border border-black py-1"><button onClick={() => removeRecord(index)} type="button" className="bg-red-600 px-2 rounded-md text-white font-bold hover:bg-red-500 transition-colors duration-200 ease-in-out">Usuń</button></td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default Tabela;
