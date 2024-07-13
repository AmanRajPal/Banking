'use client';
import React from 'react'
import CountUp from 'react-countup';


const AnimatedCounter = ({ amount }: {amount : number}) => {
  return (
    <div className="w-full">
        <CountUp
        duration={10.75} 
        decimal=","
        prefix='$'

        end={15154256} />
    </div>
  )
}

export default AnimatedCounter