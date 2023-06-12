import { Shop, Header } from "../components";
import { ListCarProvider } from "../states/listCarState";
import { ListProvider } from "../states/shopListState/ListProvider";


export const ShopPage = () => {
  

  return (
    <ListProvider>
      <ListCarProvider>
          <Header />
          <Shop />
      </ListCarProvider>
    </ListProvider>
  )
}