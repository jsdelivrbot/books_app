import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class Booklist extends Component {
    renderList() {
        return this.props.books.map((book)=>{
            return (
                <li 
                    key={book.title} 
                    onClick={()=> this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    };

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        );
    };
};

// Anything return from this function will end up as props on the BookList container
function mapStateToProps(state){
    return{
        books: state.books
    };
};

// Whenever selectBook is called, the result should be passed to all the reducers
function mapDispatchToProps(dispatch){
    return bindActionCreators( { selectBook: selectBook}, dispatch );
};

// Promote BookList from a component to a container - it needs to know about 
// this new dispatch method, selectBook. Make available as a props
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);