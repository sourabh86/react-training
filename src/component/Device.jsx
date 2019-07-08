import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardText, CardTitle, CardSubtitle, Button } from 'reactstrap';

class Device extends Component {
    state = {  };
    render() { 
        const color = this.props.hasError?"danger":"success"
        return ( 
            <div className="m-4">
                <Card style={{width:"300px", color:"white"}}  className="text-left" color={color}>
                    <CardHeader style={{backgroundColor:"#3E97B9"}}>{this.props.name}</CardHeader>
                    <CardBody>
                        <CardTitle>{this.props.ip}</CardTitle>
                        <CardText>{this.props.status}</CardText>
                        <Button className="sm" color="warning">Sync Now</Button>
                        <Button className="sm m-2" color="warning">Delete</Button>
                    </CardBody>
                </Card>
            </div> 
        );
    }
}
 
export default Device;