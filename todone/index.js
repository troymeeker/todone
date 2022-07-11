
const lists = document.querySelectorAll('.list-name')

lists.forEach(li => {
    li.addEventListener('click', (e)=>{
      li.id = 'active-list';
    })
    // li.addEventListener('click', (e)=>{
    //     li.id = null;
    //   })
});

  

