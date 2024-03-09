import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import FinancePage from './components/finance/FinancePage'
import FinanceCategories from './components/categories/FinanceCategories'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FinancePage />} />
        <Route path='/financeCategories' element={<FinanceCategories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
