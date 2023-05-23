// import logo from './imgs/logo.svg';
import BankAccountTransactionsScreen from "./screens/client//BankAccountTransactionsScreen";
import BankAccountsScreen from "./screens/client/BankAccountsScreen";
import BillsScreen from "./screens/client/BillsScreen";
import CreditCardApplicationScreen from "./screens/client/CreditCardApplicationScreen";
import CreditCardScreen from "./screens/client/CreditCardScreen";
import HomeScreen from "./screens/client/HomeScreen";
import LoginScreen from "./screens/client/LoginScreen";
import LoanApplicationScree from "./screens/client/LoanApplicationScreen";
import "./styles/App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpScreen from "./screens/client/SignUpScreen";
import TransferMoneyScreen from "./screens/client/TransferMoneyScreen";
import LoansScreen from "./screens/client/LoansScreen";
import LoanScreen from "./screens/client/loanScreen";
import BankerLoginScreen from "./screens/banker/BankerLoginScreen";
import BankerHomeScreen from "./screens/banker/BankerHomeScreen";
import ViewClientDataScreen from "./screens/banker/ViewClientDataScreen";
import ViewClientTransactionsScreen from "./screens/banker/ViewCllientTransactionsScreen";
import ViewCreditCardReports from "./screens/banker/ViewCreditCardReports";
import ViewCreditCardRequests from "./screens/banker/ViewCreditCardRequests";
import ViewLoanRequestsScreen from "./screens/banker/viewLoanRequestsScreen";
import ViewSingleCCRequestScreen from "./screens/banker/ViewSingleCCRequestScreen";
import ViewSingleLoanRequest from "./screens/banker/ViewSingleLoanRequest";
import AdminHomeScreen from "./screens/admin/AdminHomeScreen";
import AdminLoginScreen from "./screens/admin/AdminLoginScreen";
import AdminTechnicalIssuesScreen from "./screens/admin/AdminTechnicalIssuesScreen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Client */}
          <Route path="/" element={<HomeScreen />}>
            {" "}
          </Route>
          <Route path="/login" element={<LoginScreen />}>
            {" "}
          </Route>
          <Route path="/bankAccount" element={<BankAccountsScreen />}>
            {" "}
          </Route>
          <Route
            path="/bankAccount/transaction"
            element={<BankAccountTransactionsScreen />}
          >
            {" "}
          </Route>
          <Route path="/bills" element={<BillsScreen />}>
            {" "}
          </Route>
          <Route path="/creditCard" element={<CreditCardScreen />}>
            {" "}
          </Route>
          <Route
            path="/creditCardApplication"
            element={<CreditCardApplicationScreen />}
          >
            {" "}
          </Route>
          <Route path="/loanApplication" element={<LoanApplicationScree />}>
            {" "}
          </Route>
          <Route path="/register" element={<SignUpScreen />}>
            {" "}
          </Route>
          <Route path="/bankTransfer" element={<TransferMoneyScreen />}>
            {" "}
          </Route>
          <Route path="/loans" element={<LoansScreen />}>
            {" "}
          </Route>
          <Route path="/loan" element={<LoanScreen></LoanScreen>}></Route>

          {/* Banker */}
          <Route
            path="/banker/login"
            element={<BankerLoginScreen></BankerLoginScreen>}
          ></Route>
          <Route
            path="/banker/homescreen"
            element={<BankerHomeScreen></BankerHomeScreen>}
          ></Route>
          <Route
            path="/banker/viewclientdata"
            element={<ViewClientDataScreen></ViewClientDataScreen>}
          ></Route>
          <Route
            path="/banker/viewclienttransactions"
            element={
              <ViewClientTransactionsScreen></ViewClientTransactionsScreen>
            }
          ></Route>
          <Route
            path="/banker/viewcreditcardreports"
            element={<ViewCreditCardReports></ViewCreditCardReports>}
          ></Route>
          <Route
            path="/banker/viewcreditcardrequests"
            element={<ViewCreditCardRequests></ViewCreditCardRequests>}
          ></Route>
          <Route
            path="/banker/viewloanrequests"
            element={<ViewLoanRequestsScreen></ViewLoanRequestsScreen>}
          ></Route>
          <Route
            path="/banker/viewsingleCC"
            element={<ViewSingleCCRequestScreen></ViewSingleCCRequestScreen>}
          ></Route>
          <Route
            path="/banker/viewsingleloan"
            element={<ViewSingleLoanRequest></ViewSingleLoanRequest>}
          ></Route>

          {/* Admin */}

          <Route
            path="/admin/homescreen"
            element={<AdminHomeScreen></AdminHomeScreen>}
          ></Route>
          <Route
            path="/admin/login"
            element={<AdminLoginScreen></AdminLoginScreen>}
          ></Route>
          <Route
            path="/admin/technicalissues"
            element={<AdminTechnicalIssuesScreen></AdminTechnicalIssuesScreen>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;