import React from "react";
import SectionHeaders from "./SectionHeaders";
import ProductPlanCards from "./ProductPlanCards";

function ProductPlan() {
  const productPlanList = [
    {
      type: "Personal",
      amount: 5,
      list: ["1 project", "Analytics", "Insights Panel", "Share Features"],
    },
    {
      type: "Pro",
      amount: 9,
      list: [
        "2 projects",
        "Analytics",
        "Insights Panel",
        "Share Features",
        "Unlimited tasks and projects",
        "50GB storage",
        "Integrations",
        "Priority support",
        "Advanced support",
      ],
    },
    {
      type: "Business",
      amount: 19,
      list: [
        "Up to 5 project member",
        "Analytics",
        "Insights Panel",
        "Share Features",
        "Share 200GB storage",
        "Integrations",
        "Dedicated account manager",
        "Custom fields",
        "Advanced analytics",
        "Export capabilities",
        "API access",
        "Advanced security features",
      ],
    },
  ];

  return (
    <div className="bg-proctplan-gradient" id="pricing">
      <div
        className="container px-8 py-15 m-auto max-w-300 max-h-min flex flex-col justify-center items-center text-center text-white 
      "
      >
        <SectionHeaders
          topHeader={"Streamlined for easy"}
          bottomHeader={"management"}
          desc={
            "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
          }
        />

        <div className="plans flex flex-col items-center justify-center text-left gap-6 self-stretch lg:flex-row lg:items-start  ">
          <ProductPlanCards productPlanList={productPlanList} />
        </div>
      </div>
    </div>
  );
}

export default ProductPlan;
