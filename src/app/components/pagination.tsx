import { FormEvent, useState } from "react";

type Props = {
    results: number;
    onChangePage: (e: FormEvent<HTMLOptionElement>) => void;
}

const Pagination:React.FC<Props> = ({results, onChangePage}) => {
    const [pageAmount, setPageAmount] = useState(15)
    const [currentPage, setCurrentPage] = useState(1)

    const changePageAmount = (e: any) => {
        setPageAmount(e.target.value)
    }

    const changePage = (e: any) => {
        if(e.target.value == "prev") {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <div id="pagination">
            <div id="pagination-left">
                <span>Per Page:{pageAmount}</span>
                <select>
                    <option onChange={e=>changePageAmount(e)} disabled={Math.floor(results/15) ? false : true}>15</option>
                    <option onChange={e=>changePageAmount(e)} disabled={Math.floor(results/30) ? false : true}>30</option>
                    <option onChange={e=>changePageAmount(e)} disabled={Math.floor(results/50) ? false : true}>50</option>
                </select>
            </div>
            <div id="pagination-right">
                <button disabled={currentPage > 0 ? true : false} onClick={e=>changePage(e)}>prev</button>
                <span>{currentPage}</span>
                <button disabled={(Math.ceil(results/pageAmount) > currentPage) ? false : true} onClick={e=>changePage(e)}>next</button>
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