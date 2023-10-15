import React,{useState} from "react";
import './Navbar.css';

function Navbar({onValueChange}){
    const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    onValueChange(e.target.value);
  };

    return(
        <>
            <div className="navbar">
                <div className="container">
                    <select value={selectedOption} onChange={handleOptionChange}>
                        <option value="">Choose</option>
                        <option value="Status">Status</option>
                        <option value="Priority">Priority</option>
                        <option value="User">User</option>
                    </select>
                    </div>
            </div>
        </>
    );
}
export default Navbar;