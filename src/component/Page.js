import React, {useState}from 'react'


export default function Page(props) {
    const [name,setName]=useState('');
    const [lname,setLName]=useState('');
    const [email,setEmail]=useState('');
    const [age,setAge]=useState('');
    const [height,setHeight]=useState('');
    const [address,setAddress]=useState('');
    const [city,setCity]=useState('');
    const [country,setCountry]=useState('');

    const handlename = (event) =>{
        let a=event.target.value;
        setName(a);
    }
     const handlelname = (event) =>{
        let a=event.target.value;
        setLName(a);
    }

     const handleemail = (event) =>{
        let a=event.target.value;
        setEmail(a);
    }
      const handleage = (event) =>{
        let a=event.target.value;
        setAge(a);
    }

    const handleheight = (event) =>{
        let a=event.target.value;
        setHeight(a);
    }
     const handleaddress = (event) =>{
        let a=event.target.value;
        setAddress(a);
    }

    const handlecity = (event) =>{
        let a=event.target.value;
        setCity(a);
    }

     const handlecountry= (event) =>{
        let a=event.target.value;
        setCountry(a);
    }

    
    
    
    


  return (

<>

<div className="container">
    <div className="stepwizard">
        <div className="stepwizard-row setup-panel">
            <div className="stepwizard-step col-xs-3"> 
                <a href="#step-1" type="button" className="btn btn-success btn-circle">1</a>
                <p><small>User InFormation</small></p>
            </div>
            <div className="stepwizard-step col-xs-3"> 
                <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
                <p><small>Address Detail</small></p>
            </div>
            <div className="stepwizard-step col-xs-3"> 
                <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                <p><small>Thank You</small></p>
            </div>
        </div>
    </div>
    
    <form role="form">
        <div className="panel panel-primary setup-content" id="step-1">
            <div className="panel-heading">
                 <h3 className="panel-title">{props.firstform}</h3>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="control-label">First Name</label>
                    <input maxlength="100" value={name} onChange={handlename} type="text" required="required" className="form-control" />
                </div>
                <div className="form-group">
                    <label className="control-label">Last Name</label>
                    <input maxlength="100"  value={lname} onChange={handlelname} type="text" required="required" className="form-control" placeholder="Enter Last Name" />
                </div>

        

                 <div className="form-group">
                    <label className="control-label">Email</label>
                    <input maxlength="100"  value={email} onChange={handleemail} type="text" required="required" className="form-control" placeholder="Enter Email" />
                </div>
                 <div className="form-group">
                    <label className="control-label">Age</label>
                    <input maxlength="100" value={age} onChange={handleage} type="text" required="required" className="form-control" placeholder="Enter Age" />
                </div>
                 <div className="form-group">
                    <label className="control-label">Height</label>
                    <input maxlength="100"  value={height} onChange={handleheight} type="text" required="required" className="form-control" placeholder="Enter Height" />
                </div>



                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
            </div>
        </div>
        
        <div className="panel panel-primary setup-content" id="step-2">
            <div className="panel-heading">
                 <h3 className="panel-title">{props.secondform}</h3>
            </div>
            <div className="panel-body">
                <div className="form-group">
                    <label className="control-label">Address Line 1</label>
                    <input maxlength="200"  value={address} onChange={handleaddress} type="text" required="required" className="form-control" placeholder="Enter Company Name" />
                </div>
                <div className="form-group">
                    <label className="control-label"> City</label>
                    <input maxlength="200" value={city} onChange={handlecity} type="text" required="required" className="form-control" placeholder="Enter City" />
                </div>
                 <div className="form-group">
                    <label className="control-label"> Country</label>
                    <input maxlength="200" value={country} onChange={handlecountry}  type="text" required="required" className="form-control" placeholder="Enter Country" />
                </div>
                <button className="btn btn-primary nextBtn pull-right" type="button">Next</button>
            </div>
        </div>
        
        <div className="panel panel-primary setup-content" id="step-3">
            <div className="panel-heading">
                 <h3 className="panel-title">Thank YOU</h3>
            </div>
            <div className="panel-body">

            <h2 color="green"> DATA ADDED SUCCESSFULLY</h2>
                 <table >
   <tr>
   </tr>
   <tr>
    <td>First Name</td>
    <td>{name}</td>
   </tr>
   <tr>
    <td>Last Name</td>
    <td>{lname}</td>
   </tr>

    <tr>
    <td>Email</td>
    <td>{email}</td>
   </tr>
    <tr>
    <td>Age</td>
    <td>{age}</td>
   </tr>
    <tr>
    <td>Height</td>
    <td>{height}</td>
   </tr>
    <tr>
    <td>Address</td>
    <td>{address}</td>
   </tr>
    <tr>
    <td>City</td>
    <td>{city}</td>
   </tr>
    <tr>
    <td>Country</td>
    <td>{country}</td>
   </tr>
  </table>

               
            </div>
        </div>
        
       
    </form>
</div>

</>

    )

    }