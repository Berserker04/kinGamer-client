import React from "react";
import { URL_IMAGE } from "../../../api";
import NewsLast from "../news/components/NewsLast";
import ProductLast from "../product/components/ProductLast";
// import DataTableHomeView from "../../../components/datatable/DataTableHomeView";

export default function HomeView({}) {
  return (
    <div>
       <h2 className="title-section">Últimos productos</h2>
      <div className="row">
        <ProductLast />
      </div>
      <h2 className="title-section2">Las Últimas Noticias</h2>
      <div className="row">
        <NewsLast />
      </div>
    </div>
  );
}
