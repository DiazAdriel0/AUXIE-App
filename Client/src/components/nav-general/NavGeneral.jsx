import { useNavigate } from 'react-router-dom'

const NavGeneral = () => {
    const navigate = useNavigate();

    return (
        <nav>
            <div>
                <p>Logo</p>
            </div>
        </nav>
    )
}

export default NavGeneral
