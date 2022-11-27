import React from "react"

export const getStaticProps = () => {
    return{
        props : {footerstatus : true}
    }
}

const Library = (props) => {
    return(
        <div>
            <h2>This is Library Page</h2>
        </div>
    )
}

export default Library