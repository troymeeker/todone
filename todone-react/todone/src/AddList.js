function AddList({handleAddList}){
    return(
        <div>
           <form action="">
                <input 
                type="text"
                className="new-list"
                placeholder="new list name"/>
                <button className="plus-button" onClick={handleAddList}>+</button>
            </form>
        </div>
    )
}

export default AddList