import React, { useState } from 'react'
import './rating.scss'
import { Box } from '@chakra-ui/react'
function Rating() {
    const [rating,setRating]=useState(0);
    console.log(rating)
    return (
    <Box bg={'#181820'} h={'20%'}>
   <div class="feedback">
    <label class="angry">
        <input type="radio" onClick={()=>setRating(1)} value="1" name="feedback" />
        <div>
            <svg class="eye left">
                <use href="#eye"/>
            </svg>
            <svg class="eye right">
                <use href="#eye"/>
            </svg>
            <svg class="mouth">
                <use href="#mouth"/>
            </svg>
        </div>
    </label>
    <label class="sad">
        <input type="radio" onClick={()=>setRating(2)} value="2" name="feedback" />
        <div>
            <svg class="eye left">
                <use href="#eye"/>
            </svg>
            <svg class="eye right">
                <use href="#eye"/>
            </svg>
            <svg class="mouth">
                <use href="#mouth"/>
            </svg>
        </div>
    </label>
    <label class="ok">
        <input type="radio" onClick={()=>setRating(3)} value="3" name="feedback" />
        <div></div>
    </label>
    <label class="good">
        <input type="radio" value="4" onClick={()=>setRating(4)} name="feedback" checked />
        <div>
            <svg class="eye left">
                <use href="#eye"/>
            </svg>
            <svg class="eye right">
                <use href="#eye"/>
            </svg>
            <svg class="mouth">
                <use href="#mouth"/>
            </svg>
        </div>
    </label>
    <label class="happy">
        <input type="radio" onClick={()=>setRating(5)} value="5" name="feedback" />
        <div>
            <svg class="eye left">
                <use href="#eye"/>
            </svg>
            <svg class="eye right/">
                <use href="#eye"/>
            </svg>
        </div>
    </label>
</div>
        
<svg href="http://www.w3.org/2000/svg" style={{display: 'none'}}>
    <symbol href="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
        <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1"></path>
    </symbol>
    <symbol href="http://www.w3.org/2000/svg" viewBox="0 0 18 7" id="mouth">
        <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5"></path>
    </symbol>
</svg>
    </Box>
  )
};
export default Rating