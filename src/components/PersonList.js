import React, { Component } from 'react';
import PersonProfile from './PersonProfile';

class PersonList extends Component {
    render() {
        const { array } = this.props
        return (
            <ul>
                {array.map((data, index) =>
                    <li
                        key={index}
                    >
                        <PersonProfile
                            name={data.name.first}
                            picURL={data.picture.thumbnail}
                            city={data.location.city}
                            age={data.dob.age}
                            gender={data.gender}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

export default PersonList;