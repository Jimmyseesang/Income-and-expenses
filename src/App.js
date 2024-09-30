import Title from './components/Title'
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent';
import ReportComponent from './components/ReportComponent';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { useState, useEffect } from 'react';
import dataContext from './data/DataContext';

function App() {

    const [items, setItems] = useState([])
    const [reportIncome, setReportIncome] = useState(0)
    const [reportExpense, setReportExpense] = useState(0)

    const onAddNewItem = newItem => {
        setItems(prevItem => {
            return [...prevItem, newItem]
        })
    }

    useEffect(() => {
        const sumFunction = (total, element) => total += element
        const cost = items.map(e => e.cost)
        const income = cost.filter(e => e > 0).reduce(sumFunction, 0)
        const expense = cost.filter(e => e < 0).reduce(sumFunction, 0)

        setReportIncome(income)
        setReportExpense(expense)

    }, [items])


    return (
        <dataContext.Provider value={
            {
                income: reportIncome,
                expense: reportExpense
            }
        }>
            <div>
                <Title />
                <Router>
                    <div>
                        <ul className='horizontal-menu'>
                            <li><Link to='/'>ข้อมูลบัญชี</Link></li>
                            <li><Link to='/insert'>บันทึกข้อมูล</Link></li>
                        </ul>
                        <Routes>
                            <Route path='/' element={<ReportComponent />} />
                            <Route path='/insert' element={
                                <>
                                    <FormComponent onAddItem={onAddNewItem} />
                                    <Transaction data={items} />
                                </>
                            }/>
                        </Routes>
                    </div>
                </Router>
            </div>
        </dataContext.Provider>

    )
}

export default App;
