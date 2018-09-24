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

      <div className="row no-gutters">
       <div className="col-sm">
         <Card body={true} className="">
           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         </Card>
       </div>
       <div className="col-sm">
         <Card body={true} className="">
           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         </Card>
       </div>
       <div className="col-sm">
         <Card body={true} className="">
           <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
         </Card>
       </div>
     </div>

     </div>

    );
  }
}
export default Home
