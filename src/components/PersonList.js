import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Child from './Child';
import PersonProfile from './PersonProfile';
import './PersonList.css'

class PersonList extends Component {
    render() {
        const { array } = this.props
        return (
            <div>
                <ul>
                    {array.map((data, index) =>
                        <li
                            key={index}
                            className="link"
                        >
                            <Link to={`/child/${index}`}>
                                <PersonProfile
                                    name={data.name}
                                    picURL={data.picture.thumbnail}
                                    city={data.location.city}
                                    age={data.dob.age}
                                    gender={data.gender}
                                />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default PersonList;