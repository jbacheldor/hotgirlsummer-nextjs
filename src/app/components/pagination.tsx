import { FormEvent, useEffect, useState } from "react";

type Props = {
    results: number;
    onChangePage: (e: FormEvent<HTMLOptionElement>) => void;
}

const Pagination:React.FC<Props> = ({results, onChangePage}) => {
    const [pageAmount, setPageAmount] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)
    const [nextButton, setNextButton] = useState(false)
    const [prevButton, setPrevButton] = useState(false)

    const changePageAmount = (e: any) => {
        setPageAmount(e.target.value)
        setCurrentPage(1)
    }

    const changePage = (e: any) => {
        if(e.target.innerHTML == "prev") {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    useEffect(()=> {
        setPrevButton(currentPage > 1 ? false : true)
        setNextButton((Math.ceil(results/pageAmount) > currentPage) ? false : true)
    }, [currentPage, pageAmount])

    return (
        <div id="pagination">
            <div id="pagination-left">
                <span>Per Page:{pageAmount}</span>
                <select onChange={(e)=>changePageAmount(e)}>
                    <option disabled={Math.floor(results/1) ? false : true}>1</option>
                    <option disabled={Math.floor(results/2) ? false : true}>2</option>
                    <option disabled={Math.floor(results/5) ? false : true}>5</option>
                    <option disabled={Math.floor(results/10) ? false : true}>10</option>
                </select>
            </div>
            <div id="pagination-right">
                <button disabled={prevButton} onClick={e=>changePage(e)}>prev</button>
                <span>{currentPage}</span>
                <button disabled={nextButton} onClick={e=>changePage(e)}>next</button>
            </div>

        <style jsx>
            {`
                #pagination {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    width: 100%;
                    padding: 5px;
                    background-color: #b7caab;
                    align-items: center;
                    border-radius: 5px;
                    margin: 5px;
                }
                button {
                    margin: 0 5px;
                }
            `}
        </style>
        </div>
    )
}

export default Pagination;