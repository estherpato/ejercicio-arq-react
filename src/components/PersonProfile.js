import React, { Component } from 'react';

class PersonProfile extends Component {
    render() {
        const { 
            name,
            picURL,
            city,
            age,
            gender,
        } = this.props
        return (
            <div>
                <h1>{name}</h1>
                {/* <img src={picURL} alt={name} />
                <p>{city}</p>
                <p>{age}</p>
                <p>{gender}</p> */}
            </div>
        );
    }
}

export default PersonProfile;