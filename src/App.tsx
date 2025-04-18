import viteLogo from '/vite.svg'

import useBooksApi from './lib/hooks/books'
import useRootApi from './lib/hooks/root'
import Button from "./lib/components/Button"
import RootLayout from "./lib/layouts/Root"

function App() {
  const {name, fetchName} = useRootApi()
  const {bookTitle, fetchBookTitle} = useBooksApi()

  return <RootLayout>
    <img src={viteLogo}
         alt="Vite logo"
         style={{
           display: "block",
           maxWidth: "35px"
         }}

    />
    <Button onClick={() => fetchName()}>
      Name from API is: {name}
    </Button>
    <Button onClick={() => fetchBookTitle()}>
      Book title from API is: {bookTitle}
    </Button>
  </RootLayout>
}

export default App
