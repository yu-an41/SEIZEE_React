import { AuthContextProvider } from './AuthContext'

export default function MyContextProviders({ children }) {
  return (
    <>
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  )
}
