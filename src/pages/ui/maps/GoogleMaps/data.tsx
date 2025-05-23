import { Marker } from 'google-maps-react'
import { Polyline } from 'google-maps-react'
import { InfoWindow } from 'google-maps-react'
import { Map , GoogleMapReact, HeatMap } from 'google-maps-react'
import { useRef, useState } from 'react'

interface MapContainerProps {
	google: any
	description: string
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
	{ lat: 37.782551, lng: -122.445368 },
    { lat: 37.782745, lng: -122.444586 },
    { lat: 37.782842, lng: -122.443688 },
    { lat: 37.782919, lng: -122.442815 },
    { lat: 37.782992, lng: -122.442112 },
    { lat: 37.7831, lng: -122.441461 },
    { lat: 37.783206, lng: -122.440829 },
    { lat: 37.783273, lng: -122.440324 },
    { lat: 37.783316, lng: -122.440023 },
    { lat: 37.783357, lng: -122.439794 },
    { lat: 37.783371, lng: -122.439687 },
    { lat: 37.783368, lng: -122.439666 },
    { lat: 37.783383, lng: -122.439594 },
    { lat: 37.783508, lng: -122.439525 },
    { lat: 37.783842, lng: -122.439591 },
    { lat: 37.784147, lng: -122.439668 },
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
							initialCenter={{ lat: 37.782, lng: -122.435 }}
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

const BasicHeatMap = ({ google , description }: MapContainerProps) => {
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
							initialCenter={{ lat: 37.782, lng: -122.435 }}
							zoomControlOptions={{
								position: google.maps.ControlPosition.LEFT_TOP,
							}}>
							<HeatMap
								mapCenter={{ lat: 37.782, lng: -122.435 }}
								gradient={gradient}
								google={google}
								map={Map}
								opacity={0.3}
								positions={positions}
								radius={20}
							/>
						</Map>

					</div>
					<div className="pt-6">
							{description}
					</div>
				</div>
			</div>
		</div>
	)
}

