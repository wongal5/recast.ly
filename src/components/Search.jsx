class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchSubmit = this.searchSubmit.bind(this);
  }



  searchSubmit() {
    let sortType = $('.dropdown').val();
    let query = $('.form-control').val();
    let outerThis = this;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        order: sortType,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function (data) {
        outerThis.props.callbackParent(data);
      }
    });

  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp={this.searchSubmit}/>
        <button className="btn hidden-sm-down" onClick={this.searchSubmit}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
        <select className="btn hidden-sm-down dropdown" onChange={this.searchSubmit}>
          <option value="viewCount">View Count</option>
          <option value="date">Recent</option>
          <option value="relevance">Relevance</option>
          <option value="rating">Rating</option>
        </select>
      </div> 
    );
  }
}


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
