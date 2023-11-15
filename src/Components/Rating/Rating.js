
import './rating.scss'
import { Box } from '@chakra-ui/react'
function Rating({rating,setRating}) {
    console.log(rating)
    return (
    <Box bg={'#181820'} h={'20%'}>
   <div className="feedback">
    <label className="angry">
        <input type="radio" onClick={()=>setRating(1)} value="1" name="feedback" />
        <div>
            <svg className="eye left">
                <use href="#eye"/>
            </svg>
            <svg className="eye right">
                <use href="#eye"/>
            </svg>
            <svg className="mouth">
                <use href="#mouth"/>
            </svg>
        </div>
    </label>
    <label className="sad">
        <input type="radio" onClick={()=>setRating(2)} value="2" name="feedback" />
        <div>
            <svg className="eye left">
                <use href="#eye"/>
            </svg>
            <svg className="eye right">
                <use href="#eye"/>
            </svg>
            <svg className="mouth">
                <use href="#mouth"/>
            </svg>
        </div>
    </label>
    <label className="ok">
        <input type="radio" onClick={()=>setRating(3)} value="3" name="feedback" />
        <div></div>
    </label>
    <label className="good">
        <input type="radio" value="4" onClick={()=>setRating(4)} name="feedback" checked />
        <div>
            <svg className="eye left">
                <use href="#eye"/>
            </svg>
            <svg className="eye right">
                <use href="#eye"/>
            </svg>
            <svg className="mouth">
                <use href="#mouth"/>
            </svg>
        </div>
    </label>
    <label className="happy">
        <input type="radio" onClick={()=>setRating(5)} value="5" name="feedback" />
        <div>
            <svg className="eye left">
                <use href="#eye"/>
            </svg>
            <svg className="eye right/">
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