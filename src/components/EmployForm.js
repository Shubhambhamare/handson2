import React, {useState} from "react";

const EmployForm = () => {
    const [userDetails, setUserDetails] = useState({
        name:"",
        department:"",
        rating:""
    })

    const [record, setRecord] = useState([])

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        setUserDetails({...userDetails, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setRecord([...record, userDetails])
        console.log(record)

    
    }

    return(
        <div >
            <div ><h1>EMPLOYEE FEEDBACK FORM</h1></div>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label user="name">Name : </label>
                    <input  type="text" name="name" id="name" className="inputfield" value={userDetails.name} onChange={handleInput}/>
                </div>
                <div>
                    <label user="department" >Department : </label>
                    <input  type="text" name="department" id="department" className="inputfield" value={userDetails.department} onChange={handleInput}/>
                </div>
                <div>
                    <label user="rating" >Rating : </label>
                    <input  type="number" name="rating" id="rating" className="inputfield" value={userDetails.rating} onChange={handleInput}/>
                </div>
                <button type="submit" className="submit-btn">Submit</button><br/><br/>
            </form>
            <div className="DbDisplay">
                {
                    record.map((curElement)=>{
                        return(
                            <div className="detailbox">
                                Name : {curElement.name} | Department : {curElement.department} | Rating : {curElement.rating}
                            </div>
                        )
                    })
                }
            </div>
        </div>    
    )
}
export default EmployForm;