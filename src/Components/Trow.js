import React from 'react';
import Td from './Td';

export default function Trow(props) {

  const valueHandler = (row, obj)=>
  {
    if(row>=1 && row <=3)
    {
      props.setNoofBookedSeat(props.noofBookedSeat + 1);
      props.setTotalamount(props.totalamount + 300);
    }
    else
    {
      props.setNoofBookedSeat(props.noofBookedSeat + 1);
      props.setTotalamount(props.totalamount + 300 + ((row-3)*50));
    }

  }

  return (
    <>
        {props.data.map((obj,i) =>
        {
            return (<Td  data={obj} key={i} valueHandler={valueHandler}></Td>)
        })}
    </>
  )
}
