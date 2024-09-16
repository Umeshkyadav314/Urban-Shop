import React from "react";
import Layout from "./../components/Layout/Layout.js";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus " style={{ marginTop: "3.7%" }}>
        <div className="col-md-12 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%", marginTop: "10px" }}
          />
        </div>
        <div className="col-md-10" style={{ marginTop: "3.7%" }}>
          <ol>
            <li>
              <h4> Privacy Policy : </h4>
              <p>
                We value your privacy and are committed to protecting your
                personal information. Our Privacy Policy explains how we
                collect, use, and safeguard your data.
              </p>
              <ul>
                <li>
                  <span>Data Collection: </span>
                  <span>
                    We collect personal information such as name, email, and
                    contact details during registration. Additional data like
                    payment information is collected during transactions.
                  </span>
                </li>
                <li>
                  <span>Usage of Information: </span>
                  <span>
                    Your data is used to enhance your shopping experience,
                    process transactions, and provide customer support. We never
                    share your personal information with third parties without
                    your consent.
                  </span>
                </li>
                <li>
                  <span> Security Measures: </span>
                  <span>
                    We use encryption and secure authentication systems, such as
                    Kinde, to protect your data.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4> Product Listing and Customization Policy :</h4>
              <p>
                Urban Shop allows sellers to offer custom or vintage products.
                Our Product Listing and Customization Policy ensures that
                products meet our quality and accuracy standards.
              </p>
              <ul>
                <li>
                  <span>Accurate Descriptions: </span>
                  <span>
                    Sellers must provide detailed and accurate descriptions of
                    their products, including material, size, and customization
                    options.
                  </span>
                </li>
                <li>
                  <span>ustomization Options: </span>
                  <span>
                    Sellers must clearly outline any customization possibilities
                    (e.g., color, size, engravings) and their costs. Buyers will
                    receive live previews of their customizations.
                  </span>
                </li>
                <li>
                  <span>Misrepresentation:</span>
                  <span>
                    Any misrepresentation of the product or customization will
                    result in the removal of the listing and may lead to
                    suspension of the seller’s account.
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <h4> Payment and Transaction Policy :</h4>
              <p>
                To ensure safe and secure transactions, Urban Shop has
                implemented the following payment and transaction guidelines:
              </p>
              <ul>
                <li>
                  <span> Accepted Payment Methods: </span>
                  <span>
                    We accept major credit cards, debit cards, and secure online
                    payment platforms (e.g., PayPal, Stripe).
                  </span>
                </li>
                <li>
                  <span> Transaction Security: </span>
                  <span>
                    All transactions are protected using industry-standard
                    encryption to safeguard your financial information.
                  </span>
                </li>
                <li>
                  <span>Refunds and Returns:</span>
                  <span>
                    Refunds are accepted within 14 days of delivery, provided
                    the product is in its original condition. Return shipping
                    costs may apply.
                  </span>
                </li>
                <li>
                  <span>Order Cancellation:</span>
                  <span>
                    Orders can be canceled within 24 hours of purchase. Custom
                    product orders cannot be canceled once customization has
                    begun.
                  </span>
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
