import './Item.css'
import PropTypes from 'prop-types'

const Item = (props) => {
    
    const {name, cost} = props
    const status = cost < 0 ? 'expense' : 'income'
    const symbol = cost < 0 ? '-' : '+'
    const formatNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

    return (
        <li className={`item ${status}`}>
            {name} <span>{symbol}{formatNumber(Math.abs(cost))}</span>
        </li>
    )
}

Item.propTypes = {

    name: PropTypes.string.isRequired,
    cost: PropTypes.number.isRequired

}

export default Item