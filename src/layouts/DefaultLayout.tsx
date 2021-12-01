import React, {ReactChild, ReactChildren} from "react";
import Header from '../components/Header'

interface AuxProps {
    children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const DefaultLayout = ({children}: AuxProps) => {

    return (
        <div style={styles.container}>
            <Header />
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