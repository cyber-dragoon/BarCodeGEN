import { Toaster } from 'react-hot-toast'
import { Header } from './components/Header'
import { GeneratorCard } from './components/GeneratorCard'
import { ReaderCard } from './components/ReaderCard'
import { HistoryCard } from './components/HistoryCard'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto px-4 py-6 flex-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="md:col-span-1 lg:col-span-1">
          <GeneratorCard />
        </section>
        <section className="md:col-span-1 lg:col-span-1">
          <ReaderCard />
        </section>
        <section className="md:col-span-2 lg:col-span-1">
          <HistoryCard />
        </section>
      </main>
      <Toaster position="top-right" />
    </div>
  )
}

export default App
