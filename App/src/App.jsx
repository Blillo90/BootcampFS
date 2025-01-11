import './App.css'

export function App () {
    return (
        <article className="pp-tw-followCard">
            <header className="pp-tw-followCard-header">
                <img 
                className="pp-tw-followCard-avatar"
                src="https://unavatar.io/blillo90/" 
                alt="blillo90" />
                <div className="pp-tw-followCard-div">
                    <strong>Pablo Pérez</strong>
                    <span className="pp-tw-followCard-span">@blillo90</span>
                </div>
            </header>

            <aside>
                <button className="pp-tw-followCard-button">
                    Seguir
                </button>
            </aside>
        </article>
    )
}