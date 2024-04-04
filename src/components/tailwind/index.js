import React, { Fragment, useEffect } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
// import "./tailwind.min.css";
import List from "../List";
import OptionBar from "../../optionBar/OptionBar";

// Categories
import Navigations from "./categories/Navigations";
import SignUpForms from "./categories/SignUpForms";
import SigninForms from "./categories/SigninForms";
import ContactUs from "./categories/ContactUs";
import Faqs from "./categories/Faqs";
import TeamMembers from "./categories/TeamMembers";
import Services from "./categories/Services";
import Testimonials from "./categories/Testimonials";
import Pricings from "./categories/Pricings";
import Portfolios from "./categories/Portfolios";
import ClientLogos from "./categories/ClientLogos";
import HeroHeaders from "./categories/HeroHeaders";
import Features from "./categories/Features";
import CallToActions from "./categories/CollToActions";
import Blogs from "./categories/Blogs";
import Copyrights from "./categories/Copyrights";
import AboutUs from "./categories/AboutUs";
import BuyTicket from "./categories/BuyTicket";
import Careers from "./categories/Careers";
import ComingSoon from "./categories/ComingSoon";
import Contents from "./categories/Contents";
import Cookies from "./categories/Cookies";
import EPCategory from "./categories/EPCategory";
import EPCart from "./categories/EPCart";
import EPFeature from "./categories/EPFeature";
import EPGrid from "./categories/EPGrid";
import EPList from "./categories/EPList";
import EPCheckout from "./categories/EPCheckout";
import EPOverview from "./categories/EPOverview";
import EPQOverview from "./categories/EPQOverview";
import EPReview from "./categories/EPReview";
import EPSpecification from "./categories/EPSpecification";
import EPOrder from "./categories/EPOrder";
import EOHistory from "./categories/EOHistory";
import Numbers from "./categories/Numbers";
import RichContents from "./categories/RichContents";
import HowItWorks from "./categories/HowItWorks";
import Schedule from "./categories/Schedule";
import HttpCodes from "./categories/HttpCodes";
import Incentives from "./categories/Incentives";
import BlogDetails from "./categories/BlogDetails";
import HeroHeaderSmall from "./categories/HeroHeaderSmall";
import Forms from "./categories/Forms";
import Footer from "./categories/Footer";
import EPRanking from "./categories/EPRanking";
import EProfile from "./categories/EProfile";
import EPPayment from "./categories/EPPayment";
import Travel from "./categories/Travel";

const TailwindRoutes = () => {
	const { url } = useRouteMatch();

	useEffect(() => {
		const sheet = document.createElement("link");
		sheet.rel = "stylesheet";
		sheet.href = "/css/tailwind.min.css";
		sheet.type = "text/css";
		document.head.appendChild(sheet);
	}, []);

	return (
		<Fragment>
			<OptionBar />

			<Switch>
				{/*
				 * UI Blocks
				 */}
				<Route path={`${url}/navigations`} component={Navigations} />
				<Route path={`${url}/signup-forms`} component={SignUpForms} />
				<Route path={`${url}/signin-forms`} component={SigninForms} />
				<Route path={`${url}/contact-us`} component={ContactUs} />
				<Route path={`${url}/faqs`} component={Faqs} />
				<Route path={`${url}/team-members`} component={TeamMembers} />
				<Route path={`${url}/services`} component={Services} />
				<Route path={`${url}/testimonials`} component={Testimonials} />
				<Route path={`${url}/pricings`} component={Pricings} />
				<Route path={`${url}/portfolios`} component={Portfolios} />
				<Route path={`${url}/client-logos`} component={ClientLogos} />
				<Route path={`${url}/hero-headers`} component={HeroHeaders} />
				<Route path={`${url}/features`} component={Features} />
				<Route path={`${url}/call-to-actions`} component={CallToActions} />
				<Route path={`${url}/blogs`} component={Blogs} />
				<Route path={`${url}/copyrights`} component={Copyrights} />
				<Route path={`${url}/about-us`} component={AboutUs} />
				<Route path={`${url}/buy-ticket-form`} component={BuyTicket} />
				<Route path={`${url}/careers`} component={Careers} />
				<Route path={`${url}/coming-soon`} component={ComingSoon} />
				<Route path={`${url}/contents`} component={Contents} />
				<Route path={`${url}/cookies`} component={Cookies} />
				<Route path={`${url}/numbers`} component={Numbers} />
				<Route path={`${url}/rich-contents`} component={RichContents} />
				<Route path={`${url}/how-it-works`} component={HowItWorks} />
				<Route path={`${url}/schedule`} component={Schedule} />
				<Route path={`${url}/httpcodes`} component={HttpCodes} />
				<Route path={`${url}/incentives`} component={Incentives} />
				<Route path={`${url}/blogs-details`} component={BlogDetails} />
				<Route path={`${url}/hero-headers-small`} component={HeroHeaderSmall} />
				<Route path={`${url}/forms`} component={Forms} />
				<Route path={`${url}/footers`} component={Footer} />
				<Route path={`${url}/travel`} component={Travel} />

				{/*
				 * Ecommerce
				 */}
				<Route path={`${url}/eproduct-category`} component={EPCategory} />
				<Route path={`${url}/eproduct-cart`} component={EPCart} />
				<Route path={`${url}/eproduct-feature`} component={EPFeature} />
				<Route path={`${url}/eproduct-grid`} component={EPGrid} />
				<Route path={`${url}/eproduct-list`} component={EPList} />
				<Route path={`${url}/eproduct-checkout`} component={EPCheckout} />
				<Route path={`${url}/eproduct-overview`} component={EPOverview} />
				<Route
					path={`${url}/eproduct-quick-overview`}
					component={EPQOverview}
				/>
				<Route path={`${url}/eproduct-review`} component={EPReview} />
				<Route
					path={`${url}/eproduct-specification`}
					component={EPSpecification}
				/>
				<Route path={`${url}/eproduct-order`} component={EPOrder} />
				{/* TODO: check this category */}
				<Route path={`${url}/e-order-history`} component={EOHistory} />
				<Route path={`${url}/eproduct-ranking`} component={EPRanking} />
				<Route path={`${url}/ecommerce-profile`} component={EProfile} />
				<Route path={`${url}/eproduct-payment`} component={EPPayment} />

				<Route path={`${url}/`} component={List} />
			</Switch>
		</Fragment>
	);
};

export default TailwindRoutes;
