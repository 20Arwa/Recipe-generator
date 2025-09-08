import headerIcon from '../header-icon.png'

export default function Header() {
    return (
        <header className="bg-body-secondary d-flex justify-content-center align-items-center rounded-top py-2">
            <img src={headerIcon} alt="icon"/>
            <h3>Recipe Generator</h3>
        </header>
    )
}