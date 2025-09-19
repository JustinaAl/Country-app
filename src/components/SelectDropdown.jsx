import { useDispatch } from "react-redux";

const SelectDropdown = ({options, value, setValue, id}) => {

    const dispatch = useDispatch();

    return(
        <select id={id} value={value} onChange={(e)=> dispatch(setValue(e.target.value))}>
            {options.map((option) => <option value={option} key={option}>{option}</option>)}
        </select>
    )
}

export default SelectDropdown;