import React, {useContext} from 'react';
import UserContext from './userContext'

function MoviePage(props) {
  const currentUser = useContext(UserContext);
  console.log("context", currentUser);
  return (
    <div>
      
    </div>
  );
}

export default MoviePage;