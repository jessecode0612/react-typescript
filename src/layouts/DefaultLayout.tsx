import React, {ReactChild, ReactChildren} from "react";
import Header from '../components/Header'

interface AuxProps {
    children: ReactChild | ReactChildren | ReactChild[] | ReactChildren[];
}

const DefaultLayout = ({children}: AuxProps) => {

    return (
        <div className={'h-100 flex'}>
            <Header />
            <div
                style={{
                    backgroundColor:'#f7f7f7',
                    minHeight:'calc(100% - 70px)'
                }}
            >
                <hr/>
                {children}
            </div>
        </div>
    )
}

export default DefaultLayout;
