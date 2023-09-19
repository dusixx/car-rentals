import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Header } from './Header/Header';
// import { LoaderBar } from 'components/etc/LoaderBar/LoaderBar';
import { MainContainer, Section } from './SharedLayout.styled';

export const SharedLayout = () => (
  <>
    {/* <Header /> */}
    <main>
      <Section>
        <MainContainer>
          <Suspense /* fallback={<LoaderBar />} */>
            <Outlet />
          </Suspense>
        </MainContainer>
      </Section>
    </main>
  </>
);
