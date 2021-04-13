import React from 'react'

const Bottomwave = ({ classes }) => {
    return (
        <svg style={{ position: "fixed", bottom: "0", maxWidth: "100%", zIndex: "-1" }} className={classes} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" > <path fill="#ff9642" fillOpacity="1" d="M0,288L1440,160L1440,320L0,320Z"></path></svg>
    )
}

export default Bottomwave
