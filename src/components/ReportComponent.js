import dataContext from "../data/DataContext"
import { useContext } from "react"
import './ReportComponent.css'

const ReportComponent = () => {

    const {income, expense} = useContext(dataContext)
    const formatNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    
    return (
        <div className="main-report">
            <h4>ยอดคงเหลือ (บาท)</h4>
            <h1>{formatNumber(income+expense)}</h1>
            <div className="report-container">
                <div>
                    <h4>รายรับ</h4>
                    <p className="report plus">฿{formatNumber(income)}</p>
                </div>
                <div>
                    <h4>รายจ่าย</h4>
                    <p className="report minus">฿{formatNumber(expense)}</p>
                </div>
            </div>
        </div>
    )
}

export default ReportComponent