function ListForm({handleAddnewItem}){
    return(
        <div>
             <form action="">
                <input 
                  type="text"
                  className="new-list"
                  placeholder="new task"/>
                <button className="plus-button" onClick={handleAddnewItem}>+</button>
            </form>
        </div>
    )
}

export default ListForm;