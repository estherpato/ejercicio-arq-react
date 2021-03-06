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
                <h1>{`${name.title} ${name.first} ${name.last}`}</h1>
                <img src={picURL} alt={name.first} />
                <p>{city}</p>
                <p>{age}</p>
                <p>{gender}</p>
            </div>
        );
    }
}

export default PersonProfile;