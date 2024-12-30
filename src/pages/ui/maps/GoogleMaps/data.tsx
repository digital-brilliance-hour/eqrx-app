import { Marker } from 'google-maps-react'
import { Polyline } from 'google-maps-react'
import { InfoWindow } from 'google-maps-react'
import { Map , GoogleMapReact, HeatMap } from 'google-maps-react'
import { useRef, useState } from 'react'

interface MapContainerProps {
	google: any
}

const polyline = [
	{ lat: 37.789411, lng: -122.422116 },
	{ lat: 37.785757, lng: -122.421333 },
	{ lat: 37.789352, lng: -122.415346 },
]


// const heatmapdata = {
// 	mapData:{
// 		lat: [37.782, 37.782, 37.782, 37.782, 37.782, 37.782, 37.782, 37.785, 37.785, 37.785, 37.785, 37.785, 37.785, 37.785],
// 		lng: [-122.447, -122.445, -122.443, -122.441, -122.439, -122.437,-122.435, -122.447, -122.445, -122.443, -122.441, -122.439, -122.437, -122.435]
// 	}
// }

const gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ];

  const positions = [
	{ lat: 35.262551, lng: -77.582368 },
	{ lat: 35.262745, lng: -77.581586 },
	{ lat: 35.262842, lng: -77.580688 },
	{ lat: 35.262919, lng: -77.579815 },
	{ lat: 35.262992, lng: -77.579112 },
	{ lat: 35.2631, lng: -77.578461 },
	{ lat: 35.263206, lng: -77.577829 },
	{ lat: 35.263273, lng: -77.577324 },
	{ lat: 35.263316, lng: -77.577023 },
	{ lat: 35.263357, lng: -77.576794 },
	{ lat: 35.263371, lng: -77.576687 },
	{ lat: 35.263368, lng: -77.576666 },
	{ lat: 35.263383, lng: -77.576594 },
	{ lat: 35.263508, lng: -77.576525 },
	{ lat: 35.263842, lng: -77.576591 },
	{ lat: 35.264147, lng: -77.576668 },
  ];


  const BasicGoogleMap = ({ google }: MapContainerProps) => {
	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Basic Example</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="gmaps-basic" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							google={google}
							initialCenter={{ lat: 35.2621, lng: -77.5818 }}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}>
						</Map>
					</div>
				</div>
			</div>
		</div>
	)
}

const BasicHeatMap = ({ google }: MapContainerProps) => {
	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Trespassing Hotspots</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="gmaps-basic" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							google={google}
							initialCenter={{ lat: 35.2621, lng: -77.5818 }}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}>
							<HeatMap
								mapCenter={{ lat: 35.2621, lng: -77.5818 }}
								gradient={gradient}
								google={google}
								map={Map}
								opacity={0.3}
								positions={positions}
								radius={20}
							/>
						</Map>
						{/* <GoogleMapReact
							bootstrapURLKeys={{
								key: ["AIzaSyBsHtI7Ed8ZeQ-yvYIMw9VKORe5WdPo5yg"],
								libraries:['visualization']
							}}
							zoom={google.maps.ControlPosition.LEFT_TOP}
							center={{ lat: 37.782, lng: -122.435 }}
							heatmap={positions}
							>
						</GoogleMapReact> */}
					</div>
				</div>
			</div>
		</div>
	)
}

const MapWithMarkers = ({ google }: MapContainerProps) => {
	const [activeMarker, setActiveMarker] = useState<any>({})
	const [selectedPlace, setSelectedPlace] = useState<any>({})
	const [showingInfoWindow, setShowingInfoWindow] = useState<boolean>(false)

	const onInfoWindowClose = () => {
		setActiveMarker(null)
		setShowingInfoWindow(false)
	}

	// handles operation on marker click
	const onBasicMarkerClick = () => {
		alert('You clicked in this marker')
	}

	// handles operation on marker click
	const onMarkerClick = (props: any, marker: any) => {
		setActiveMarker(marker)
		setSelectedPlace(props)
		setShowingInfoWindow(true)
	}

	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Markers Google Map</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="gmaps-markers" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							google={google}
							zoom={18}
							initialCenter={{ lat: 35.262084, lng: -77.581635 }}
							style={{ width: '100%', height: '100%', position: 'relative' }}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}
						>
							<Marker title={'This is sweet home.'} name={'Home sweet home!'} position={{ lat: 35.262084, lng: -77.581635 }} onClick={onBasicMarkerClick}></Marker>

							<Marker name="Current location" title={'Marker with InfoWindow'} position={{ lat: 35.261843, lng: -77.582264 }}  onClick={onMarkerClick}></Marker>
							<InfoWindow marker={activeMarker} onClose={onInfoWindowClose} visible={showingInfoWindow}>
								<div>
									<p>{selectedPlace.name}</p>
								</div>
							</InfoWindow>
						</Map>
					</div>
				</div>
			</div>
		</div>
	)
}

const StreetViewMap = ({ google }: MapContainerProps) => {
	let mapRef: any = useRef()

	/**
	 * Activate the street view
	 */
	const activateStreetView = (position: { lat: number; lng: number }) => {
		if (mapRef) {
			const mapObj = mapRef.map.getStreetView()
			mapObj.setPov({ heading: 34, pitch: 10 })
			mapObj.setPosition(position)
			mapObj.setVisible(true)
		}
	}
	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Street View Panoramas Google Map</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="panorama" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							google={google}
							ref={(map: any) => (mapRef = map)}
							zoom={14}
							initialCenter={{ lat: 40.7295174, lng: -73.9986496 }}
							style={{ width: '100%', height: '100%', position: 'relative' }}
							streetViewControl={true}
							onReady={() => {
								activateStreetView({ lat: 40.7295174, lng: -73.9986496 })
							}}
						></Map>
					</div>
				</div>
			</div>
		</div>
	)
}

