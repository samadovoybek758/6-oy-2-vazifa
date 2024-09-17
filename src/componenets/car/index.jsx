import '../car/index.css'

function Car(props) {
    const {name}=props
    return (
        <div className="car_list">
            <div className="nuqta"></div>
            <span>{name}</span>
        </div>
    )
}

export default Car