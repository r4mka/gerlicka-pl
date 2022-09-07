import * as React from 'react';
import { Global, styled, mq, ThemeProvider, css, theme, globalStyle } from '../utils/styles';
import { FacebookIcon, GoogleMapsIcon, InstagramIcon, MessengerIcon } from '../components';

const Main = styled.main(
  ({ theme }) => css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${theme.colors.beige};
    padding-bottom: 120px;
  `,
);

const Logo = styled.img`
  height: auto;
  margin: 0 auto;

  ${mq({
    width: ['90%', 400, 700, 900],
  })};
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
`;

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Main>
        <Logo alt="Logo" src="/logo.png" />
        <SocialMedia>
          <a href="https://m.me/KlaudiaGerlicka/" target="_blank" rel="noreferrer">
            <MessengerIcon />
          </a>
          <a href="https://m.facebook.com/KlaudiaGerlicka/" target="_blank" rel="noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.Instagram.com/klaudia_gerlicka" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://goo.gl/maps/yRhgbtQghw4Khc9N9" target="_blank" rel="noreferrer">
            <GoogleMapsIcon />
          </a>
        </SocialMedia>
      </Main>
    </ThemeProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Klaudia Gerlicka Make-Up</title>;
