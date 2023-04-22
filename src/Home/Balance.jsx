import { useEffect, useRef, useState } from "react"

import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

function Balance({money}) {

  const permMoney = useRef("0"); 

    if(money != undefined){
      permMoney.current.value = money?.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
 

  return (
    <div className="home-balance">
        <span>
            Balance
        </span>
        
        <span ref={permMoney}>
          {permMoney.current.value || <Skeleton height={"20px"} width={"150px"} opacity={"0.1"} marginTop={"19px"}/>}
        </span>
    </div>
  )
}

export default Balance