const PolyLineMap = ({ google }: MapContainerProps) => {
	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Google Map Types</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="gmaps-types" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							className="map"
							google={google}
							style={{ height: '100%', position: 'relative', width: '100%' }}
							zoom={14}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}
						>
							<Polyline fillColor="#0000FF" fillOpacity={0.35} path={polyline} strokeColor="#0000FF" strokeOpacity={0.8} strokeWeight={2} />
						</Map>
					</div>
				</div>
			</div>
		</div>
	)
}

const LightStyledMap = ({ google }: MapContainerProps) => {
	const mapStyles = [
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{ color: '#e9e9e9' }, { lightness: 17 }],
		},
		{
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [{ color: '#f5f5f5' }, { lightness: 20 }],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.fill',
			stylers: [{ color: '#ffffff' }, { lightness: 17 }],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#ffffff' }, { lightness: 29 }, { weight: 0.2 }],
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [{ color: '#ffffff' }, { lightness: 18 }],
		},
		{
			featureType: 'road.local',
			elementType: 'geometry',
			stylers: [{ color: '#ffffff' }, { lightness: 16 }],
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{ color: '#f5f5f5' }, { lightness: 21 }],
		},
		{
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{ color: '#dedede' }, { lightness: 21 }],
		},
		{
			elementType: 'labels.text.stroke',
			stylers: [{ visibility: 'on' }, { color: '#ffffff' }, { lightness: 16 }],
		},
		{
			elementType: 'labels.text.fill',
			stylers: [{ saturation: 36 }, { color: '#333333' }, { lightness: 40 }],
		},
		{ elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{ color: '#f2f2f2' }, { lightness: 19 }],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry.fill',
			stylers: [{ color: '#fefefe' }, { lightness: 20 }],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#fefefe' }, { lightness: 17 }, { weight: 1.2 }],
		},
	]

	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Ultra Light With Labels</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="ultra-light" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							google={google}
							initialCenter={{ lat: -12.043333, lng: -77.028333 }}
							style={{ width: '100%', height: '100%', position: 'relative' }}
							styles={mapStyles}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}
						></Map>
					</div>
				</div>
			</div>
		</div>
	)
}

const DarkStyledMap = ({ google }: MapContainerProps) => {
	const mapStyles = [
		{
			featureType: 'all',
			elementType: 'labels',
			stylers: [{ visibility: 'on' }],
		},
		{
			featureType: 'all',
			elementType: 'labels.text.fill',
			stylers: [{ saturation: 36 }, { color: '#000000' }, { lightness: 40 }],
		},
		{
			featureType: 'all',
			elementType: 'labels.text.stroke',
			stylers: [{ visibility: 'on' }, { color: '#000000' }, { lightness: 16 }],
		},
		{
			featureType: 'all',
			elementType: 'labels.icon',
			stylers: [{ visibility: 'off' }],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry.fill',
			stylers: [{ color: '#000000' }, { lightness: 20 }],
		},
		{
			featureType: 'administrative',
			elementType: 'geometry.stroke',
			stylers: [{ color: '#000000' }, { lightness: 17 }, { weight: 1.2 }],
		},
		{
			featureType: 'administrative.country',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#e5c163' }],
		},
		{
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#c4c4c4' }],
		},
		{
			featureType: 'administrative.neighborhood',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#e5c163' }],
		},
		{
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [{ color: '#000000' }, { lightness: 20 }],
		},
		{
			featureType: 'poi',
			elementType: 'geometry',
			stylers: [{ color: '#000000' }, { lightness: 21 }, { visibility: 'on' }],
		},
		{
			featureType: 'poi.business',
			elementType: 'geometry',
			stylers: [{ visibility: 'on' }],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.fill',
			stylers: [{ color: '#e5c163' }, { lightness: '0' }],
		},
		{
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{ visibility: 'off' }],
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#ffffff' }],
		},
		{
			featureType: 'road.highway',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#e5c163' }],
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry',
			stylers: [{ color: '#000000' }, { lightness: 18 }],
		},
		{
			featureType: 'road.arterial',
			elementType: 'geometry.fill',
			stylers: [{ color: '#575757' }],
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#ffffff' }],
		},
		{
			featureType: 'road.arterial',
			elementType: 'labels.text.stroke',
			stylers: [{ color: '#2c2c2c' }],
		},
		{
			featureType: 'road.local',
			elementType: 'geometry',
			stylers: [{ color: '#000000' }, { lightness: 16 }],
		},
		{
			featureType: 'road.local',
			elementType: 'labels.text.fill',
			stylers: [{ color: '#999999' }],
		},
		{
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{ color: '#000000' }, { lightness: 19 }],
		},
		{
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{ color: '#000000' }, { lightness: 17 }],
		},
	]

	return (
		<div className="card">
			<div className="card-header">
				<h4 className="card-title">Dark</h4>
			</div>
			<div className="p-6">
				<div className="mb-3">
					<div id="dark" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
						<Map
							google={google}
							initialCenter={{ lat: -12.043333, lng: -77.028333 }}
							style={{ width: '100%', height: '100%', position: 'relative' }}
							styles={mapStyles}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}
						></Map>
					</div>
				</div>
			</div>
		</div>
	)
}

export { BasicGoogleMap, DarkStyledMap, MapWithMarkers, StreetViewMap, PolyLineMap, LightStyledMap, BasicHeatMap }
