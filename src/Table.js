import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import {Grid,Icon,Table,Menu,Label,Search} from "semantic-ui-react"
class App extends Component {
  render() {
    return (
      <div>
         <Grid container columns={1}>
             <Grid.Column>

               <Table>
               <Table.Footer>
                 <Table.Row>
                   <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>

                       <Search placeholder='Search document...' />

                    </Menu>
                 </Table.HeaderCell>
               </Table.Row>
             </Table.Footer>
             </Table>


             <Table celled>
               <Table.Header>
                <Table.Row>
                  <Table.HeaderCell textAlign='center'>nama document</Table.HeaderCell>
                  <Table.HeaderCell textAlign='center'>jenis file</Table.HeaderCell>

                 </Table.Row>
               </Table.Header>

               <Table.Body>
                 <Table.Row>
                   <Table.Cell>
                     <Label ribbon>panduan belajar java script</Label>
                   </Table.Cell>
                    <Table.Cell textAlign='center'>pdf</Table.Cell>
                </Table.Row>
              </Table.Body>

               <Table.Body>
                 <Table.Row>
                   <Table.Cell>
                    panduan belajar css
                   </Table.Cell>
                     <Table.Cell textAlign='center'>pdf</Table.Cell>
                </Table.Row>
              </Table.Body>

               <Table.Body>
                <Table.Row>
                  <Table.Cell>
                   panduan belajar react js
                  </Table.Cell>
                    <Table.Cell textAlign='center'>pdf</Table.Cell>
                </Table.Row>
               </Table.Body>

               <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='3'>
                    <Menu floated='right' pagination>
                      <Menu.Item as='a' icon>
                        <Icon name='chevron left' />
                      </Menu.Item>
                        <Menu.Item as='a'>1</Menu.Item>
                        <Menu.Item as='a'>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                        <Icon name='chevron right' />
                      </Menu.Item>
                    </Menu>
                  </Table.HeaderCell>
                </Table.Row>
               </Table.Footer>
             </Table>
             </Grid.Column>

         </Grid>
      </div>
    );
  }
}

export default App;
