import Item from "./Item"
import './Transaction.css'

const Transaction = (props) => {
    const {data} = props
    return (
        <div>
            <ul>
                {data.map((e,i) => <Item {...e} key={i}/>)}
            </ul>
        </div>
    )
}

export default Transaction