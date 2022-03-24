// add code snippets from README
let state ;

function reducer(state= { count: 0 }, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action){
    state=reducer(state, action)
    render()
}

function render(){
    const app=document.querySelector('#container')
    app.textContent=state.count
}

const button=document.querySelector('#button')
button.addEventListener("click", ()=>{
    dispatch({type: 'counter/increment'})})

dispatch({type: '@@INIT'})
console.log("body", state)
