import React, { Component } from 'react';
import PersonProfile from './PersonProfile';

class PersonList extends Component {
    render() {
        console.log(this.props.array)
        return (
            
            <ul>
                {this.props.array.map((data, index) =>
                    <li
                        key={index}
                    >
                        <PersonProfile
                            name={data.gender}
                            // picURL={data.pic}
                            // city={data.city}
                            // age={data.age}
                            // gender={data.gender}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default PersonList;