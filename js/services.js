class Services extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="Services">
                <Facility
                img="cafe-large.jpg"
                title="Playhouse Café"
                descrip="Multi award-winning café and shop! Drink coffee, eat cake, and buy tickets to your favourite show. Visit our shop for all merchandise of our productions shown. You can even book a full three course meal to endulge during your show!"
                />
                <Facility
                img="guitars-large.jpg"
                title="Playhouse Museum"
                descrip="See the amazing history and beautiful heritage of the Playhouse Theatre all the way from its beginning in the 1920's to today. The Playhouse Theatre is proud to display its large collection of props and artifacts from  musicals, plays, operas and concerts over the last 100 years. Come visit us today."
                />
            </div>
        )
    }
}
