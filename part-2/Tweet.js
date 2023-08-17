const Tweet = (props) => {
    return(
        <ul>
            <li>Username: {props.username}</li>
            <li>User Name: {props.name}</li>
             <li>Date of Tweet: {props.date}</li>
           <li>Message: {props.message}</li> 
        </ul>
 );
};