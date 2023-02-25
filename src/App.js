import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component'

const Shop = () => {
  return (
    <h1>Shop Page</h1>
  )
}

const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Navigation></Navigation>}>
      <Route index element={<Home></Home>}></Route>
      <Route path='shop' element={<Shop></Shop>}></Route>
      <Route path='auth' element={<Authentication></Authentication>}></Route>  
    </Route>
  </Routes>
  );
}

export default App;
