import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ShopPage, ArticlePage  } from './pages';
import { CarProvider } from './states/carState';


export const App = () => {
  return (
    <CarProvider>
      <Routes>
        <Route path='/home' element={ <HomePage /> }/>      
        <Route path='/*' element={ <Navigate to="/home"/> }/>
        <Route path='/shop/:anime' element={ <ShopPage/> } />
        <Route path='/articlePage/:itemName' element={ <ArticlePage /> }/>
      </Routes>
    </CarProvider>
  )
}
