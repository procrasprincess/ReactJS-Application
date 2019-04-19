import React, {Component} from 'react';

class nav extends Component{

    constructor(props){
        super(props);

        this.state = {
            news: []

        }
    }

    componentDidMount() {

        this.interval = setInterval(() => {
          //add api token from blackboard onto line 17 after "=" (below)
            fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=')
                .then(response => response.json())
                .then(response => {
                    this.setState({news: response.articles});
                });
        }, 5000);

    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render(){
        return (
          <nav className="Nav">
                <h4 className="NavTitle">Top Headlines</h4>
                <ul className="List">
                    {this.state.news.slice(0,5).map(newss => <div className='topnews'>{newss.title}</div>)}
                </ul>
            </nav>
        )
    }
}

export default nav;
