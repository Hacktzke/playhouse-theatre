class Facility extends React.Component {
    render() {
        const props = this.props;
        let imgSrc = `./images/${props.img}`;
        return (
            <div className="Facility">
                <a href="./about.html"><img className="facility-img" src={imgSrc}></img></a>
                <div className="text-area">
                  <h4 className="intro">Playhouse Theatre Offers</h4>
                  <h2 className="title">{props.title}</h2>
                  <p className="descrip">{props.descrip}</p>
                  <a className="a-btn-small border-l info-btn black" href="./about.html">More info</a>
                  <a className="a-btn-small border-l info-btn black" href="./contact.html">Contact</a>
                </div>
            </div>
        )
    }
}
