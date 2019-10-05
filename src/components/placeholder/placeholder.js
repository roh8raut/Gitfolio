import React from 'react';
import Skeleton , {SkeletonTheme} from 'react-loading-skeleton';


const Placeholder = (props) =>  {
    // console.log("width", props.width);
    
        return (                                 
                <SkeletonTheme color="#202020" highlightColor="grey">
                   <Skeleton width={props.width + "px"} height={props.height + "px"} circle={props.circle} duration={props.duration} count={props.count}/>
                </SkeletonTheme>
        )
}

export default Placeholder;
