import React from 'react';
import {Form, Image, Input, Menu} from 'semantic-ui-react';
import './HeaderNav.scss';
import logo from '../../assets/images/logo.jpg';

export class HeaderNav extends React.Component {
  render() {
    return (
      <Menu borderless className="top-menu" fixed="top">
        <Menu.Item header className="logo">
          <Image src={logo} size="tiny" />
        </Menu.Item>
        <Menu.Menu className="nav-container">
          <Menu.Item className="search-input">
            <Form>
              <Form.Field>
                <Input
                  placeholder="Search"
                  size="small"
                  action="Go"
                />
              </Form.Field>
            </Form>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default HeaderNav;
