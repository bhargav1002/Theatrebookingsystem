import React,{useEffect, useState} from 'react';
import Tdata from './Tdata';

export default function Td(props) {

    const [cell, setCell] = useState([]);
    let alreadybooked = props.data.AlreadyBooked;
    const [booked, setbooked] = useState([]);
    let row= props.data.row;

    const valueHandler = (obj) =>
    {
        props.valueHandler(row,obj);
    }

    useEffect(() =>
    {
        setCell([]);
        for(let i=props.data.Start;i<=props.data.End;i++)
        {
            setCell((prev) => [...prev,i]);
            if(alreadybooked.includes(i))
            {
                setbooked((prev) => [...prev,1]);
            }else{
                setbooked((prev) => [...prev,0]);
            }
        }
    },[props.data,alreadybooked]);



  return (
      <tr>
        {cell.map((obj,i) =>
        {
            return (<Tdata obj={obj} key={i} alreadybooked={alreadybooked} i={i} booked={booked} valueHandler={valueHandler}></Tdata>)
        })}
      </tr>
  )
}
