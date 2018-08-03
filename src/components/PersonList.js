import React, { Component } from 'react';
// import PersonProfile from './PersonProfile';

class PersonList extends Component {
    render() {
        const array = this.props.array
        return (
            <p>{array}</p>
            
                /* {array.map((data, index) =>
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
                )} */
            
        );
    }
}

export default PersonList;