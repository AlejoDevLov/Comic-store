import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ShopPage, ArticlePage  } from './pages';
import { CarProvider } from './states/carState';
import { ListCarProvider, ListProvider } from './states';


export const App = () => {
  return (
    <CarProvider>
      <ListCarProvider>
        <ListProvider>
          <Routes>
            <Route path='/home' element={ <HomePage /> }/>      
            <Route path='/*' element={ <Navigate to="/home"/> }/>
            <Route path='/shop/:anime' element={ <ShopPage/> } />
            <Route path='/articlePage/:itemName' element={ <ArticlePage /> }/>
          </Routes>
        </ListProvider>
      </ListCarProvider>
    </CarProvider>
  )
}
