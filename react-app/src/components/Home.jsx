export default function Home(){
    return(
        <>
            <div className="landing">
                <div className="arrow-container">
                    <img src="src/assets/down-arrow.png" className="arrow" />
                </div>
            </div>
            <div className="about">
                <div className="about-text">
                    <h2 className="about-header">About Gerald</h2>
                    <div className="about-line" />
                    <p className="about-description">
                        Gerald Elias, an accomplished author, seamlessly blends his background in music with his passion for writing, creating captivating mystery and crime novels. Before becoming a writer, Elias was a renowned violinist, lending his lyrical and evocative talents to prestigious orchestras. His novels reflect his love for adventure and travel, drawing inspiration from his life's rich experiences. Join us on a literary journey through the works of an author whose past is as diverse and captivating as the stories he crafts, where music and mystery intertwine to transport readers into thrilling realms of suspense and intrigue.
                    </p>
                </div>
                <img className="about-image" src="src/assets/gerald-elias-portrait.jpeg"/>
            </div>
            <h2 className="home-books-header">Books by Gerald Elias</h2>
            <div className="home-books-list">
                <div className="home-book">
                    <img src="src/assets/roundtree-days.jpg" />
                </div>
                <div className="home-book">
                    <img src="src/assets/book-its-a-crime.jpg" />
                </div>
                <div className="home-book">
                    <img src="src/assets/book-murder-at-the-royal-albert.jpg" />
                </div>
                <div className="home-book">
                    <img src="src/assets/book-cloudy-with-a-chance-of-murder.jpg" />
                </div>
                <div className="home-book">
                    <a href="/books">All Books</a>
                </div>
            </div>
        </>
    )
}