import React, {useEffect, useState} from "react";

import useResizeObserver from '@react-hook/resize-observer'

const useSize = (target: any) => {
    const [size, setSize] = React.useState()

    React.useLayoutEffect(() => {
        setSize(target.current.getBoundingClientRect())
    }, [target])

    // Where the magic happens
    useResizeObserver(target, (entry: any) => setSize(entry.contentRect))
    return size
}

export const Pagination: React.FC<{ onPaginate: Function | undefined, totalPage: number}> = (props): JSX.Element => {

    const {onPaginate, totalPage = 1} = props;

    const [currentPage, setCurrentPage] = useState<number>(1);

    const [paginateBarLength] = useState<number>(7)

    const target = React.useRef(null)
    const size = useSize(target)

    useEffect(()=>{
        console.log(size)
    }, [size])

    useEffect(() => {
        if (typeof onPaginate === 'function') {
            onPaginate(currentPage);
        }
    }, [currentPage, onPaginate])

    const goToNextPage = (): void => {
        if(currentPage < totalPage){
            setCurrentPage(page => page + 1);
        }
    }

    const goToPreviousPage = (): void => {
        if(currentPage > 1){
            setCurrentPage(page => page - 1);
        }
    }

    const changePage = (event: any): void => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6" ref={target} >
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-end">
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <div onClick={goToPreviousPage}
                           className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Previous</span>

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" />
                            </svg>
                        </div>

                        {
                            Array.from({ length: totalPage }).map((_, index)=> {
                                const page = index + 1;

                                const className = page === currentPage ?
                                    "z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium cursor-pointer" :
                                    "bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium cursor-pointer";

                                console.log(Math.floor(currentPage / 3))

                                if(page <  currentPage - currentPage % Math.floor(paginateBarLength / 2) && page < totalPage - paginateBarLength ){
                                    return  null;
                                }


                                return (
                                    <div aria-current="page"
                                         onClick={changePage}
                                         key={page.toString()}
                                         className={className}>
                                        { page }
                                    </div>
                                );
                            })
                        }

                        <div onClick={goToNextPage}
                           className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 aria-hidden="true">
                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                            </svg>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};
