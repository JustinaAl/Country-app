import { useDispatch } from "react-redux";

const SelectDropdown = ({options, value, setValue}) => {

    const dispatch = useDispatch();

    return(
        <select value={value} onChange={(e)=> dispatch(setValue(e.target.value))}>
            {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
    )
}

export default SelectDropdown;