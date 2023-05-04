import React from 'react'

export default function Userdata(props) {
  return (
    <div className='flex justify-center'>
    <div className='text-left'>
          <span className='font-bold'>MovieName</span><br></br>
          <span className='font-bold'>NoofBookedSeat</span><br></br>
          <span className='font-bold'>Total Amount</span><br></br>
          <span className='font-bold'>Tax</span><br></br>
          <span className='font-bold'>Total Payable Amount</span><br></br>
    </div>
    <div>
          <span>{props.movie}</span><br></br>
          <span>{props.noofBookedSeat}</span><br></br>
          <span>{props.totalamount}</span><br></br>
          <span>{(props.totalamount*20)/100} (20% of the movie price)</span><br></br>
          <span>{props.totalamount + ((props.totalamount*20)/100) } Rs.</span><br></br>
    </div>
    </div>
  )
}
