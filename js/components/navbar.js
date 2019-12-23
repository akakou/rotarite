class NavBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {
      loggined: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    setInterval(() => {
      const user = currentUser();
      this.setState({ loggined: Boolean(user) });
    }, 500);
  }

  async handleClick(e) {
    location.href = "/#/novel/new";

    // 謎
    // this.props.history.push("/novel/new");
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://example.com">
            <img src="../logo-hyper-wide2.png" width="94" height="28" />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a
                  className="navbar-item"
                  href="https://github.com/akakou/rotarite"
                >
                  Github
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item" href="https://twitter.com/_akakou">
                  開発者について
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <a className="navbar-item">読書する</a>

            <a className="navbar-item" onClick={this.handleClick}>
              投稿する
            </a>
            <div className="navbar-item">
              {!this.state.loggined && (
                <div className="buttons">
                  <a className="button is-primary">
                    <strong>Sign up</strong>
                  </a>
                  <a className="button is-light">Log in</a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
