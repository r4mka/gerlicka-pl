import React from 'react';
import { css, styled } from '../../utils/styles';
import { Grid } from '../Grid';
import { Nav, List, ListItem, NavLink } from './Nav';

const StyledHeader = styled.header(
  ({ theme }) => css`
    background-color: ${theme.colors.beige};
  `,
);
const Logo = styled.img`
  height: 80px;
  width: auto;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Grid display="flex">
        <Logo alt="Logo" src="/icon.png" />
        <Nav>
          <List>
            <ListItem>
              <NavLink>Usługi</NavLink>
            </ListItem>
            <ListItem>
              <NavLink>Moje prace</NavLink>
            </ListItem>
            <ListItem>
              <NavLink>Cennik</NavLink>
            </ListItem>
            <ListItem>
              <NavLink>Salon</NavLink>
            </ListItem>
            <ListItem>
              <NavLink>O mnie</NavLink>
            </ListItem>
            <ListItem>
              <NavLink>Kontakt</NavLink>
            </ListItem>
          </List>
        </Nav>
      </Grid>
    </StyledHeader>
  );
};
