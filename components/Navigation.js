// components/Navigation.js

import Link from 'next/link';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/CheckoutPage">
            <span>Checkout</span>
          </Link>
        </li>
        {/* Add other navigation links */}
      </ul>
    </nav>
  );
};

export default Navigation;
