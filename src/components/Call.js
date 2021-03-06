import React, { Component } from 'react';
import { ListGroupItem, Button, Row, Col } from 'react-bootstrap';
import { Icon } from 'components/Icon';
import { addText } from 'myRedux/actions';

export class Call extends Component {

  textBack = () => {
    this.props.store.dispatch(addText(this.props));
  };

  render() {
    return (
      <ListGroupItem header={this.props.from} >
        <span>{this.props.number}</span>
        <Button bsStyle="success" onClick={this.textBack} className="text-caller" >
          <Icon type="envelope"/>
        </Button>
      </ListGroupItem>
    );
  }
}
