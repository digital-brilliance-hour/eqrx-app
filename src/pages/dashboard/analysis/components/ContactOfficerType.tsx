import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

const data = 'src/helpers/info/data.xlsx'

interface OffTypeCounts {
	SRO: number
	NO: number
}

const CountOffType: React.FC = () => {
	const [counts, setCounts] = useState<OffTypeCounts>({ SRO: 0, NO: 0 })

	useEffect(() => {
		// Fetch the Excel file from the public folder
		fetch(data)
			.then((res) => res.arrayBuffer())
			.then((buffer) => {
				// Parse the workbook from the array buffer
				const workbook = XLSX.read(buffer, { type: 'array' })
				const worksheet = workbook.Sheets[workbook.SheetNames[0]]
				// Convert the worksheet into a 2D array (with the first row as headers)
				const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as (string | number)[][]

				// If there are no rows, exit early.
				if (!rows.length) return

				const header = rows[0] as string[]
				// Locate the "OffType" column
				const offTypeIndex = header.indexOf('OffType')
				if (offTypeIndex === -1) {
					console.error('Column "OffType" not found in the Excel file.')
					return
				}

				let sroCount = 0
				let noCount = 0

				// Process each row (skip header) and count based on cell value
				rows.slice(1).forEach((row) => {
					const cellValue = row[offTypeIndex]
					if (typeof cellValue === 'string') {
						// Normalize the string to ensure consistent comparison
						const normalized = cellValue.trim().toUpperCase()
						if (normalized === 'SRO') {
							sroCount++
						} else if (normalized === 'NO') {
							noCount++
						}
					}
				})

				setCounts({
					SRO: sroCount,
					NO: noCount,
				})
			})
			.catch((error) => console.error('Error loading data.xlsx:', error))
	}, [])

	// Configure the pie chart options
	const officerTypePie: ApexOptions = {
		chart: { id: 'offtype-pie' },
		labels: ['SRO', 'NO'],
		legend: {
			position: 'bottom' as const,
		},
		// Define custom colors for each pie slice
		colors: ['#EE4B2B', '#3e60d5'],
	}

	// Series data array: counts for SRO and NO respectively
	const series = [counts.sro, counts.no]

	return (
		<div className="lg:col-span-3">
			<div className="card">
				<div className="p-6">
					<h4 className="card-title mb-4">Contact Officer Type</h4>
					<div dir="ltr">
						<ReactApexChart className="apex-charts" options={officerTypePie} height={320} series={series} type="pie" />
					</div>
					<br />
					The data shows that 86.9% of juvenile contacts were made by officers who are not School Resource Officers (SROs), while only 13.5% of contacts involved SROs. This large difference suggests that most juvenile interactions with law enforcement occur outside of school environments or that SROs play a limited role in overall youth-related policing. The disparity may also reflect staffing patterns, deployment priorities, or specific responsibilities assigned to SROs compared to other officers.
				</div>
			</div>
		</div>
	)
}

export default CountOffType
