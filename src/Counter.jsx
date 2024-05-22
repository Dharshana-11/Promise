import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[counter,set_counter]=useState(0); //set_counter used for setting value of counter
    useEffect(()=>{
        const Increment=(()=>{
        let count=0;
        const interval_id=setInterval(()=>{
            count+=1; //incremented by 1
            set_counter(count);
        }, 1000) //count incremented every 2 seconds
        setTimeout(()=>
        {
            clearInterval(interval_id); //clears the interval using interval_id
            set_counter(0); //value reset to 0
            Increment(); //function called again once value is reset to 0

        },4000) //clears the interval after 4 seconds

        // return()=>clearInterval(interval_id) //cleanup function
    })
    Increment();

    },[])
  return (
    <div style={{margin:"50px"}}>
        <h3>Using seTimeout and setInterval for incrementing and clearing counter variable</h3>
        <p >Count: {counter}</p>
    </div>
  )
}

export default Counter;