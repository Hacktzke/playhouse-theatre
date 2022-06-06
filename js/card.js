class Card extends React.Component {
    render() {
        const props = this.props;
        let imgSrc = `./images/${props.poster}`
        
        return (
            <div className="Card">
                <a href={props.page}><img className="poster" src={imgSrc}></img></a>
                <div className="text-area">
                  <h4 className="intro">Playhouse Theatre Presents</h4>
                  <h2 className="title">{props.title}</h2>
                  <h3 className="date">{props.date}</h3>
                  <p className="descrip">{props.descrip}</p>
                  <div className="btn-area">
                  <a className="a-btn-small border-l ticket-btn" href= "./booking.html">Get tickets</a>
                  <a className="a-btn-small border-l info-btn" href={props.page}>More info</a>
                  </div>
                </div>
            </div>
        )
    }
}
