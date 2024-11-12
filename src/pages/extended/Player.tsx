import Plyr from 'plyr-react'

// components
import { PageBreadcrumb } from '../../components'

// style
import 'plyr-react/plyr.css'

interface videocontent {
	id: string
	source: 'youtube' | 'vimeo'
}

const contents: videocontent[] = [
	{
		id: 'PrUxWZiQfy4',
		source: 'youtube',
	},
	{
		id: '693155895',
		source: 'vimeo',
	},
]

const Player = () => {
	return (
		<>
			<PageBreadcrumb title="Player" subName="Extended UI" />
			<div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
				{(contents || []).map((video, idx) => {
					return (
						<div key={idx} className="card overflow-hidden">
							<div className="p-6">
								<h4 className="card-title mb-4">{video.source.charAt(0).toUpperCase() + video.source.slice(1)} Player</h4>

								<div className="rounded-xl overflow-hidden">
									<Plyr
										source={{
											type: 'video',
											sources: [
												{
													src: video.id,
													provider: video.source,
												},
											],
										}}
									/>
								</div>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Player
