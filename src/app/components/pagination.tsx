

const Pagination:React.FC = () => {

    return (
        <div id="pagination">
            <div id="pagination-left">
                <span>Per Page: 50</span>
            </div>
            <div id="pagination-right">
                <button>prev</button>
                <span>1</span>
                <button>next</button>
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
            `}
        </style>
        </div>
    )
}

export default Pagination;