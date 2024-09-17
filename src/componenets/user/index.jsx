import Car from '../car/index'
import Address from '../addres'
import './index.css'

 
function User(props) {
    const {firstName,lastName,image,cars,phone,email,address}= props.user
    return (
    
       <div className="user">
            <img src={image} alt="" />
            <div className='names'>
                <strong>{firstName}</strong>
                <strong>{lastName}</strong>
            </div>
            <div className="email">
                <p>{phone}</p>
                <p className='email1'>{email}</p>
            </div>
           
            {
                address.length > 0 && address.map(function (value,index) {
                    return ( 
                    <Address region={value.region} key={index}/>
                )
                })
            }
            {
                cars.length > 0 && cars.map(function (value,index) {
                    return <Car name={value} key={index}/>
                    
                })
            }
       </div>
    )
}

export default User