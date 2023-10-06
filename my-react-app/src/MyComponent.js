import React,{useState} from 'react';
import './MyComponent.css'
const MyComponent = () =>{
    const [count,setCount] = useState(0);
    const handleClick = () =>{
        setCount(count+1);
    }
return (
    <div className='my-component'>
<p> Count : {count} </p>
<button onClick={handleClick}>Increment</button>
  <h1>This is my custom component!</h1>
    </div>
);

}
export default MyComponent;