const LocClustHeatMap = ({ google }: MapContainerProps) => {    const [activeLayers, setActiveLayers] = useState({
	yearly: true,
	monthly: true,
});

const heatMapData = {
	yearly: [
		{ lat: 37.782551, lng: -122.445368 },
		{ lat: 37.782745, lng: -122.444586 },
		{ lat: 37.782842, lng: -122.443688 },
		{ lat: 37.782919, lng: -122.442815 },
		{ lat: 37.782992, lng: -122.442112 },
		{ lat: 37.7831, lng: -122.441461 },
		{ lat: 37.783206, lng: -122.440829 },
		{ lat: 37.783273, lng: -122.440324 },
		{ lat: 37.783316, lng: -122.440023 },
		{ lat: 37.783357, lng: -122.439794 },
		{ lat: 37.783371, lng: -122.439687 },
		{ lat: 37.783368, lng: -122.439666 },
		{ lat: 37.783383, lng: -122.439594 },
		{ lat: 37.783508, lng: -122.439525 },
		{ lat: 37.783842, lng: -122.439591 },
		{ lat: 37.784147, lng: -122.439668 },
		// Add more positions...
	],

	monthly: [
		{ lat: 37.782551, lng: -122.440368 },
{ lat: 37.782745, lng: -122.439586 },
{ lat: 37.782842, lng: -122.438688 },
{ lat: 37.782919, lng: -122.437815 },
{ lat: 37.782992, lng: -122.437112 },
{ lat: 37.7831, lng: -122.436461 },
{ lat: 37.783206, lng: -122.435829 },
{ lat: 37.783273, lng: -122.435324 },
{ lat: 37.783316, lng: -122.434123 },
{ lat: 37.783357, lng: -122.434794 },
{ lat: 37.783371, lng: -122.434687 },
{ lat: 37.783368, lng: -122.434666 },
{ lat: 37.783383, lng: -122.434594 },
{ lat: 37.783508, lng: -122.434525 },
{ lat: 37.783842, lng: -122.434591 },
{ lat: 37.784147, lng: -122.434668 },

		// Add more positions...
	],
};

const gradients = {
	yearly: [
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
		'rgba(255, 0, 0, 1)',
	],
	monthly: [
		'rgba(255, 140, 0, 0)',
		'rgba(255, 140, 0, 1)',
		'rgba(255, 99, 71, 1)',
		'rgba(255, 69, 0, 1)',
	],
};

const handleToggleHeatMap = (area: 'yearly' | 'monthly') => {
	setActiveLayers((prev) => ({
		...prev,
		[area]: !prev[area],
	}));
};

return (
	<div className="card">
		<div className="card-header">
			<h4 className="card-title">Location Clustering</h4>
		</div>
		<div className="p-6">
			<div className="mb-3">
				<div id="gmaps-basic" className="gmaps" style={{ position: 'relative', overflow: 'hidden' }}>
					<Map
						google={google}
						initialCenter={{  lat: 37.782, lng: -122.435  }}
						zoomControlOptions={{ position: google.maps.ControlPosition.LEFT_TOP }}
					>
						{activeLayers.yearly && (
							<HeatMap
								mapCenter={{  lat: 37.782, lng: -122.435 }}
								gradient={gradients.yearly}
								google={google}
								positions={heatMapData.yearly}
								radius={20}
								opacity={0.3}
							/>
						)}
						{activeLayers.monthly && (
							<HeatMap
								mapCenter={{  lat: 37.782, lng: -122.435  }}
								gradient={gradients.monthly}
								google={google}
								positions={heatMapData.monthly}
								radius={20}
								opacity={0.3}
							/>
						)}
					</Map>
				</div>
			</div>
			<div className="button-group">
				<center>
					<button onClick={() => handleToggleHeatMap('yearly')}>
						Toggle Yearly ({activeLayers.yearly ? 'On' : 'Off'})
					</button>
					<button onClick={() => handleToggleHeatMap('monthly')}>
						Toggle Monthly ({activeLayers.monthly ? 'On' : 'Off'})
					</button>
				</center>
			</div>
			<div className='mt-6'>
				
				<h2>Heatmap Analysis – Police Stops in San Francisco, CA</h2>
				<p>This heatmap highlights areas in San Francisco, CA where police stops are most concentrated. The intensity of the colors represents the frequency of stops, with redder areas showing higher activity.</p>
				<h3>Key Observations:</h3>
				<ul>
					<li><strong>Downtown San Francisco is the primary hotspot,</strong> particularly around <strong>Queen St and King St</strong>, where stops are most frequent.</li>
					<li><strong>Moderate activity extends</strong> toward <strong>E Vernon Ave and Mother Earth Motor Lodge</strong>, possibly due to higher traffic, businesses, or visitor activity.</li>
					<li><strong>Lower stop frequency</strong> is observed outside the central downtown region, with less enforcement or fewer incidents recorded.</li>
				</ul>
				<h3>Implications:</h3>
				<ul>
					<li>The <strong>high concentration of stops downtown</strong> may reflect enforcement efforts in business-heavy or high-traffic zones.</li>
					<li>The <strong>presence of stops near Mother Earth Motor Lodge</strong> suggests possible interactions in hospitality or tourism areas.</li>
					<li>Understanding these trends can help assess the <strong>impact of policing strategies, traffic control, and community concerns</strong> in these areas.</li>
				</ul>
				<p>This heatmap provides valuable insight into <strong>where stops occur most frequently in San Francisco</strong> and can inform discussions on law enforcement distribution and its effects on different parts of the city.</p>
			</div>
		</div>
	</div>
);
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

export { BasicGoogleMap, DarkStyledMap, MapWithMarkers, StreetViewMap, PolyLineMap, LightStyledMap, BasicHeatMap, LocClustHeatMap  }
