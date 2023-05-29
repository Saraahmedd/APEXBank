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
// import LoanScreen from "./screens/client/loanScreen";
import BankerLoginScreen from "./screens/banker/BankerLoginScreen";
import BankerHomeScreen from "./screens/banker/BankerHomeScreen";
import ViewClientDataScreen from "./screens/banker/ViewClientDataScreen";
import ViewClientTransactionsScreen from "./screens/banker/ViewCllientTransactionsScreen";
import ViewReports from "./screens/banker/ViewReports";
import ViewCreditCardDetails from "./screens/banker/ViewCreditCardDetails";
import ViewLoanDataScreen from "./screens/banker/ViewLoanDataScreen";
import ViewSingleCC from "./screens/banker/ViewSingleCC";
import ViewSingleLoan from "./screens/banker/ViewSingleLoan";
import AdminHomeScreen from "./screens/admin/AdminHomeScreen";
import AdminLoginScreen from "./screens/admin/AdminLoginScreen";
import AdminTechnicalIssuesScreen from "./screens/admin/AdminTechnicalIssuesScreen";
import Home from "./screens/client/Home";
import SingleLoanScreen from "./screens/client/SingleLoanScreen";
import SingleCardScreen from "./screens/client/SingleCardScreen";
import AdminPrivacyPolicy from "./screens/admin/AdminPrivacyPolicy";
import AdminTermsAndConditions from "./screens/admin/AdminTermsAndConditions";
import About from "./screens/client/About";
import Contact from "./screens/client/Contact";
import ViewClientsScreen from "./screens/banker/ViewClientsScreen";
import SearchForClient from "./screens/banker/SearchForClient";
import BankerPrivacyPolicy from "./screens/banker/BankerPrivacyPolicy";
import BankerTermsAndConditions from "./screens/banker/BankerTermsAndConditions";
import ViewTransaction from "./screens/banker/ViewTransactions";
import CreateNewAccount from "./screens/admin/CreateNewAccount";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Client */}
          <Route path="/" element={<Home />}>
            {" "}
          </Route>

          <Route path="/contact" element={<Contact />}>
            {" "}
          </Route>
          <Route path="/about" element={<About />}>
            {" "}
          </Route>

          <Route path="/login" element={<LoginScreen />}>
            {" "}
          </Route>
          <Route path="/portal" element={<HomeScreen />}>
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
          <Route path="/loan" element={<SingleLoanScreen />}>
            {" "}
          </Route>
          <Route path="/card" element={<SingleCardScreen />}>
            {" "}
          </Route>
          {/* <Route path="/loan" element={<LoanScreen></LoanScreen>}></Route> */}

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
            path="/banker/viewclients"
            element={<SearchForClient></SearchForClient>}
          ></Route>
          <Route
            path="/banker/viewclientdata/:id"
            element={<ViewClientDataScreen></ViewClientDataScreen>}
          ></Route>
          <Route
            path="/banker/viewclienttransactions"
            element={
              <ViewClientTransactionsScreen></ViewClientTransactionsScreen>
            }
          ></Route>
          <Route
            path="/banker/viewcreditcards/:id"
            element={<ViewCreditCardDetails></ViewCreditCardDetails>}
          ></Route>
          <Route
            path="/banker/viewloans/:id"
            element={<ViewLoanDataScreen></ViewLoanDataScreen>}
          ></Route>
          <Route
            path="/banker/viewreports/:id"
            element={<ViewReports></ViewReports>}
          ></Route>
          <Route
            path="/banker/viewsingleCC"
            element={<ViewSingleCC></ViewSingleCC>}
          ></Route>
          <Route
            path="/banker/viewsingleloan"
            element={<ViewSingleLoan></ViewSingleLoan>}
          ></Route>

          <Route
            path="/banker/viewtransactions"
            element={<ViewTransaction></ViewTransaction>}
          ></Route>

          <Route
            path="/banker/privacypolicy"
            element={<BankerPrivacyPolicy></BankerPrivacyPolicy>}
          ></Route>

          <Route
            path="/banker/termsandconditions"
            element={<BankerTermsAndConditions></BankerTermsAndConditions>}
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
            path="/admin/createaccount"
            element={<CreateNewAccount></CreateNewAccount>}
          ></Route>
          <Route
            path="/admin/technicalissues"
            element={<AdminTechnicalIssuesScreen></AdminTechnicalIssuesScreen>}
          ></Route>
          <Route
            path="/admin/privacypolicy"
            element={<AdminPrivacyPolicy></AdminPrivacyPolicy>}
          ></Route>
          <Route
            path="/admin/termsandconditions"
            element={<AdminTermsAndConditions></AdminTermsAndConditions>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
