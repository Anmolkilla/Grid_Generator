document.addEventListener("DOMContentLoaded",()=>{
    
    const grid = document.querySelector(".grid");
    
    //              Row
    
    const rowUnits = document.querySelectorAll(".row-unit");
    const row = document.querySelector(".row");
    const createRowUnit = document.createElement("input");
    createRowUnit.classList.add("row-unit")
    ;
    
    //                  Column
    
    const column = document.querySelector(".column");
    const columnUnits = document.querySelector(".column-unit");
    const createColumnUnit = document.createElement("input");
    createColumnUnit.classList.add("column.unit");
    
    //              inputs
    const rowInput = document.querySelector(".row-input");
    const rowGap = document.querySelector(".row-gap");
    const columnInput = document.querySelector(".column-input");
    const columnGap = document.querySelector(".column-gap");
    //                                              /
    
    rowInput.value=5;
    columnInput.value=5;
    
      
    setInterval( ()=>{
     
    row.innerHTML= "";
    column.innerHTML="";
    
    
    function appending(n,m){
        for(let i=0; i<n; i++){
            row.appendChild(createRowUnit.cloneNode(true));
        }
        for(let i =0;1<m;i++){
            column.appendChild(createColumnUnit.cloneNode(true));
        }
    }
    appending( rowInput.value , columnInput.value );
     
        
        
        
    }, 2000);
    
    
    
    
    
    
    
    
    
    
    
})