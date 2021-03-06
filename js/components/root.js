/**
 * @author akakou
 */

const Router = window.ReactRouterDOM.HashRouter;
const Route = window.ReactRouterDOM.Route;
const Link = window.ReactRouterDOM.Link;
const Prompt = window.ReactRouterDOM.Prompt;
const Switch = window.ReactRouterDOM.Switch;
const Redirect = window.ReactRouterDOM.Redirect;

const Root = () => (
  <div>
    <NavBar></NavBar>

    <div className="main">
      <Router history={history}>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/scene/:id" component={_Scene} />
        <Route path="/novel/:id/" component={_Novel} />
        <Route path="/novels/" component={NovelList} />
        <Route path="/new/scene/:id/" component={SceneForm} />
        <Route path="/new/novel/" component={NovelForm} />
        {/* <Route component={NotFound} /> */}
      </Router>
    </div>
  </div>
);

ReactDOM.render(<Root />, document.getElementById("root"));
