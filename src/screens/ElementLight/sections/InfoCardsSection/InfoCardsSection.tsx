import React from "react";
import { ScrollStackCards } from "../../../../components/animations/ScrollStackCards";

const pic1 = "/src/photos/f21.jpg";
const pic2 = "/src/photos/f7.jpg";
const pic3 = "/src/photos/f8.jpeg";

export const InfoCardsSection = (): JSX.Element => {
  const cardsData = [
    {
      id: 1,
      title: "Unlock the Future of Carbon Trading",
      description: "Our platform is revolutionizing carbon credit trading by bringing transparency, integrity, and trust through blockchain technology. Every credit is securely verified and recorded, eliminating risks of fraud or duplication while ensuring accountability at each step.",
      secondaryDescription: "Users can easily track their contributions and see the real impact of the projects they support, from renewable energy to reforestation. This makes carbon offsetting not only reliable but also engaging, inspiring individuals and businesses to take meaningful action toward a sustainable future.",
      image: pic1,
      buttonText: "Learn More",
      layout: "left" as const,
    },
    {
      id: 2,
      title: "Empower Your Climate Action with Carbon Credits",
      description: "Join us in transforming the voluntary carbon market through transparency and integrity. Our blockchain-enabled platform makes it easy for you to buy, trade, and retire carbon credits from verified afforestation projects.",
      secondaryDescription: "Our platform makes it simple to buy, trade, and retire carbon credits sourced from verified afforestation projects. This ensures that your contributions directly support real, measurable climate action while building a sustainable future for generations to come.",
      image: pic2,
      buttonText: "Get Started",
      layout: "right" as const,
    },
    {
      id: 3,
      title: "Experience Effortless Trading and Retirement of Carbon Credits with Confidence",
      description: "Our platform makes trading and retiring carbon credits simple and seamless for everyone. By supporting verified projects and maintaining transparent processes, we ensure that your participation in climate action is both trustworthy and impactful.",
      secondaryDescription: "With every credit accounted for and traceable, you can confidently contribute to meaningful environmental change, knowing your efforts are making a real difference in building a sustainable future.",
      image: pic3,
      buttonText: "Trade Now",
      layout: "center" as const,
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-green-50/20 to-white">
      <ScrollStackCards 
        cards={cardsData}
        className="min-h-[300vh]"
      />
    </section>
  );
};