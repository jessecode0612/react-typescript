import React from "react"

import DefaultLayout from "../../layouts/DefaultLayout";
import Resizer from '../../components/Resizer'

export default function ResizablePage () {

    return (
        <DefaultLayout>
            <div className="container">
              <Resizer />
            </div>
        </DefaultLayout>
    );
}
