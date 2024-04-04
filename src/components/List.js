import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const routes = [
    '/navigations',
    '/signup-forms',
    '/signin-forms',
    '/contact-us',
    '/faqs',
    '/team-members',
    '/services',
    '/testimonials',
    '/pricings',
    '/portfolios',
    '/client-logos',
    '/hero-headers',
    '/features',
    '/call-to-actions',
    '/blogs',
    '/copyrights',
    '/about-us',
    '/buy-ticket-form',
    '/careers',
    '/coming-soon',
    '/contents',
    '/cookies',
    '/numbers',
    '/rich-contents',
    '/how-it-works',
    '/schedule',
    '/httpcodes',
    '/incentives',
    '/blogs-details',
    '/hero-headers-small',
    '/forms',
    '/footers',
    '/travel',
    '/eproduct-category',
    '/eproduct-cart',
    '/eproduct-feature',
    '/eproduct-grid',
    '/eproduct-list',
    '/eproduct-checkout',
    '/eproduct-overview',
    '/eproduct-quick-overview',
    '/eproduct-review',
    '/eproduct-specification',
    '/eproduct-order',
    '/e-order-history',
    '/eproduct-ranking',
    '/ecommerce-profile',
    '/eproduct-payment',
];

const List = () => {

    useEffect(() => {
        const sheet = document.createElement("link");
        sheet.rel = "stylesheet";
        sheet.href = "/css/bootstrap.min.css";
        sheet.type = "text/css";
        document.head.appendChild(sheet);
    }, []);

    return <div className='container'>
        <ul>
            {routes.map((route, i) => (
                <li key={i}>
                    <Link to={`/bootstrap${route}`}>{route}</Link>
                </li>
            ))}
        </ul>
    </div>;
};

export default List;
