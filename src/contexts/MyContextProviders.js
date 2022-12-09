import { AuthContextProvider } from './AuthContext'
import { CartInfoContextProvider } from '../01-cart/contexts/CartInfoContext'
import { IsLovedContextProvider } from './03-shop-loveContext'
import ScrollToTop from '../00-homepage/contexts/ScrollToTop'

export default function MyContextProviders({ children }) {
  return (
    <>
      <ScrollToTop>
        <AuthContextProvider>
          <CartInfoContextProvider>
            <IsLovedContextProvider>{children}</IsLovedContextProvider>
          </CartInfoContextProvider>
        </AuthContextProvider>
      </ScrollToTop>
    </>
  )
}
