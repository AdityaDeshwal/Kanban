import React, {useEffect, useState} from "react";

import Navbar from "./Navbar";
import './Kanban.css';
import Column from "./Column"; 
import Card from "./Card"; 
import SmallNavbar from "./SmallNavbar";

function Kanban(){
    const [sortas,setSortas]=useState('');
    const statusCategory=["Urgent","Todo","In progress","Done","Backlog"];
    const priorityCategory=["NoPriority", "Low", "Medium", "High", "Urgent"];

    const handleSortasChange=(value)=>{
        setSortas(value);
    }



    function ApiData() {
        const [data, setData] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
            .then((response) => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
            .then((data) => {
              setData(data);
              setIsLoading(false);
            })
            .catch((error) => {
              setError(error);
              setIsLoading(false);
            });
        }, []);
      
        if(!data)return "error";
        else return data;
      }
    const data=ApiData();
    const ticket=data.tickets;
    const users=data.users;
    return (
        <>
        <Navbar onValueChange={handleSortasChange}/>
        <div className="column-container">
  {sortas === 'Priority' &&
    priorityCategory.map((item, index) => (
      <div className="clmn" key={index}>
        <SmallNavbar object={item} />
        <Column ticket={ticket} query={item} ind={index} sortas={sortas} />
      </div>
    ))}

  {sortas === 'Status' &&
    statusCategory.map((item, index) => (
      <div className="clmn" key={index}>
        <SmallNavbar object={item} />
        <Column ticket={ticket} query={item} ind={index} sortas={sortas} />
      </div>
    ))}

  {sortas === 'User' &&
    users.map((item, index) => (
      <div className="clmn" key={index}>
        <SmallNavbar object={item.name} />
        <Column ticket={ticket} query={item} ind={index} sortas={sortas} id={item.id} users={users} />
      </div>
    ))}
</div>
    </>
    );
}

export default Kanban;