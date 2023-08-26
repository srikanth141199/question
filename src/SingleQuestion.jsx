import React, { useState } from 'react'
import {BiPlusCircle,BiMinusCircle} from 'react-icons/bi'

const SingleQuestion = ({question}) => {

    const {id,title,info} = question
    const [infoFlag,setinfoFlag] = useState(false)

    const infoHangler = (infoid) => {
        if(id == infoid){
            setinfoFlag(true);
        }
        else{
            setinfoFlag(false);
        }
    }
  return (
    <div className='single-que-con'>

        <div className='que-btn-con'>
        <h5 className='question'>{title}</h5>
        <button className='infobtn' onClick={() => setinfoFlag(!infoFlag)}>{!infoFlag? <BiPlusCircle /> : <BiMinusCircle/>}</button>
        </div>
        
        
        <p className='info'>{infoFlag && info}</p>
    </div>
  )
}

export default SingleQuestion