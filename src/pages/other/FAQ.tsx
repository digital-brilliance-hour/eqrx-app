// components
import { PageBreadcrumb } from '../../components'

const FAQPages = () => {
	return (
		<>
			<PageBreadcrumb title="FAQ" subName="Extra Pages" />
			<div className="card sm:p-24 p-10">
				<div className="flex items-center justify-center mb-16">
					<div className="max-w-xl text-center">
						<h1 className="text-xl font-semibold mb-5">Frequently Asked Questions</h1>
						<p>Do you have a question about your subscription, a recent order, products, shipping or you want to suggest a new magazine? Here you can find some helpful answers to frequently asked questions (FAQ).</p>
						<div className="flex items-center justify-center gap-2 mt-6">
							<button type="button" className="btn bg-success text-white">
								<i className="ri-mail-line me-1"></i> Email us your question
							</button>
							<button type="button" className="btn bg-info text-white">
								<i className="ri-twitter-line me-1"></i> Send us a tweet
							</button>
						</div>
					</div>
				</div>

				<div className="grid lg:grid-cols-2 gap-6">
					<div className="space-y-2">
						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">What does LOREM mean?</h4>
								<p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisici elit…’ (complete text) is dummy text that is not meant to mean anything. It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document.</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">Where can I subscribe to your newsletter?</h4>
								<p className="mb-4">We often send out our newsletter with news and great offers. We will never disclose your data to third parties and you can unsubscribe from the newsletter at any time. Subscribe here to our newsletter.</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">Where can I edit my billing and shipping address?</h4>
								<p className="mb-4">If you created a new account after or while ordering you can edit both addresses (for billing and shipping) in your customer account.</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">Can I order a free sample copy of a magazine?</h4>
								<p className="mb-4">Unfortunately, we’re unable to offer free samples. As a retailer, we buy all magazines from their publishers at the regular trade price. However, you could contact the publisher directly.</p>
							</div>
						</div>
					</div>

					<div className="space-y-2">
						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">Are unsold magazines sent back to the publisher?</h4>
								<p className="mb-4">We usually sell all copies of the magazines offered in our shop. Some publishers and distributors offer the retailer the option of returning any unsold magazines. However, because our range includes magazines from countries such as Australia, the USA and the United Kingdom.</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">When can be used?</h4>
								<p className="mb-4">We receive up to 20 enquiries per week from publishers all around the world. Because we can’t always respond to each one right away, all enquiries are checked and answered in chronological order.</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">License & Copyright</h4>
								<p className="mb-4">Wow, we’re happy to see more of your great publication. Please find our address on the contact page.</p>
							</div>
						</div>

						<div className="flex gap-4">
							<div className="text-primary font-semibold">
								<p className="flex items-center justify-center w-7 h-7 bg-primary/20 rounded-full">Q.</p>
							</div>
							<div>
								<h4 className="mb-2">Do I have to pay customs or import fees?</h4>
								<p className="mb-4">In some countries import fees/taxes may apply to your order. They will be charged from your the carrier or local post service. Please note: We are not responsible for any customs and duties charged to a customer.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FAQPages
