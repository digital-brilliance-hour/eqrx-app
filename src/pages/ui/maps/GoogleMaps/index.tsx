import { GoogleApiWrapper } from 'google-maps-react'

// components
import { PageBreadcrumb } from '../../../../components'
import { BasicGoogleMap, DarkStyledMap, LightStyledMap, MapWithMarkers, PolyLineMap, StreetViewMap, BasicHeatMap, LocClustHeatMap } from './data'

interface MapContainerProps {
	google: any
}

const GoogleMaps = ({ google }: MapContainerProps) => {
	return (
		<>
			<PageBreadcrumb title="Google Maps" subName="Maps" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				<BasicGoogleMap google={google} description='' />
				<BasicHeatMap google={google} description=''/>
				<MapWithMarkers google={google} description=''/>
				<StreetViewMap google={google} description=''/>
				<PolyLineMap google={google} description=''/>
				<LightStyledMap google={google} description=''/>
				<DarkStyledMap google={google} description=''/>
				<LocClustHeatMap google={google} description=''/>

			</div>
		</>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg',
})(GoogleMaps)
