import '../styles/TitleRow.css'

export default function TitleRow(){
    return (
        <>
            <div className="title-row">
                <div className="sheets">
                    <div className="orders sheets-childs">
                        All Orders
                    </div>
                    <div className="pending sheets-childs">
                        Pending
                    </div>
                    <div className="recieved sheets-childs">
                        Received
                    </div>
                    <div className="arrived sheets-childs">
                        Arrived
                    </div>
                    <div className="add-new sheets-childs">

                    </div>
                </div>
            </div>
        </>
    )
}