import { Link } from 'react-router-dom';    

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>sorry</h2>
            <p>That page does not exist</p>
            <Link to="/">Back to Homepage...</Link>
        </div>
     );
}
 
export default NotFound
