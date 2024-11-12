// components
import PageBreadcrumb from '../../../../components/PageBreadcrumb'

// maps
import WorldMap from './maps/WorldMap'
import UsaVectorMap from './maps/UsaVectorMap'
import RussiaVectorMap from './maps/RussiaVectorMap'
import ItalyVectorMap from './maps/ItalyVectorMap'
import IraqVectorMap from './maps/IraqVectorMap'
import SpainVectorMap from './maps/SpainVectorMap'
import CanadaVectorMap from './maps/CanadaVectorMap'

// data
import { worldMapOpts, usaMapOpts, spainMapOpts, canadaMapOpts, russiaMapOpts, italyMapOpts, iraqMapOpts } from './data'

const VectorMaps = () => {
	return (
		<>
			<PageBreadcrumb title="Vector Maps" subName="Maps" />
			<div className="grid lg:grid-cols-2 gap-6">
				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">World Vector Map</h4>

						<div className="mb-3">
							<WorldMap height="360px" width="100%" options={worldMapOpts} />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">USA Vector Map</h4>

						<div className="mb-3">
							<UsaVectorMap height="360px" width="100%" options={usaMapOpts} />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Russia Vector Map</h4>
						<div className="mb-3">
							<RussiaVectorMap height="300px" width="100%" options={russiaMapOpts} />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Canada Vector Map</h4>
						<div className="mb-3">
							<CanadaVectorMap height="300px" width="100%" options={canadaMapOpts} />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Italy Vector Map</h4>
						<div className="mb-3">
							<ItalyVectorMap height="300px" width="100%" options={italyMapOpts} />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Iraq Vector Map</h4>
						<div className="mb-3">
							<IraqVectorMap height="300px" width="100%" options={iraqMapOpts} />
						</div>
					</div>
				</div>

				<div className="card">
					<div className="p-6">
						<h4 className="card-title mb-4">Spain Vector Map</h4>
						<div className="mb-3">
							<SpainVectorMap height="300px" width="100%" options={spainMapOpts} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default VectorMaps
