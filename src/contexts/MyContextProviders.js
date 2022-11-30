import { AuthContextProvider } from './AuthContext'
import { CartInfoContextProvider } from '../01-cart/contexts/CartInfoContext'

export default function MyContextProviders({ children }) {
  return (
    <>
      <AuthContextProvider>
        <CartInfoContextProvider>{children}</CartInfoContextProvider>
      </AuthContextProvider>
    </>
  )
}
