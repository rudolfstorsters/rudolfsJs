
import React from 'react';
import ListItem from './ListItem';

export default class TodoList extends React.Component {

    render() {
        return (
            <div className='list-group'>
                {this.props.items.map((item, index) => (
                    <ListItem key={index + item}  value={item} />
                ))}
            </div>
        )
    }


}