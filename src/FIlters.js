import {useState} from "react";


export default function Filters ({ handleFilters }) {
    const [filters, setFilters] = useState([]);
    const handleCheckboxes = (e) => {
        if(e.target.id === 'anada' && e.target.checked) {
            setFilters(p => [...p, e.target.value])
        }
        if(e.target.id === 'nyx' && e.target.checked) {
            setFilters(p => [...p, e.target.value])
        }
        if(e.target.id === 'anada' && !e.target.checked) {
            setFilters(filters.filter((item) => {
                return item !== 'pure anada'
            }))
        }
        if(e.target.id === 'nyx' && !e.target.checked) {
            setFilters(filters.filter((item) => {
                return item !== 'nyx'
            }))
        }
    }
    return (
        <div>
            <span>pure anada</span>
            <input id="anada" type="checkbox" value="pure anada" onChange={(e) => handleCheckboxes(e)}/>
            <span>nyx</span>
            <input id="nyx" type="checkbox" value="nyx" onChange={(e) => handleCheckboxes(e)}/>
            <button onClick={() => handleFilters(filters)}>submit</button>
        </div>
    )
}