import React, { useEffect, useState } from "react";
import styles from "../Product/product.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  toggleSection,
  getProduct,
} from "../../redux/ShoppingProducts/action";
import { CollapsibleSection } from "./CollapsibleSection";
import SizeAndCart from "../Buttons/SizeAndCart";

const Product = () => {
  const dispatch = useDispatch();

  const { products, loading, error, toggleStates } = useSelector(
    (state) => state.ProductReducer
  );
  const { id } = useParams();
  const product = products.find((item) => item.id === id) || {};

  const productToggleState = toggleStates[id] || {};

  useEffect(() => {
    // Load all products first if they're not already loaded
    if (products.length === 0) {
      dispatch(getProduct());
    }
    
    // Then fetch the specific product
    dispatch(fetchProducts(id));
  }, [id, dispatch, products.length]);

  const {
    showDetails = false,
    showFeatures = false,
    showComposition = false,
    showDelivery = false,
  } = productToggleState;

  const details = product.details || {};
  const features = product.features || {};
  const composition = product.composition || {};
  const delivery = product.delivery || {};

  if (!product || Object.keys(product).length === 0)
    return <p>No product found.</p>;

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error loading product.</h1>;
  if (!product) return <p>Loading product...</p>;
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <img
          src={`/${product.image}`}
          className={styles.productImg}
          alt={product.title}
        />
        <div className={`text-start ${styles.item}`}>
          <h4>{product.title}</h4>
          <hr className="w-100" />
          <p className={styles.paragraph}>
            You will earn <b>{product.description}</b> with this product
          </p>
          <hr className="w-100" />

          <SizeAndCart
            sizes={Object.values(product.size || {})}
            price={product.price}
            product={product}
          />

          <hr className="w-100 mt-4 bg-gray" />

          {/* Collapsible Sections */}
          <CollapsibleSection
            title="The Details"
            isOpen={showDetails}
            toggle={() => dispatch(toggleSection(id, "showDetails"))}
          >
            <div>
              {details.p1 && <p>{details.p1}</p>}
              <div>
                {details.p2 && (
                  <p>
                    <strong className={`pt-2 ${styles.strong}`}>
                      {details.sideHeading || ""}
                    </strong>{" "}
                    {details.p2}
                  </p>
                )}
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection
            title="Core Features"
            isOpen={showFeatures}
            toggle={() => dispatch(toggleSection(id, "showFeatures"))}
          >
            {features.p1 && <p>{features.p1}</p>}
            {features.p2 && <p>{features.p2}</p>}
            {features.p3 && <p>{features.p3}</p>}
            {features.p4 && <p>{features.p4}</p>}
          </CollapsibleSection>

          <CollapsibleSection
            title="Composition & Care"
            isOpen={showComposition}
            toggle={() => dispatch(toggleSection(id, "showComposition"))}
          >
            {composition.p1 && <p>{composition.p1}</p>}
            {composition.p2 && <p>{composition.p2}</p>}
            {composition.p3 && <p>{composition.p3}</p>}
            {composition.p4 && <p>{composition.p4}</p>}
          </CollapsibleSection>

          <CollapsibleSection
            title="Delivery & Returns"
            isOpen={showDelivery}
            toggle={() => dispatch(toggleSection(id, "showDelivery"))}
          >
            {delivery.p1 && <p>{delivery.p1}</p>}
            <p>
              <strong>{delivery.sideHeading}</strong> {delivery.p2}
            </p>{" "}
            <p> {delivery.p3}</p> <p> {delivery.p4}</p>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default Product;
