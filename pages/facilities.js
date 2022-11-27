import React from "react";
import Link from "next/link";

const Facilities = () => {
    return(
        <div>
            <h2>This is Facilities Page</h2>
            <ul>
                <li><Link href='/facilities/lab'>Lab</Link></li>
                <li><Link href='/facilities/playground'>Playground</Link></li>
                <li><Link href='/facilities/library'>Library</Link></li>
                <li><Link href='/facilities/sports'>Sports</Link></li>
            </ul>
        </div>
    )
}

export default Facilities