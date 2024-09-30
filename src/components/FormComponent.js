import './FormComponent.css'
import { useEffect, useState } from 'react'

const FormComponent = (props) => {

    const [name, setName] = useState('')
    const [cost, setCost] = useState(0)
    const [formValid, setFormValid] = useState(false)

    const inputName = event => setName(event.target.value)
    const inputCost = event => setCost(event.target.value)

    const saveItem = event => {
        event.preventDefault()

        const itemData = {
            name: name,
            cost: Number(cost)
        }

        props.onAddItem(itemData)
        setName('')
        setCost(0)
        setFormValid(false)

    }

    useEffect(() => {
        const checkData = name.trim().length>0 && cost !== 0 && cost !== ''
        setFormValid(checkData)
    },[name,cost]) 

    return (
        <div className='container-form'>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" placeholder="ระบุชื่อรายการ" onChange={inputName} value={name}></input>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" placeholder="ระบุจำนวนเงิน" onChange={inputCost} value={cost}></input>
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent