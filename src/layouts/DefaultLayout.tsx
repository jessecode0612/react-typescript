import React, {ReactChild, ReactChildren} from "react";

interface AuxProps {
    children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const DefaultLayout = ({children}: AuxProps) => {

    return (
        <div style={styles.container}>
            {children}
        </div>
    )
}

export default DefaultLayout;

const styles = {
    container:{
        width: '100%',
        height: '100%',
        minHeight:'100vh'
    }
}