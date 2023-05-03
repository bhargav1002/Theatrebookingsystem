import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Trow from './Trow';
import Userdata from './Userdata';

export default function Table() {

    const [data, setData] = useState([]);
    const [rows, setRows] = useState([]);
    const [movie, setMovie] = useState('');
    const [basicprice, setBasicprice] = useState('');
    const [noofBookedSeat, setNoofBookedSeat] = useState(0);
    const [totalamount, setTotalamount] = useState(0);


    useEffect(() =>
    {
        const f = async () =>
        {
            const response = await axios.get('Movies.json');
            setData([response.data]);
            setMovie(response.data.MovieName);
            setBasicprice(response.data.BasicPrice);
        } 
        f()
    },[]);

    useEffect(() =>
    {
        for(let obj of data)
        {
            setRows([obj.Rows]);
        }
    },[data])

  return (
    <div>
        <table className='border border-2'>
            <tbody>
                {rows.map((obj,i)=>
                {
                    return (<Trow data={obj} key={i} noofBookedSeat={noofBookedSeat} setNoofBookedSeat={setNoofBookedSeat} setTotalamount={setTotalamount}  basicprice={basicprice} totalamount={totalamount}></Trow>)
                })}
            </tbody>    
        </table>
        <br></br>
        <br></br>
        <br></br>
          <Userdata movie={movie} noofBookedSeat={noofBookedSeat} totalamount={totalamount}></Userdata>
    </div>
  )
}
