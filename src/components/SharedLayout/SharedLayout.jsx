import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { LoaderBar } from 'components/LoaderBar/LoaderBar';
import {
  MainContainer,
  Section,
  MainSection,
  RootContainer,
} from '../../styles';
import { Backtop } from 'components/Backtop/Backtop';
import { ScrollToTop } from 'components/ScrollToTop/ScrollToTop';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => (
  <>
    <ScrollToTop />
    <Header />
    <RootContainer>
      <MainSection>
        <Section>
          <MainContainer>
            <Suspense fallback={<LoaderBar />}>
              <Outlet />
            </Suspense>
          </MainContainer>
        </Section>
      </MainSection>

      <Footer />

      <Backtop />
    </RootContainer>
  </>
);
