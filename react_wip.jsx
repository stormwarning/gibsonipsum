function get(url) {
  
  return new Promise(function(succeed, fail) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.addEventListener("load", function() {
      if (req.status < 400)
        succeed(req.responseText);
      else
        fail(new Error("Request failed: " + req.statusText));
    });
    req.addEventListener("error", function() {
      fail(new Error("Network error"));
    });
    req.send(null);
  });
  
};

var TextForm = React.createClass({
  getWords: function(url) {
    
    var data = get(url).then(JSON.parse);
    
    return (
      data
    );
/*    
    var request = new XMLHttpRequest();
  
    request.open('GET', url, true);
    request.onload = function() {
      var data;

      if (request.status >= 200 && request.status < 400) {
        data = JSON.parse(request.responseText);
        console.log(data); // Valid object, as expected.
        return (data);
      }
    }.bind(this);
    request.send();
*/    
  },
  getWordList: function() {
    
    var url = 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries?access_token=f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85';
    var wordlist = [];
    var skip = 0;
    var total = 0;
    var max = 0;    
    
    // var data = this.getWords(url);
    var data = get(url).then(JSON.parse).then(function(data) {
      console.log(data); // Undefined??
      wordlist = data.items;
      max = data.total;
      console.log(wordlist);

      while ( total < max ) {

        total = total + data.items.length;
        wordlist[wordlist.length] = data.items;
        skip = skip + data.limit;

        if ( total > max ) {
          // data = this.getWords(url + '&skip=' + skip);
        }

      }

      return ( data.items );
      /*if (this.isMounted()) {
        this.setState({
          words: data.items
        });
      }*/
    }.bind(this));
    
    
    //var request = new XMLHttpRequest();

    //request.open('GET', 'https://cdn.contentful.com/spaces/8j8wvx07a2uv/entries?access_token=f582803bba0fe0513deecb0f9edf8e0e0d31c631247ccc64d7d99087e7a75e85', true);
    //request.onload = function() {

      //if (request.status >= 200 && request.status < 400) {

        //data = JSON.parse(request.responseText);

        /*this.setState({
          words: data.items
        });*/

/*      } else {
        // We reached our target server, but it returned an error
        console.log( 'Something else' );
      }
    }.bind(this);  
    request.onerror = function() {
      // There was a connection error of some sort
    };
    request.send();
*/        
  },
  getInitialState: function() {

    return {
      paragraphs: 3,
      sentences: 5,
      l33t: false,
      nihongo: false,
      words: []
    };
    
  },
  componentDidMount: function() {

    this.getWordList();
    setInterval(this.getWordList(), 1000);
    
  },
  changeParagraphSetting: function ( event ) {
    
    this.setState({
      paragraphs: event.target.value
    });
    
  },
  changeSentenceSetting: function ( event ) {
    
    this.setState({
      sentences: event.target.value
    });
    
  },
  changeL33tSetting: function( event ) {
    
    this.setState({
      l33t: ! this.state.l33t
    });
    
  },
  changeNihonSetting: function( event ) {
    
    this.setState({
      nihongo: ! this.state.nihongo
    });
    
  },
  /**
   * Generate a sentence of random words.
   *
   * @param  length (int) How many words in the sentence.
   * @return s (string)   The generated sentence.
   */
  generateSentence: function( length ) {
    
    var words = this.state.words;
    var s = '';
   
    if ( words.length ) {
      
      for ( var i = 0; i <= length; i++ ) {

        var w = Math.floor( Math.random() * words.length );
        var word = words[w].fields.word;

        if ( i == 0 ) {

          // Capitalise the first word.
          s += word.charAt(0).toUpperCase() + word.slice(1) + ' ';

        } else if ( i == length ) {

          // Put a period & space after the last word.
          s += word + '. ';

        } else {

          // Add a space between words.
          s += word + ' ';

        }

      }
      
    }
    
    return (s);
    
  },
  /**
   * Compile sentences into a paragraph.
   *
   * @param  length (int) The number of sentences to use.
   * @return p (object)   A `<p>` element object to render.
   */
  generateParagraph: function( length ) {
    
    var p = '';

    for ( var i = 0; i < length; i++ ) {
    
      var sentenceLength = Math.floor( Math.random() * 10 ) + 7;
      
      p += this.generateSentence( sentenceLength );
        
    }
    
    return (
      <p>{ p }</p>
    );
    
  },
  /**
   * Render lipsum based on settings.
   *
   * @return (object) Array of `<p>` elements.
   */
  generateLipsum: function() {
    
    var sentences = this.state.sentences;
    var paragraphs = this.state.paragraphs;
    var theLipsum = [];
        
    for ( var q = 0; q < paragraphs; q++ ) {
      
      // Generate paragraph objects and add to output array.
      var paragraphLength = Math.floor( Math.random() * (this.state.sentences - 1 + 1 ) ) + 1;
      theLipsum.push( this.generateParagraph( paragraphLength ) );
            
    }
    
    return (
      <div>
        { theLipsum }
      </div>
    );
    
  },
  render: function() {
    return (
      <div className="well clearfix">
        <label>
          <span>Paragraphs</span>
          <input type="number" min="1" value={ this.state.paragraphs } onChange={ this.changeParagraphSetting }/>
        </label><br/>
      <label>
          <span>Sentences</span>
          <input type="number" min="1" value={ this.state.sentences } onChange={ this.changeSentenceSetting }/>
        </label><br/>
        <label>
          <input type="checkbox" checked={ this.state.l33t } onChange={ this.changeL33tSetting }/>
          <span>hax0r teh g1bs0n</span>
        </label><br/>
        <label>
          <input type="checkbox" checked={ this.state.nihongo } onChange={ this.changeNihonSetting }/>
          <span lang="jp" title="With Japanese words">日本語と</span>
        </label><br/>
      
        
      
        { this.generateLipsum() }
      </div>
    );
  }
});

React.render(
  <TextForm />,
  document.body
);
