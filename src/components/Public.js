import { Link } from "react-router-dom"

const Public = () => {

    const content = (
        <section className="public">
            <header>
                <h1>Welcome DTS</h1>
            </header>
            <main>
                <p></p>
                <p>&nbsp;</p>
                <address>
                    DTS<br />
                    Colombo<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public