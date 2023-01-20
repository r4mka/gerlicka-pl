import { styled } from '../../utils/styles';
import { Link } from 'gatsby';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  min-width: 0;
  margin: 0 20px;
`;

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  padding: 0 10px;
  height: 80px;
  display: flex;
  align-items: center;
`;
