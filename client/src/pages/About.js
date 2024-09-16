import React from "react";
import Layout from "./../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-10 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <p className="text-justify mt-2">
            The customization feature of the Urban Shop Platform is one of its
            standout aspects, enabling users to personalize and tailor products
            to fit their unique preferences. This feature is essential in a
            marketplace for custom or vintage items, as it offers buyers more
            control over their purchases. Here's a breakdown of how
            customization is implemented: Key Customization Aspects: Product
            Customization Options: Size: Users can select from various size
            options, especially for clothing or accessories. The platform
            provides clear size charts to assist with the correct selection.
            Color Variations: Many products come with customizable color
            schemes, where buyers can choose the specific color that suits their
            taste or needs. Material Choices: For certain products (e.g.,
            furniture or clothing), users can select from different material
            types, such as cotton, leather, or wood finishes.
            Engravings/Personalization: The platform allows users to add
            personal touches, such as engravings, monograms, or special messages
            on items like jewelry, notebooks, or other personalized goods.
            Interactive Customization Tools: Live Preview: Urban Shop provides a
            live preview tool, where users can see how the product looks with
            their selected customizations (e.g., color, size, or engraving).
            This real-time feedback helps customers make confident decisions.
            Drag-and-Drop Interface: For products that allow more intricate
            customization (e.g., designing your own sneakers or t-shirts), the
            platform offers a drag-and-drop interface where users can position
            elements like logos, patterns, or texts as they wish. Custom Orders:
            Users can directly contact sellers for bespoke orders, requesting
            entirely unique product specifications outside the standard options.
            The platform facilitates communication between the buyer and seller
            to clarify specific needs, provide mockups, and discuss the final
            design before proceeding with the order. Price Adjustments Based on
            Customizations: The pricing of a product dynamically adjusts based
            on the customizations selected. For example, certain materials,
            sizes, or engravings may come with additional costs, which are
            reflected in real-time as users make their choices. A breakdown of
            the customization costs is provided to ensure transparency in
            pricing. Benefits of Customization: Unique Products: Buyers can own
            truly one-of-a-kind items, designed to their specific tastes and
            preferences. Enhanced User Experience: The interactive nature of the
            customization tools makes the shopping experience more engaging and
            fun. Customer Satisfaction: By offering more control over the final
            product, the platform ensures higher customer satisfaction, as users
            receive products tailored to their liking. Technology Behind
            Customization: Frontend: Built using React to ensure smooth and
            responsive interactions, with Tailwind CSS for styling the
            customization components. Backend: The product configuration logic
            is handled by Next.js, ensuring that any customized selections are
            seamlessly integrated into the products final details at checkout.
            Dynamic Rendering: The platform uses real-time rendering techniques
            to display the users customizations instantly without long load
            times, creating a fluid and intuitive user experience. Future Plans
            for Customization: 3D Customization: The platform may introduce 3D
            models for certain products, allowing users to rotate and inspect
            their customized items from different angles. AI-driven Suggestions:
            To enhance customization, AI algorithms could recommend
            complementary colors, designs, or features based on the users past
            preferences or popular trends.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
