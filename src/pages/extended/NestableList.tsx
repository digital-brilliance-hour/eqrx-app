import { useState } from 'react'
import { ReactSortable } from 'react-sortablejs'

// compnents
import { PageBreadcrumb } from '../../components'

// images
import avatar1 from '@/assets/images/users/avatar-1.jpg'
import avatar2 from '@/assets/images/users/avatar-2.jpg'
import avatar3 from '@/assets/images/users/avatar-3.jpg'
import avatar4 from '@/assets/images/users/avatar-4.jpg'
import avatar5 from '@/assets/images/users/avatar-5.jpg'
import avatar7 from '@/assets/images/users/avatar-7.jpg'

interface ItemType {
	id: number
	variant: string
	class?: string
}

interface TeamMemberType {
	id: number
	name: string
	avatar: string
	position: string
	desc?: string
}

function getNestableItems(count: number) {
	return Array(count)
		.fill({ id: 0 })
		.map((item, idx) => item.id + idx + 1)
}

const ListMovable = ({ item }: { item: number }) => {
	return <div className="rounded cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-600">Item {item}</div>
}

const ListMovable2 = ({ item, classname }: { item: number; classname: string }) => {
	return <div className={`${item === 2 ? `${classname} bg-danger text-white font-bold` : ''} rounded cursor-grab px-6 py-3 border border-gray-200 dark:border-gray-600`}>Item {item}</div>
}

const MovableCard = ({ item }: { item: ItemType }) => {
	return (
		<div className={`bg-${item.variant} text-white rounded-md`}>
			<div className="p-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
				<footer>
					Someone famous in <cite title="Source Title">Source Title</cite>
				</footer>
			</div>
		</div>
	)
}

const MovableCard2 = ({ item }: { item: TeamMemberType }) => {
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex items-start">
					<img src={item.avatar} alt="image" className="me-3 h-12 w-12 rounded-full" />
					<div className="flex-grow overflow-hidden">
						<h5 className="mb-1 mt-0">{item.name}</h5>
						<p className="mb-2"> {item.position} </p>
						<p>
							<span className="italic">
								<b>"</b>
								{item.desc}
							</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

const MovableCard3 = ({ item }: { item: TeamMemberType }) => {
	return (
		<div className="card">
			<div className="p-6">
				<div className="flex items-start">
					<img src={item.avatar} alt="image" className="me-3 h-12 w-12 rounded-full" />
					<div className="flex-grow overflow-hidden">
						<h5 className="my-1">{item.name}</h5>
						<p> {item.position} </p>
					</div>
					<span className="ri-drag-move-2-fill text-lg handle cursor-grab dragula-handle"></span>
				</div>
			</div>
		</div>
	)
}

const SimpleDragAndDrop = () => {
	const [items, setItems] = useState<ItemType[]>([
		{
			id: 1,
			variant: 'primary',
		},
		{
			id: 2,
			variant: 'secondary',
		},
		{
			id: 3,
			variant: 'success',
		},
		{
			id: 4,
			variant: 'info',
			class: 'text-xs-center',
		},
		{
			id: 5,
			variant: 'warning',
			class: 'text-xs-center',
		},
		{
			id: 6,
			variant: 'danger',
			class: 'text-xs-center',
		},
	])
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Simple Drag and Drop Example (Grid)</h4>

				<ReactSortable className="grid md:grid-cols-3 gap-6" easing="ease" list={items} setList={setItems}>
					{(items || []).map((item, idx) => (
						<MovableCard key={idx} item={item} />
					))}
				</ReactSortable>
			</div>
		</div>
	)
}

const SharedList = () => {
	const [team1, setTeam1] = useState<TeamMemberType[]>([
		{
			id: 1,
			name: 'Louis K. Bond',
			avatar: avatar7,
			position: 'Founder & CEO',
			desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
		},
		{
			id: 2,
			name: 'Dennis N. Cloutier',
			avatar: avatar1,
			position: 'Software Engineer',
			desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
		},
		{
			id: 3,
			name: 'Susan J. Sander',
			avatar: avatar2,
			position: 'Web Designer',
			desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
		},
	])

	const [team2, setTeam2] = useState<TeamMemberType[]>([
		{
			id: 1,
			name: 'James M. Short',
			avatar: avatar3,
			position: 'Web Developer',
			desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
		},
		{
			id: 2,
			name: 'Gabriel J. Snyder',
			avatar: avatar4,
			position: 'Business Analyst',
			desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
		},
		{
			id: 3,
			name: 'Louie C. Mason',
			avatar: avatar5,
			position: 'Human Resources',
			desc: "Disrupt pork belly poutine, asymmetrical tousled succulents selfies. You probably haven't heard of them tattooed master cleanse live-edge keffiyeh.",
		},
	])
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Move stuff between containers (Shared lists)</h4>
				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-light p-4 rounded-md dark:bg-gray-700">
						<h5 className="mb-3">Part 1</h5>

						<ReactSortable group="teamList" list={team1} setList={setTeam1} className="space-y-3 h-full">
							{(team1 || []).map((item, idx) => (
								<MovableCard2 key={idx} item={item} />
							))}
						</ReactSortable>
					</div>

					<div className="bg-light p-4 rounded-md dark:bg-gray-700">
						<h5 className="mb-3">Part 2</h5>

						<ReactSortable group="teamList" list={team2} setList={setTeam2} className="space-y-3 h-full">
							{(team2 || []).map((item, idx) => (
								<MovableCard2 key={idx} item={item} />
							))}
						</ReactSortable>
					</div>
				</div>
			</div>
		</div>
	)
}

