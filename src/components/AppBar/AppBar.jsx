import { StyledLink, NavItem, NavList, Header } from "./AppBarStyled";

const navItems = [
  { href: '/', text: 'Home' },
  { href: '/movies', text: 'Movies' },
];

const AppBar = () => {
    return (
        <Header>
            <NavList>
                {navItems.map(({ href, text }) => {
                    if(href.includes("/movies")) {
                        return (
                            <NavItem key={href}>
                                <StyledLink to={href}>{text}</StyledLink>
                            </NavItem>
                        )
                    }    

                    return (
                        <NavItem key={href}>
                            <StyledLink to={href} end>{text}</StyledLink>
                        </NavItem>
                    )
                })}
            </NavList>
        </Header>
    )
}

export default AppBar;
