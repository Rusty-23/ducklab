"use client";
import { useState } from "react";
import FeatureCardIcon from "@/components/feature-card-icon";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="mt-12">
          <div className="flex flex-wrap justify-between">
            <FeatureCardIcon
              label="Users"
              value="2,300"
              color="blue"
              icon="people"
              description="See details"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <FeatureCardIcon
              label="Professors"
              value="1,200"
              color="green"
              icon="shopping_cart"
              description="See details"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <FeatureCardIcon
              label="Lectures"
              value="3,200"
              color="orange"
              icon="inventory_2"
              description="See details"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
            <FeatureCardIcon
              label="Certificates"
              value="2,300"
              color="purple"
              icon="trending_up"
              description="See details"
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </div>
        </div>
      );
}
