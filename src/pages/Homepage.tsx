import { w } from 'windstitch'
import { Main, Section } from '../@global/styles'
import { Home } from '../components/Home'

const Title = w.h1(`text-2xl font-black text-gray-800`)

export function HomePage() {
  return (<>
      <Home/>
  </>)
}