function Person(props)
{
    console.log(props);
    return(
        <div style={{backgroundColor:"skyblue"}}> 
           
             <h1>Name:{props.name}</h1>
            <h1>Email:{props.email}</h1>
            <h1>Phone number:{props.phone}</h1>  


        </div>
    )
}
export default Person;