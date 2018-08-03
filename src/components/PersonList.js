import React, { Component } from 'react';
// import PersonProfile from './PersonProfile';

class PersonList extends Component {
    render() {
<<<<<<< HEAD
        console.log(this.props.array)
        return (
            
            <ul>
                {this.props.array.map((data, index) =>
=======
        const array = this.props.array
        return (
            <p>{array}</p>
            
                /* {array.map((data, index) =>
>>>>>>> 7fa1197d4dbdb46db112f6f2784677fa96d15855
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
<<<<<<< HEAD
                )}
            </ul>
=======
                )} */
            
>>>>>>> 7fa1197d4dbdb46db112f6f2784677fa96d15855
        );
    }
}

export default PersonList;