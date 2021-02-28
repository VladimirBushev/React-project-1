import React from "react";
import Preloader from "../AppWrapper/Content/Users/Preloader";

const withSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<Preloader isFetching={true}/>}>
            <Component {...props}/>
        </React.Suspense>
    }
}

export default withSuspense