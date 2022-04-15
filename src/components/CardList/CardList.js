import React from 'react';
import './card-list.css'
import Card from "../Card/Card";

export class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orderBy: 'asc'
        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }
    handleOnChange(e) {
        this.setState({
            orderBy: e.target.value
        });
    }
    render() {
        const { orderBy } = this.state;
        const { cityList } = this.props;
        let  sortedCitiesList = cityList.sort();
        if (orderBy === 'desc') {
            sortedCitiesList.reverse();
        }

        return (
            <div>
            <select className="card-list__select" value={orderBy} onChange={this.handleOnChange}>
                <option value="asc">By name asc</option>
                <option value="desc">By name desc</option>
            </select>
            <div className="card-list">

                {cityList.map(city => <Card key = {city} city = {city} />)}

            </div>
            </div>
        );
    }
}

// export const CardList = () => {
//     const {state : {cityList}} = useContext(GlobalContent);
//
//     return (
//         <div className="card-list">
//             {cityList.map(city => <Card key = {city} city = {city} />)}
//
//         </div>
//     );
// };

export default CardList;