import React, {useContext} from 'react';
import UserContext from './userContext'

function MovieRow(props) {
  const currentUser = useContext(UserContext);
  console.log("context", currentUser);

  return (
    <div>
      Movie Row {UserContext.currentUser ? UserContext.currentUser.name : ''}
    </div>
  );
}

export default MovieRow;