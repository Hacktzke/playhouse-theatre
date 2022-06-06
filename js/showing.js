class Showing extends React.Component {
    render() {
        const props = this.props;
        return (
            <div className="Showing">
                <Card 
                poster="les-mis-poster-large.jpg"
                title="Les Misérables"
                date="April 5th - June 5th"
                descrip="Les Misérables, colloquially known as Les Mis or Les Miz, is a sung-through musical and an adaptation of Victor Hugo's 1862 novel..."
                page="./les-mis.html"
                />
                <Card 
                poster="hamlet-poster-large.jpg"
                title="Hamlet"
                date="April 18th - July 7th"
                descrip="The Tragedy of Hamlet, Prince of Denmark, often shortened to Hamlet, is a tragedy written by William Shakespeare sometime between 1599 and 1601..."
                page="./hamlet.html"
                />
                <Card 
                poster="shall-we-dance-poster-large.jpg"
                title="Shall we Dance"
                date="May 6th - August 14th"
                descrip="Shall We Dance, released in 1937, is the seventh of the ten Astaire-Rogers musical comedy films. The idea for the film originated in the studio's desire..."
                page="./shall-we-dance.html"
                />
                <Card 
                poster="lion-king-poster-large.jpg"
                title="Lion King"
                date="June 5th - August 17th"
                descrip="The Lion King is a musical play based on the 1994 Walt Disney Animation Studios' animated feature film of the same name with music by Elton John..."
                page="./lion-king.html"
                />
            </div>
        )
    }
}
