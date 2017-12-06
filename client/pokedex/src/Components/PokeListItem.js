import React, {Component} from 'react';

export default class PokeListItem extends Component{
    static defaultProps = {
        pkm: {
            name: 'Pikachu',
            number: '025'
        }
    }

    render(){
        var props = this.props,
            pkm = props.pkm;

        return (
            <li className="poke-list-item">
                <img src={`http://serebii.net/pokedex-xy/icon/${pkm.number}.png`} alt="" />
                <spam>{pkm.number} - {pkm.name}</spam>
            </li>
        );
    }
}
