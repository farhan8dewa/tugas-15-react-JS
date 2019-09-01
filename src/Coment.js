import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import {Grid,Comment,Header,Form,Button,Feed,Image,Icon} from "semantic-ui-react"
class App extends Component {
  render() {
    return (
      <div>
        <Grid container columns={3}>
            <Grid.Column>
              <Comment.Group>
                 <Header as='h3' dividing>
                   Commentar
                 </Header>
                  <Comment>
                      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>satria</Comment.Author>
                        <Comment.Metadata>
                          <span>Today at 5:42PM</span>
                        </Comment.Metadata>
                        <Comment.Text>Hallo</Comment.Text>

                      </Comment.Content>
                    </Comment>

                 <Comment>
                   <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                   <Comment.Content>
                     <Comment.Author as='a'>danang</Comment.Author>
                     <Comment.Metadata>
                       <div>Yesterday at 12:30AM</div>
                     </Comment.Metadata>
                     <Comment.Text>
                       <p>kerjakan sesuatu semampu kamu</p>
                     </Comment.Text>
                     <Comment.Actions>
                       <Comment.Action>Reply</Comment.Action>
                     </Comment.Actions>
                   </Comment.Content>
                   <Comment.Group>

                     <Comment>
                       <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                       <Comment.Content>
                         <Comment.Author as='a'>ricki</Comment.Author>
                         <Comment.Metadata>
                           <div>Just now</div>
                         </Comment.Metadata>
                         <Comment.Text>sekarang kamu di mana danang</Comment.Text>
                         <Comment.Actions>
                           <Comment.Action>Reply</Comment.Action>
                         </Comment.Actions>
                       </Comment.Content>
                     </Comment>
                   </Comment.Group>
                 </Comment>

                 <Comment>
                     <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                     <Comment.Content>
                       <Comment.Author as='a'>Joe Henderson</Comment.Author>
                       <Comment.Metadata>
                         <span>5 days ago</span>
                       </Comment.Metadata>
                       <Comment.Text>terima kasih atas nasihatnya</Comment.Text>

                     </Comment.Content>
                    </Comment>

                 <Form reply>
                   <Form.TextArea />
                   <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                 </Form>
              </Comment.Group>
            </Grid.Column>


            <Grid.Column>
            </Grid.Column>


            <Grid.Column>
            <Feed>
               <Feed.Event image='  https://react.semantic-ui.com/images/avatar/small/elliot.jpg'>
               <Feed.Content>
                  <Feed.Summary>
                    <Feed.User>anton</Feed.User> added you as a friend
                    <Feed.Date>3 Hour Ago</Feed.Date>
                  </Feed.Summary>
                  <Feed.Meta>
                    <Feed.Like>
                      <Icon name='like' />
                      4 Likes
                    </Feed.Like>
                  </Feed.Meta>
                </Feed.Content>
               </Feed.Event>

               < Feed.Event icon='pencil' summary=''>
                 <Feed.Content>
                  <Feed.Summary>
                     you submitted a new post to the page
                    <div style={{color :'gray'}}>3 day ago </div>

                 </Feed.Summary>
                 </Feed.Content>
              </Feed.Event>


              < Feed.Event icon='' date='' summary=''>
                <Feed.Content>
                 <Feed.Summary >
                   <div style={{color :'gray'}}>saya senang belajar bahasa </div>
                   <p style={{color :'gray'}}>pemograman</p>
                    <Feed.Date>11 like</Feed.Date>

                </Feed.Summary>
                </Feed.Content>
             </Feed.Event>


               <Feed.Event>
                 <Feed.Label image=' https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                 <Feed.Content date='4 days ago' summary='david add new 2 new image' />
               </Feed.Event>
            </Feed>
            <Feed.Extra images>
             <Image.Group>
              <Image size='tiny' src=' https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
               <Image size='tiny' src=' https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
             </Image.Group>

             <Feed.Like>
               <Icon name='like' />
               4 Likes
             </Feed.Like>
            </Feed.Extra>

            </Grid.Column>
         </Grid>
      </div>
    );
  }
}

export default App;
