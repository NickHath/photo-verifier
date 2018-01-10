import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';

import tableData from './tableData';

export default class CompatibilityTable extends Component {
  constructor() {
    super();
    this.state = { tableData }
  }

  render() {

    const tableData = this.state.tableData.map(site => (
      <Table.Row>
        <Table.Cell>{ site.website }</Table.Cell>
        <Table.Cell>{ site.fileTypes }</Table.Cell>
        <Table.Cell>{ site.fileSize }</Table.Cell>
        <Table.Cell>{ site.width }px</Table.Cell>
        <Table.Cell>{ site.height }px</Table.Cell>
      </Table.Row>
    ))

    return (
      <div className='table-wrapper'>
        <p className='dimensions'>{ `Image Width: ${this.props.cropperSize.width}, Image Height: ${this.props.cropperSize.height}` }</p>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Website</Table.HeaderCell>
              <Table.HeaderCell>File Types</Table.HeaderCell>
              <Table.HeaderCell>Max. File Size</Table.HeaderCell>
              <Table.HeaderCell>Width</Table.HeaderCell>
              <Table.HeaderCell>Height</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            { tableData }
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
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