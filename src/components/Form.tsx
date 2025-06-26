import { useState } from "react";

function Form() {

    const [inputValue, setInputValue] = useState('');
    const [tableData, setTableData] = useState<{ multiplier: number; result: number }[]>([]);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const num = Number(inputValue);

        if (!isNaN(num) && inputValue.trim() !== '') {
            const newTable = [];

            for (let i = 1; i <= 10; i++) {
                newTable.push({
                    multiplier: i,
                    result: i * num,
                });
            }

            setTableData(newTable);
        } else {
            setTableData([]);
        }
    };
    ;


    return (<>
        <form onSubmit={handleSubmit}>
            <label className="form-label">Enter Number</label>
            <input type="number" className="form-control" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="123" />
            <button type="submit" className="btn btn-success mt-4">Submit</button>
        </form>


        {tableData.length > 0 && (
            <table className="table mt-4 table-bordered">
                <thead>
                    <tr>
                        <th>Expression</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                        <tr key={index}>
                            <td>{`${row.multiplier} x ${inputValue} = ${row.result}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )}
    </>
    )
}
export default Form