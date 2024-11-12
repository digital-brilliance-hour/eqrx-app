import { useState } from 'react'

// Components
import { PageBreadcrumb } from '../../components'
import { Collapse } from '../../components/FrostUI'

const DefaultAccordions = () => {
	const [basicAccordion, setBasicAccordion] = useState<number | null>(0)

	const handleBasicAccordion = (index: number) => () => {
		if (index === basicAccordion) setBasicAccordion(null)
		else setBasicAccordion(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Default Accordion</h4>

				<div className="border divide-y border-collapse dark:divide-gray-700 dark:border-gray-700 rounded-md">
					<Collapse open={basicAccordion == 0} toggleCollapse={handleBasicAccordion(0)}>
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Accordion Item #1</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className=" w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
							</div>
						</Collapse.Menu>
					</Collapse>

					<Collapse open={basicAccordion == 1} toggleCollapse={handleBasicAccordion(1)}>
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Accordion Item #2</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
							</div>
						</Collapse.Menu>
					</Collapse>

					<Collapse open={basicAccordion == 2} toggleCollapse={handleBasicAccordion(2)}>
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Accordion Item #3</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
							</div>
						</Collapse.Menu>
					</Collapse>
				</div>
			</div>
		</div>
	)
}

const FlushAccordion = () => {
	const [flushAccordion, setFlushAccordion] = useState<number | null>(0)

	const handleFlushAccordion = (index: number) => () => {
		if (index === flushAccordion) setFlushAccordion(null)
		else setFlushAccordion(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Flush Accordions</h4>

				<div className="pt-5">
					<div className="divide-y dark:divide-gray-700">
						<Collapse open={flushAccordion === 0} toggleCollapse={handleFlushAccordion(0)}>
							<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #1</span>
								<span className="ri-add-line text-lg block"></span>
								<span className="ri-subtract-line text-lg"></span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</Collapse>
						<Collapse open={flushAccordion === 1} toggleCollapse={handleFlushAccordion(1)}>
							<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #2</span>
								<span className="ri-add-line text-lg block"></span>
								<span className="ri-subtract-line text-lg"></span>
							</Collapse.Toggle>
							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</Collapse>
						<Collapse open={flushAccordion === 2} toggleCollapse={handleFlushAccordion(2)}>
							<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #3</span>
								<span className="ri-add-line text-lg block"></span>
								<span className="ri-subtract-line text-lg"></span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="py-4 px-5">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</Collapse>
					</div>
				</div>
			</div>
		</div>
	)
}

const SimpleCardAccordion = () => {
	const [cardAccordion, setCardAccordion] = useState<number | null>(0)

	const handleCardAccordion = (index: number) => () => {
		if (index === cardAccordion) setCardAccordion(null)
		else setCardAccordion(index)
	}

	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Simple Card Accordion</h4>
				<div className="pt-5">
					<div className="space-y-3">
						<div className="card">
							<Collapse open={cardAccordion === 0} toggleCollapse={handleCardAccordion(0)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #1
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>
								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
										<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>

						<div className="card">
							<Collapse open={cardAccordion === 1} toggleCollapse={handleCardAccordion(1)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #2
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>
								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
										<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>

						<div className="card">
							<Collapse open={cardAccordion === 2} toggleCollapse={handleCardAccordion(2)}>
								<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left transition text-gray-500 dark:text-gray-200">
									Collapsible Group Item #3
									<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
								</Collapse.Toggle>

								<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
									<div className="py-4 px-5">
										<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
									</div>
								</Collapse.Menu>
							</Collapse>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const AlwaysOpenAccordion = () => {
	const [isOpen, setIsOpen] = useState<boolean>(true)

	function handlerAccordion() {
		setIsOpen(!isOpen)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">Always Open Accordions</h4>

				<div className="pt-5">
					<Collapse open={isOpen} toggleCollapse={handlerAccordion} className="border divide-y rounded-md dark:border-gray-700 dark:divide-gray-700">
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Accordion Item #1</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
							</div>
						</Collapse.Menu>
					</Collapse>
					<Collapse>
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Accordion Item #2</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
							</div>
						</Collapse.Menu>
					</Collapse>

					<Collapse>
						<Collapse.Toggle openClass="text-primary bg-primary/10" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-sm font-medium text-left transition text-gray-500 dark:text-gray-200">
							<span>Accordion Item #3</span>
							<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
						</Collapse.Toggle>

						<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
							<div className="py-4 px-5">
								<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
							</div>
						</Collapse.Menu>
					</Collapse>
				</div>
			</div>
		</div>
	)
}

const IconAccordion = () => {
	const [iconAccordion, setIconAccordion] = useState<number | null>(0)

	const handleIconAccordion = (index: number) => () => {
		if (index === iconAccordion) setIconAccordion(null)
		else setIconAccordion(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">With Icon</h4>

				<div className="pt-5 space-y-3">
					<Collapse open={iconAccordion === 0} toggleCollapse={handleIconAccordion(0)}>
						<div className="rounded-md border border-gray-200 dark:border-gray-700">
							<Collapse.Toggle openClass="text-primary" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-left font-medium transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #1</span>
								<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="border-t py-4 px-5 border-gray-200 dark:border-gray-700">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</div>
					</Collapse>

					<Collapse open={iconAccordion === 1} toggleCollapse={handleIconAccordion(1)}>
						<div className="rounded-md border border-gray-200 dark:border-gray-700">
							<Collapse.Toggle openClass="text-primary" className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-left font-medium transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #2</span>
								<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="border-t py-4 px-5 border-gray-200 dark:border-gray-700">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</div>
					</Collapse>

					<Collapse open={iconAccordion === 2} toggleCollapse={handleIconAccordion(2)}>
						<div className="rounded-md border border-gray-200 dark:border-gray-700">
							<Collapse.Toggle className="py-2 px-5 inline-flex items-center justify-between gap-x-3 w-full text-left font-medium transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #3</span>
								<span className="ri-arrow-down-s-line text-xl block transition-all"></span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="border-t py-4 px-5 border-gray-200 dark:border-gray-700">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</div>
					</Collapse>
				</div>
			</div>
		</div>
	)
}

const NoArrowAccordion = () => {
	const [noArrowAccordion, setNoArrowAccordion] = useState<number | null>(0)

	const handleNoArrowAccordion = (index: number) => () => {
		if (index === noArrowAccordion) setNoArrowAccordion(null)
		else setNoArrowAccordion(index)
	}
	return (
		<div className="card">
			<div className="p-6">
				<h4 className="card-title mb-1">No arrow</h4>

				<div className="pt-5 space-y-3">
					<Collapse open={noArrowAccordion === 0} toggleCollapse={handleNoArrowAccordion(0)}>
						<div className="rounded-md border border-gray-200 dark:border-gray-700">
							<Collapse.Toggle openClass="text-primary" className="py-3 px-5 inline-flex items-center justify-between gap-x-3 w-full text-left font-medium transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #1</span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="border-t py-4 px-5 border-gray-200 dark:border-gray-700">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</div>
					</Collapse>

					<Collapse open={noArrowAccordion === 1} toggleCollapse={handleNoArrowAccordion(1)}>
						<div className="rounded-md border border-gray-200 dark:border-gray-700">
							<Collapse.Toggle openClass="text-primary" className="py-3 px-5 inline-flex items-center justify-between gap-x-3 w-full text-left font-medium transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #2</span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="border-t py-4 px-5 border-gray-200 dark:border-gray-700">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</div>
					</Collapse>

					<Collapse open={noArrowAccordion === 2} toggleCollapse={handleNoArrowAccordion(2)}>
						<div className="rounded-md border border-gray-200 dark:border-gray-700">
							<Collapse.Toggle openClass="text-primary" className="py-3 px-5 inline-flex items-center justify-between gap-x-3 w-full text-left font-medium transition text-gray-500 dark:text-gray-200">
								<span>Accordion Item #3</span>
							</Collapse.Toggle>

							<Collapse.Menu className="w-full overflow-hidden transition-[height] duration-300">
								<div className="border-t py-4 px-5 border-gray-200 dark:border-gray-700">
									<p className="text-gray-800 dark:text-gray-200">Tailwind CSS offers a seamless way to build modern websites without having to leave your HTML. The framework functions by scanning all of your HTML files, JavaScript components, and templates for class names, automatically generating corresponding styles, and writing them to a static CSS file. This approach is fast, flexible, and reliable, requiring zero runtime. Whether you need to create form layouts, tables, or modal dialogs, Tailwind CSS provides everything necessary to design beautiful, responsive web applications. Additionally, the framework includes checkout forms, shopping carts, and product views, making it the ideal choice for developing your next e-commerce front-end.</p>
								</div>
							</Collapse.Menu>
						</div>
					</Collapse>
				</div>
			</div>
		</div>
	)
}
const Accordions = () => {
	return (
		<>
			<PageBreadcrumb title="Accordion" subName="Base UI" />
			<div className="grid 2xl:grid-cols-2 gap-6">
				<DefaultAccordions />
				<FlushAccordion />
				<SimpleCardAccordion />
				<AlwaysOpenAccordion />
				<IconAccordion />
				<NoArrowAccordion />
			</div>
		</>
	)
}

export default Accordions
