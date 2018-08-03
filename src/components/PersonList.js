import React, { Component } from 'react';
import PersonProfile from './PersonProfile';

class PersonList extends Component {
    render() {
        const { userInfo, array } = this.props

        return (
            <ul>
                {/* {array.map((data, index) =>
                    <li
                        key={index}
                    >
                        <PersonProfile
                            name={data.name}
                            picURL={data.pic}
                            city={data.city}
                            age={data.age}
                            gender={data.gender}
                        />
                    </li>
                )} */}
            </ul>
        );
    }
}

export default PersonList;