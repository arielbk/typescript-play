import * as React from 'react';
import { omit } from 'lodash';

interface Props {
  text: string;
  age?: number;
}

interface State {
  email: string;
  name: string;
}

export default class Form extends React.Component<Props, State> {

  state: State = { 
    email: "",
    name: "",
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value }: any = e.target;
    this.setState({
      name: value,
    });
  }

  public render() {
    const { text } = omit(this.props, 'name');
    const { name } = this.state;
    return (
      <div>
        <div>{ text }</div>
        <input name="name" value={name} onChange={this.handleChange} />
      </div>
    );
  }
}
