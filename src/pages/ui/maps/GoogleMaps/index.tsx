import { GoogleApiWrapper } from 'google-maps-react'

// components
import { PageBreadcrumb } from '../../../../components'
import { BasicGoogleMap, DarkStyledMap, LightStyledMap, MapWithMarkers, PolyLineMap, StreetViewMap } from './data'

interface MapContainerProps {
	google: any
}

const GoogleMaps = ({ google }: MapContainerProps) => {
	return (
		<>
			<PageBreadcrumb title="Google Maps" subName="Maps" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				<BasicGoogleMap google={google} />
				<MapWithMarkers google={google} />
				<StreetViewMap google={google} />
				<PolyLineMap google={google} />
				<LightStyledMap google={google} />
				<DarkStyledMap google={google} />
			</div>
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyDsucrEdmswqYrw0f6ej3bf4M4suDeRgNA',
})(GoogleMaps)
