import React,{useState} from 'react';


export default function Tdata({obj,alreadybooked,booked,i, valueHandler}) {

    const [green, setGreen] = useState(false);

    const clickHandler = (obj) => {
        if (!alreadybooked.includes(obj)) {
            if (green === true)
            {
              return;
            }
            setGreen(true);
            valueHandler(obj);
        }
    }

  return (
    <>
          <td id={obj} key={obj} style={{ backgroundColor: booked[i] === 1 ? "lightgrey" : (green ? "green" : "white") }} onClick={() => clickHandler(obj)} className='border border-2'>{obj}</td>
    </>
  )
}
