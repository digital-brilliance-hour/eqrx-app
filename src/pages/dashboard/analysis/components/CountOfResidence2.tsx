import React, { useEffect, useState } from "react";
import * as XLSX from "xlsx";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface ResidenceCounts {
  resident: number;
  nonResident: number;
}

const CountOfResidence2: React.FC = () => {
  const [counts, setCounts] = useState<ResidenceCounts>({ resident: 0, nonResident: 0 });

  useEffect(() => {
	// yarn yarn add xlsx
	// place the sheet in the public folder for now
    // fetches the sheeet file from the public folder it didnt like were we currently have it
    fetch("/data.xlsx")
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        // read and parse the sheet from the array buffer
        const workbook = XLSX.read(buffer, { type: "array" });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        // converts the sheet to a 2d array with the first row as headers
        const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 }) as (string | number)[][];
        
        // ff there are no rows, exit early hopfully????
        if (!rows.length) return;
        
        const header = rows[0] as string[];
        // Locates the "Residence" column ****names are case sensitive***
        const residenceIndex = header.indexOf("Residence");
        if (residenceIndex === -1) {
          console.error('Column "Residence" not found in the Excel file.');
          return;
        }

        // initialize counters if theres nuthing in the cell then it should be 0
        let residentCount = 0;
        let nonResidentCount = 0;

        // process each row not including the headers
        rows.slice(1).forEach((row) => {
          const cellValue = row[residenceIndex];
          if (typeof cellValue === "string") {
            // normalizes the values for consistent comparison
            const normalized = cellValue.trim().toLowerCase();
            if (normalized === "resident") {
              residentCount++;
            } else if (normalized === "non-resident" || normalized === "nonresident") {
              nonResidentCount++;
            }
          }
        });

        setCounts({
          resident: residentCount,
          nonResident: nonResidentCount,
        });
      })
      .catch((error) => console.error("Error loading the sheet", error));
  }, []);

  const InforResPie: ApexOptions = {
    chart: { id: "ResidencePie" },
    labels: ["Non-Resident", "Resident"],
    legend: {
      position: "bottom" as const,
    },
    colors: ["#3e60d5","#EE4B2B"],
  };

  const series = [counts.resident, counts.nonResident];

  return (
	<div className="lg:col-span-3">
	<div className="card">
			<div className="p-6">
						<h4 className="card-title mb-4">Count Of Residence
						</h4>
						<div dir="ltr">
              <ReactApexChart className="apex-charts" options={InforResPie} height={320} series={series} type="pie" />
						</div>
						<br/>The data shows that 89.8% of juvenile contacts involved individuals who were residents, while only 10.2% were non-residents. This suggests that the majority of youth interactions with law enforcement are happening within the local community. The low percentage of non-resident contacts may indicate that most incidents involve youth who live in the area, pointing to localized enforcement activity and issues primarily affecting the resident population.
					</div>
				</div>
				</div>
  );
};

export default CountOfResidence2;