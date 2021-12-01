import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import {Link} from 'react-router-dom'

export const HomePage = () => {

    return (
        <DefaultLayout>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-3'}>
                        <div className={'card'}>
                            <Link to={'/recipes'} >
                                <h4>
                                    Fetch and list products
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default HomePage;