import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LoaderBar } from 'components/LoaderBar/LoaderBar';
import { MainContainer, Section } from '../../styles';
import { Backtop } from 'components/Backtop/Backtop';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';

export const SharedLayout = () => (
  <>
    <ScrollToTop />
    <Header />
    <main>
      <Section>
        <MainContainer>
          <Suspense fallback={<LoaderBar />}>
            <Outlet />
          </Suspense>
        </MainContainer>
      </Section>
    </main>
    <Backtop />
  </>
);
