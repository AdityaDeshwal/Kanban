import React ,{useState, useEffect} from "react";
import SmallNavbar from "./SmallNavbar";
import Card from "./Card";

function Column(props){
    const ticket=props.ticket;
    const query=props.query;
    const ind=props.ind;
    const sortas=props.sortas;
    return (
        <>
        <div className="column">
  {ticket
    ? ticket.map((item, index) => {
        if (
          (sortas === 'Priority' && ind === item.priority) ||
          (sortas === 'Status' && query === item.status) ||
          (sortas === 'User' && props.id === item.userId)
        ) {
          return <Card key={index} object={item} />;
        }
        return null;
      })
    : null}
</div>
        </>
    );
}
export default Column;