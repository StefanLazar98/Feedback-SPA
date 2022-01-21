import React, { Component } from 'react'
import putActivity from '../actions/ActivityActions/putActivity'
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core'

export default class SwitchButton extends Component {
  constructor(props) {
    super(props)
    this.state = { active: props.active }
  }

  btnActive = (id) => {
    console.log(id)
    if (this.state.active === false) {
      putActivity(id, true)
      this.state.active = true;
      this.props.updateState()
    } else {
      putActivity(id, false)
      this.state.active = false;
      this.props.updateState()
    }
  }

  render() {
    return (
      <div>
        {this.state.active ? <p style={{ color: "#3f51b5" }}>Activă</p> : <p style={{ color: "#3f51b5" }}>Inactivă</p>}
        {this.state.active ?
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={(evt) => this.btnActive(this.props.id)} >Dezactivează</Button>
          </ButtonGroup>
          :
          <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
            <Button onClick={(evt) => this.btnActive(this.props.id)}>Activează</Button>
          </ButtonGroup>
        }
      </div>

    )
  }
}
