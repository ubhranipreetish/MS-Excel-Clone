import '../styles/Row.css'

export default function Row(){
    return (
        <>
            <div className='row'>
                <div className="toolbar">
                    <div className="toolbar-text">
                        <span>Tool bar</span>
                        <img src='/Images/double_arrow.png' />
                    </div>
                    <div className="straight-line">

                    </div>
                    <div className="table-controls">
                        <div className="eye control-childs">
                            <img src='/Images/eye.png' />
                            <span>Hide fields</span>
                        </div>
                        <div className="sort control-childs">
                            <img src='/Images/sort.png' />
                            <span>Sort</span>
                        </div>
                        <div className="filter control-childs">
                            <img src='/Images/filter.png' />
                            <span>Filter</span>
                        </div>
                        <div className="cell-view control-childs">
                            <img src='/Images/cell_view.png' />
                            <span>Cell View</span>
                        </div>
                    </div>
                </div>

                <div className="row-right">
                    <div className="actions">
                        <div className="import actions-childs">
                            <img src='/Images/download.png' />
                            <span>Import</span>
                        </div>
                        <div className="export actions-childs">
                            <img src='/Images/upload.png' />
                            <span>Export</span>
                        </div>
                        <div className="share actions-childs">
                            <img src='/Images/share.png' />
                            <span>Share</span>
                        </div>
                    </div>

                    <div className="new-action">
                        <img src='/Images/flow.png' />
                        <span>New Action</span>
                    </div>
                </div>
            </div>
        </>
    )
}