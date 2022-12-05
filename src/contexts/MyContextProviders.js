import { AuthContextProvider } from './AuthContext'
import { CartInfoContextProvider } from '../01-cart/contexts/CartInfoContext'
import { IsLovedContextProvider } from './03-shop-loveContext'

export default function MyContextProviders({ children }) {
  return (
    <>
      <AuthContextProvider>
        <CartInfoContextProvider>
          <IsLovedContextProvider>{children}</IsLovedContextProvider>
        </CartInfoContextProvider>
      </AuthContextProvider>
    </>
  )
}