const MoveWithHandle = () => {
	const [part1, setPart1] = useState<TeamMemberType[]>([
		{
			id: 1,
			name: 'Louis K. Bond',
			avatar: avatar7,
			position: 'Founder & CEO',
		},
		{
			id: 2,
			name: 'Dennis N. Cloutier',
			avatar: avatar1,
			position: 'Software Engineer',
		},
		{
			id: 3,
			name: 'Susan J. Sander',
			avatar: avatar2,
			position: 'Web Designer',
		},
	])

	const [part2, setPart2] = useState<TeamMemberType[]>([
		{
			id: 1,
			name: 'James M. Short',
			avatar: avatar3,
			position: 'Web Developer',
		},
		{
			id: 2,
			name: 'Gabriel J. Snyder',
			avatar: avatar4,
			position: 'Business Analyst',
		},
		{
			id: 3,
			name: 'Louie C. Mason',
			avatar: avatar5,
			position: 'Human Resources',
		},
	])
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Move stuff between containers using handle</h4>

				<div className="grid md:grid-cols-2 gap-6">
					<div className="bg-light p-4 rounded-md dark:bg-gray-700">
						<h5 className="mb-3">Part 1</h5>
						<ReactSortable group="teamList2" handle=".dragula-handle" list={part1} setList={setPart1} className="space-y-3 h-full">
							{(part1 || []).map((item, idx) => (
								<MovableCard3 key={idx} item={item} />
							))}
						</ReactSortable>
					</div>

					<div className="bg-light p-4 rounded-md dark:bg-gray-700">
						<h5 className="mb-3">Part 2</h5>
						<div id="moveHandle-right" className="space-y-3 h-full">
							<ReactSortable group="teamList2" handle=".dragula-handle" list={part2} setList={setPart2} className="space-y-3 h-full">
								{(part2 || []).map((item, idx) => (
									<MovableCard3 key={idx} item={item} />
								))}
							</ReactSortable>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const SimpleList = () => {
	const [items, setItems] = useState(() => getNestableItems(6))

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Simple list example</h4>

				<ReactSortable className="flex flex-col gap-3" id="example1" easing="ease" list={items} setList={setItems}>
					{(items || []).map((item, idx) => (
						<ListMovable item={Number(item)} key={idx} />
					))}
				</ReactSortable>
			</div>
		</div>
	)
}

const CloningList = () => {
	const [items1, setItems1] = useState(() => getNestableItems(6))

	const [items2, setItems2] = useState(() => getNestableItems(6))
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Cloning</h4>

				<div className="grid md:grid-cols-2 gap-5">
					<ReactSortable
						className="flex flex-col gap-3"
						list={items1}
						setList={setItems1}
						group={{
							name: 'grouping',
							pull: 'clone',
							put: true,
						}}
						sort={false}
					>
						{(items1 || []).map((item, idx) => (
							<ListMovable key={idx} item={Number(item)} />
						))}
					</ReactSortable>
					<ReactSortable
						group={{
							name: 'grouping',
							pull: 'clone',
							put: true,
						}}
						className="flex flex-col gap-3"
						list={items2}
						setList={setItems2}
						sort={true}
					>
						{(items2 || []).map((item, idx) => (
							<ListMovable key={idx} item={Number(item)} />
						))}
					</ReactSortable>
				</div>
			</div>
		</div>
	)
}

const DisableSorting = () => {
	const [items1, setItems1] = useState(() => getNestableItems(6))

	const [items2, setItems2] = useState(() => getNestableItems(6))
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Disabling Sorting</h4>

				<div className="grid md:grid-cols-2 gap-5">
					<ReactSortable group="teamList" className="flex flex-col gap-3" easing="ease" list={items1} setList={setItems1}>
						{(items1 || []).map((item, idx) => (
							<ListMovable key={idx} item={Number(item)} />
						))}
					</ReactSortable>

					<ReactSortable group="teamList" className="flex flex-col gap-3" easing="ease" list={items2} setList={setItems2} disabled>
						{(items2 || []).map((item, idx) => (
							<ListMovable key={idx} item={Number(item)} />
						))}
					</ReactSortable>
				</div>
			</div>
		</div>
	)
}

const FilterList = () => {
	const [items1, setItems1] = useState(() => getNestableItems(6))
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-4">Filter</h4>

				<ReactSortable className="flex flex-col gap-3" filter={'.static'} id="example1" easing="ease" list={items1} setList={setItems1}>
					{(items1 || []).map((item, idx) => (
						<ListMovable2 item={Number(item)} key={idx} classname={'static'} />
					))}
				</ReactSortable>
			</div>
		</div>
	)
}

const NestableList = () => {
	return (
		<>
			<PageBreadcrumb title="Nestable" subName="Extended UI" />
			<div className="flex flex-col gap-6">
				<SimpleDragAndDrop />
				<SharedList />
				<MoveWithHandle />
				<SimpleList />
				<CloningList />
				<DisableSorting />
				<FilterList />
			</div>
		</>
	)
}

export default NestableList
