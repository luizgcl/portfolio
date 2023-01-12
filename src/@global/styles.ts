import styled from 'windstitch';

export const Main = styled('main', {
  className: 'snap-mandatory snap-y overflow-y-scroll h-screen'
});

export const Section = styled('section', {
  className: 'w-full h-screen snap-start overflow-x-hidden'
});

export const Container = styled('article', {
  className: 'w-full flex flex-col mx-5 items-center'
})