const initialState = [
    { title: 'Javascript: The Good Parts', pages:101},
    { title: 'Harry Potter', pages:103},
    { title: 'The Dark Tower', pages:105},
    { title: 'Eloquent Ruby', pages:107}
   ];


export default function (state = initialState, action){
  switch (action.type){
    case 'ADD_PAGE':
      let title = action.payload.title
      var entry;
      for (var i = 0; i < state.length; i++){
        if (title === state[i].title){
          entry = {title: state[i].title, pages: state[i].pages + 1}
          var newState = state.slice(0, i).concat(entry, state.slice(i+1))
          console.log(newState); 

          // the reason this isn't updating right away is that the element still has the old object "book" passed in as it's prop. 
          // you'd have to refactor so that instead of an array, initialState is a map of objects with unique properties. 
        }
      }
      return newState
    default: 
      return state;  
  }
}
