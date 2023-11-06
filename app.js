    const inputBox = document.querySelector("#input-box");
    const listContainer = document.querySelector("#list-container");



    let taskAdd =()=>{
        if(inputBox.value === ''){
            alert('You must write somthing!')
        }else{
            let li = document.createElement('li')
            li.innerHTML = inputBox.value;
            listContainer.appendChild(li)
            let span = document.createElement('span');
            span.innerHTML = '\u00d7'
            li.appendChild(span)
        }
        inputBox.value = ''
        userDataSave()
    }

    listContainer.addEventListener('click',(e)=>{
         if (e.target.tagName === 'LI') {
             e.target.classList.toggle('check')
             userDataSave()
         }
         else if (e.target.tagName === 'SPAN') {
             e.target.parentElement.remove()
             userDataSave();
         }
    },false)

    let userDataSave=()=>{
        localStorage.setItem('data',listContainer.innerHTML)
    }

    let userTaskShow = ()=>{
        listContainer.innerHTML = localStorage.getItem("data")
    }

    userTaskShow();