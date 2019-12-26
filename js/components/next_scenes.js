class NextScenes extends React.Component {
  constructor(props) {
    super(props);

    this.handlePost = this.handlePost.bind(this);
    this.state = {
      nexts: [],
      scene: {},
      novel: {}
    };
  }

  async componentDidMount() {
    const novelRepository = new NovelRepository();
    const sceneRepository = new SceneRepository();
    const likeRepository = new LikeRepository();

    const sceneId = this.props.sceneId;

    // const sceneId = getIdFromURI(this);

    const scene = await sceneRepository.findById(sceneId);
    const novel = await novelRepository.findById(scene.novelId);
    const nexts = await sceneRepository.findNext(scene);

    var sorted = [];

    for (var index in nexts) {
      const next = nexts[index];
      const likesCount = await likeRepository.countLikesForScene(next);
      sorted.push({
        like: likesCount,
        scene: next
      });
    }

    sorted.sort((a, b) => {
      if (a.like == b.like) return 0;
      else if (a.like < b.like) return 1;
      else return -1;
    });

    this.setState({
      scene: scene,
      novel: novel,
      nexts: sorted
    });
  }

  handlePost(e) {}

  render() {
    // todo: 命名を変更
    var nextList = [];

    for (const next of this.state.nexts) {
      const scene = next.scene;
      const like = next.like;
      const url = `/#/scene/${scene.id}`;

      nextList.push(
        <div className="box" key={scene.id}>
          <h2 className="title is-6">{scene.id}</h2>
          <p>評価は{like}です</p>
          <br />
          <a className="button" href={url}>
            このシーンを読む
          </a>
        </div>
      );
    }

    return <div>{nextList}</div>;
  }
}