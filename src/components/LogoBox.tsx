import { Link } from 'react-router-dom'

//image
import logo from '@/assets/images/logo.png'
import logoSm from '@/assets/images/logo-sm.png'
import logoDark from '@/assets/images/logo-dark.png'

const LogoBox = () => {
	return (
		<>
			<Link to="/" className="logo-box">
				<div className="logo-light">
					<img src={logo} className="logo-lg h-[22px]" alt="Light logo" />
					<img src={logoSm} className="logo-sm h-[22px]" alt="Small logo" />
				</div>

				<div className="logo-dark">
					<img src={logoDark} className="logo-lg h-[22px]" alt="Dark logo" />
					<img src={logoSm} className="logo-sm h-[22px]" alt="Small logo" />
				</div>
			</Link>
		</>
	)
}

export default LogoBox
