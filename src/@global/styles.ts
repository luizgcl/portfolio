import styled from 'windstitch';

export const Main = styled('main', {
  className: 'snap-mandatory snap-y overflow-auto h-screen'
});

export const Section = styled('section', {
  className: 'w-full h-screen snap-start overflow-x-hidden overflow-y-hidden flex flex-col items-center'
});

export const Container = styled('article', {
  className: 'w-full flex flex-col mx-5 items-center'
})

export const Navbar = styled('nav', {
  className: 'w-full flex flex-row glass justify-center items-center top-0 h-20'
});