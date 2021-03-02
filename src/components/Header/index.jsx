import Icon from "@material-ui/core/Icon"
import { AppBar, AppBarAction, AppBarNav, AppBarTitle } from "@react-md/app-bar"
import { Divider } from "@react-md/divider"
import { List, ListItem, ListSubheader } from "@react-md/list"
import { DropdownMenu } from "@react-md/menu"
import { Sheet } from "@react-md/sheet"
import { useToggle } from "@react-md/utils"
import { IconButton, Link } from "gatsby-theme-material-ui"
import React from "react"
import { menuItems } from "./menuItems"

const Header = ({ siteTitle, menuLinks }) => {
  const [visible, show, hide] = useToggle(false)
  // const handleClick = useCallback(
  //   (event) => {
  //     if (event.target !== event.currentTarget) {
  //       onRequestClose()
  //     }
  //   },
  //   [onRequestClose]
  // )

  return (
    <>
      <AppBar id='app-bar-example' theme='default'>
        <AppBarNav id='app-bar-nav' aria-label='Navigation' onClick={show}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path d='M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z' />
          </svg>
        </AppBarNav>
        <AppBarTitle id='app-bar-title' className='rmd-typography--capitalize'>
          <Link color='inherit' to='/'>
            {siteTitle}
          </Link>
        </AppBarTitle>
        <AppBarAction id='app-bar-search' first aria-label='Search'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
          </svg>
        </AppBarAction>
        <IconButton id='app-bar-home-link' aria-label='home link' to='/'>
          <Icon>home</Icon>
        </IconButton>
        <IconButton id='app-bar-app-link' aria-label='app link' to='/app/'>
          <svg
          className="w-6 h-6"
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path d='M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z' />
            <path d='M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z' />
          </svg>
        </IconButton>
        <DropdownMenu
          items={menuItems}
          buttonType='icon'
          aria-label='Options...'
          id='app-bar-more'
          last>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            fill='currentColor'
            viewBox='0 0 16 16'>
            <path d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z' />
          </svg>
        </DropdownMenu>
      </AppBar>
      <Sheet
        id='example-sheet-1'
        aria-label='Example Sheet'
        visible={visible}
        onRequestClose={hide}
        position='left'>
        <List onClick={hide}>
          <ListSubheader>ListSubheader</ListSubheader>
          <Divider />
          {menuLinks.map((link, i) => (
            <ListItem id={`example-sheet-item-${i}`} key={i}>
              <Link activeClassName='active' color='inherit' to={link.link}>
                {link.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Sheet>
    </>
  )
}

export default Header
