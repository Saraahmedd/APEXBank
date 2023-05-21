import logo from './imgs/logo.svg';
import BankAccountTransactionsScreen from './screens/BankAccountTransactionsScreen';
import BankAccountsScreen from './screens/BankAccountsScreen';
import BillsScreen from './screens/BillsScreen';
import CreditCardApplicationScreen from './screens/CreditCardApplicationScreen';
import CreditCardScreen from './screens/CreditCardScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import LoanApplicationScree from './screens/LoanApplicationScree';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom'
import SignUpScreen from './screens/SignUpScreen';
import TransferMoneyScreen from './screens/TransferMoneyScreen';
import LoansScreen from './screens/LoansScreen';
import LoanScreen from './screens/loanScreen';

function App() {
   
  return (
    
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen/>}> </Route>
         <Route path="/login" element={<LoginScreen/>}> </Route>
         <Route path="/bankAccount" element={<BankAccountsScreen/>}> </Route>
         <Route path="/bankAccount/transaction" element={<BankAccountTransactionsScreen/>}> </Route>
         <Route path="/bills" element={<BillsScreen/>}> </Route>
         <Route path="/creditCard" element={<CreditCardScreen/>}> </Route>
         <Route path="/creditCardApplication" element={<CreditCardApplicationScreen/>}> </Route>
         <Route path="/loanApplication" element={<LoanApplicationScree/>}> </Route>
         <Route path="/register" element={<SignUpScreen/>}> </Route>
         <Route path="/bankTransfer" element={<TransferMoneyScreen/>}> </Route>
         <Route path="/loans" element={<LoansScreen/>}> </Route>
         <Route path="/loan" element={<LoanScreen></LoanScreen>}></Route>
            
         
      </Routes>
    </Router>
    </>
  );
}

export default App;
