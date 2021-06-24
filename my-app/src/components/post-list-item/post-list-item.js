import React, {Component} from 'react';
import './post-list-item.css'; 

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);

    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }
    //когда мы кликаем на кнопку, вызывается этот метод, он будет работать с state, это 
    // состояния нашего компонента (поста), внутри он принимает в себя стрелочную функцию,
    // которая в виде аргумента принимает в себя important, дальше мы используем функцию и
    // оборачиваем в круглые скобки, и внутри мы меняем important на противоположное значение

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render() {
        const {label} = this.props;
        const {important, like} = this.state;

        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        } //Если будет true, то будет добавляться класс important

        if (like) {
            classNames += ' like';
        }

        return ( // label, добавили тот текст, который в props-list
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span> 
                <div className="d-flex ustify-content-center align-items-center">
                    <button 
                        type='submit' 
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type='submit' 
                        className="btn-trash btn-sm">
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}
