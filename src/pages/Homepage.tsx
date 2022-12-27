import { w } from 'windstitch'

const Main = w.main('snap-mandatory snap-y overflow-y-scroll h-screen');
const Section = w.section(`w-full h-screen snap-start`);

const Title = w.h1(`text-2xl font-black text-gray-800`)

export function HomePage() {
  return (<>
    <Main>
      <Section>
        <header>
          <Title>Home Page</Title>
        </header>
      </Section>
      <Section className='bg-green-300'>
      <header>
          <Title>About Us</Title>
        </header>
      </Section>
      <Section className='bg-red-300'>
      <header>
          <Title>Projects</Title>
        </header>
      </Section>
      <Section className='bg-blue-100'>
      <header>
          <Title>Contact</Title>
        </header>
      </Section>
    </Main>
  </>)
}