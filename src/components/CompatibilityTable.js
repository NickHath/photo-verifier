import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

export default class CompatibilityTable extends Component {
  render() {
    return (
      <div className='table-wrapper'>
        <p className='dimensions'>{ `Image Width: ${this.props.cropperSize.width}, Image Height: ${this.props.cropperSize.height}` }</p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Websites</Table.HeaderCell>
              <Table.HeaderCell>File Type</Table.HeaderCell>
              <Table.HeaderCell>File Size</Table.HeaderCell>
              <Table.HeaderCell>Min-Width</Table.HeaderCell>
              <Table.HeaderCell>Min-Height</Table.HeaderCell>
              <Table.HeaderCell>Max-Width</Table.HeaderCell>
              <Table.HeaderCell>Max-Height</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Facebook</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>YouTube</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Instagram</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Snapchat</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Linkedin</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Tumblr</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell positive>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
              <Table.Cell negative>Cell</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='7'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a'>Profile</Menu.Item>
                  <Menu.Item as='a'>Cover</Menu.Item>
                  <Menu.Item as='a'>Post</Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}