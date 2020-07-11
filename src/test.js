// No need to pay attention to the code below this comment. You have learned to use 'import' to bring in components from libraries in your React project. This is another way to do it that works better in Codepen. HashRouter is also used here instead of BrowserRouter due to Codepen. Do not be concerned about the differences. 
const { HashRouter, Switch, Route, Link } = ReactRouterDOM

// The code you should pay attention to begins after this comment.

const ALBUMSDATA = [
  { 
    id: 1, 
    title: "Mezzanine", 
    artist: "Massive Attack", 
    year: 1998 
  },
  { 
    id: 2, 
    title: "The Ruminant Band", 
    artist: "Fruit Bats", 
    year: 2009 
  },
  {
  id:3,
  title: "The Truth About Love",
  artist: "P!nk",
    year: 2012
  }
];

const concertRecords= [
  {
    id:1,
    tour: "Vertigo",
    band: "U2"
  },
  {
    id:2,
    tour: "Sticky and Sweet",
    band: "Madonna"
  },
  {
    id:3,
    tour: "Black Ice",
    band: "AC/DC"
  }
]

function Home() {
  return (
    <h1>Home</h1>
  );
}

function Albums(props) {
  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {props.albumsData.map(album => (
            <li key={album.id}>
              <Link to={`/albums/${album.id}`} >           
                Album {album.id}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

function Concerts(props){
  return(
  <div>
      <h4>Concert Records</h4>
      <ul>
        {props.concertRecords.map( concert =>
        <li key={concert.id}> 
          <Link to={`/concerts/${concert.id}`} >           
                Concert {concert.id}
            </Link>
            </li>
          )}
      </ul>
    </div>
  )
}

function MyNav() {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/albums'>Albums</Link></li>
       <li><Link to='/concerts'>Concerts</Link></li>
    </ul>
  );
}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsData: ALBUMSDATA,
      concertRecords: ConcertRecords
    };
  };
  
  render() {
    const ConcertInfo= ({match}) =>{
      const concert = this.state.concertRecords.filter(concert => concert.id === +match.params.albumId)[0];
      return(
      <div>
          {concert.tour} - {concert.band}
          </div>
          );
    };
    const AlbumInfo = ({match}) => {
      const album = this.state.albumsData.filter(album => album.id === +match.params.albumId)[0];
      return (
        <div>
          {album.title} - {album.artist} - {album.year}
        </div>
      );
    };

    return (
      <Switch>
       <Route exact path='/' component={Home}/>
       <Route path='/albums/:albumId' component={AlbumInfo}/>
       <Route path='/concerts/:albumId' component={ConcertInfo}/>         
       <Route exact path='/albums' render={() => <Albums albumsData={this.state.albumsData} />} />   
        <Route exact path='/concerts' render={() => <Concerts concertRecords={this.state.concertRecords}/>} />
      </Switch>
    );
  };
}

function App() {
  return (
    <div>
      <MyNav />
      <br />
      <Main />
    </div>
  );
}

// Stop paying attention here. Below code is just to make React Router work with Codepen.
// We are using HashRouter here, but outside of here you would use BrowserRouter for a web app.
ReactDOM.render((
  <HashRouter>
    <App />
  </HashRouter>
), document.getElementById('root'));/*//This array is used for the Example.
const GAMES = [
  { id: 0, name: "Chess" },
  { id: 1, name: "Go" },
  { id: 2, name: "Risk" },
  { id: 3, name: "Cribbage"}, 
  { id: 4, name: "Spit" }
];

// This array is used for the Challenge.
const RESOURCES = [
  { 
    id: 0, 
    title: "WesBos.com - Destructuring Objects",
    url: "https://wesbos.com/destructuring-objects/"
  },
  { 
    id: 1, 
    title: "FreeCodeCamp - The Basics of Destructuring Props in React",
    url: "https://medium.freecodecamp.org/the-basics-of-destructuring-props-in-react-a196696f5477" 
  },  
  { 
    id: 2, 
    title: "MDN - Destructuring assignment",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment"
  },
  {
    id: 3,
    title: "W3Schools - a target",
    url: "https://www.w3schools.com/tags/att_a_target.asp"
  }
];

function App() { 
  return ( 
    <div> 
      <PageTitle /> 
      <Games /> 
      <hr /> 
      <Challenge /> 
      <hr />
      <Resources />
    </div> 
  ); 
}
        
function PageTitle() {
  return (
    <h1>Code Challenge: React Components and Object Destructuring</h1>
  );
}

class Games extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      games: GAMES
    };
  }
  
  render() {
    const gamesList = this.state.games.map(game => {
      return (
        <li key={game.id}>
          <RenderGame game={game} />
        </li>
      );
    });    
    
    return (
      <div>
        <h2>Available Games</h2>
        <ul>{gamesList}</ul>
      </div>
    );
  }
}

function RenderGame(props) {
  return (
    <strong>Game ID {props.game.id}: {props.game.name}</strong>
  );
}

class Resources extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
      resources: RESOURCES
    };
  }
  
  render() {
    const resourced = this.state.resources.map(resource => { 
         return (<li key={resource.id}>
          <RenderResources resource={resource} />
        </li>
    )
    });    
    
    return (
      <div>
        <h2>Available Resource</h2>
        <ul>{resourced}</ul>
      </div>
    );
    }
}

function RenderResources(props) {
  return (
    <a href={props.resource.url}>< strong>Resource ID {resource}: {resource.title}</strong>
   {props.resource.title}</a>
  );
}

function Challenge() {
  return (
    <React.Fragment>
      <p>For your Code Challenge, you will use the RESOURCES array (line 11).</p>
      <ul>
        <li><strong>Challenge 1:</strong> Create a class component named <strong>Resources</strong>. Model this component on the Games component. Cause it to be displayed in the Results display (the large white panel) by rendering it inside the <strong>App component</strong>, beneath where the Challenge component is rendered.</li>
        <li><strong>Challenge 2:</strong> Create a functional component named <strong>RenderResource</strong>. Use object destructuring in its parameter list to pass in <strong>props.resource</strong> as simply <strong>resource</strong>.</li>
        <li><strong>Challenge 3:</strong> List the URL titles to the view in the render() function of Resources, similar to how the games are listed in the render() function of Games, using the destructured <strong>resource</strong> argument. Title the list <strong>"Additional Resources".</strong></li>
      <li><strong>Challenge 4</strong>: Use JSX elements to make each URL into clickable links. Have them open in a new tab, not the current one. Two hints: 1) You will NOT need to use React Router for this challenge. 2) Look up the "anchor target attribute".</li>
      </ul>
    </React.Fragment>
  );
}

ReactDOM.render( <App />, document.getElementById("root"));

*/