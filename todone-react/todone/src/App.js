
import './App.css';

function App() {
  return (
    <div class="body">
    <h1 class="page-title">ToDone</h1>
    

    <div class="left">
        <div class="list-container">
            <div class="task-list-title">
                <h3>My Lists</h3>
            </div>
            <ul class="task-lists" >
                <li class="list-name">Grocery</li>
                <li class="list-name">Home Chores</li>
                <li class="list-name">Long Term</li><br/>
            </ul>
            <form action="">
                <input 
                type="text"
                class="new-list"
                placeholder="new list name"/>
                <button class="plus-button">+</button>
            </form>
        </div>
    </div>

    <div class="right">
        <div class="current-list">
            <div class="current-header">
            <h2>Current List</h2>
            <p class="task-count">3 Items remaining</p>
            </div>

            <div class="list-tasks">
            
                <input type="checkbox" id="task-1"/>
                <label for="task-1">Bread</label>
                <input type="checkbox" id="task-2"/>
                <label for="task-2">Apples</label>
                <input type="checkbox" id="task3"/>
                <label for="task-3">Beer</label>
            </div> 
                <form action="">
                    <input 
                        type="text"
                        class="new-list"
                        placeholder="enter new task"/>
                    <button class="plus-button">+</button>
                </form>
            
            <button>clear complete items</button>
            <button>delete list</button>
        </div>  
    </div>
    
</div>
  );
}

export default App;
