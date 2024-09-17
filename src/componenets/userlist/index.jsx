import './index.css'
import User from '../user'

function Userlist(props ) {
    const {data} = props

    return(
        <div className='userlist' >
        {
            data.length > 0 && data.map(function (value , index) {
                return (
                    <User
                        user={value} key={index}
                    />
                )
            })
        }
        </div>
    )
}

export default Userlist