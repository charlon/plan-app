import * as React from 'react';
import { Card, CardText } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css'
import './home.css';

class Home extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div>
        <Card body={true} className="">
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>

        <Card body={true} className="">
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        </Card>
      </div>
    );
  }
}
export default Home
