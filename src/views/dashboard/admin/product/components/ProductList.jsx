import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { API } from '../../../../../api'
import {
  listProducts,
  ProductsFilter,
} from '../../../../../redux/actions/product'
import ProductCard from './ProductCard'

export default function ProductList({ btnAdd, changeState, setProductEdit }) {
  // const [products, setProducts] = useState([])
  // const [productsFilter, setProductsFilter] = useState([])
  const { header } = useSelector((state) => state.auth)
  const { products, productsFilter } = useSelector((state) => state.product)

  const dispatch = useDispatch()

  const getProducts = useCallback(() => {
    dispatch(listProducts(header))
  }, [dispatch, header])

  const handleFiler = ({ target }) => {
    const filter = products.filter((p) =>
      p.name.toLowerCase().includes(target.value.toLowerCase()),
    )
    dispatch(ProductsFilter(filter))
  }

  useEffect(() => {
    getProducts()
  }, [getProducts])

  return (
    <>
      <div className="col-6">
        <input
          className="form-control"
          style={{ marginBottom: 10 }}
          type="text"
          placeholder="Buscar producto..."
          onChange={handleFiler}
        />
      </div>

      {btnAdd}

      <hr />
      {/* {productsFilter.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))} */}
      <div class="card">
        <div class="card-body">
          <table
            id="datatable"
            class="table table-bordered dt-responsive nowrap"
            // style="border-collapse: collapse; border-spacing: 0; width: 100%;"
            style={{
              borderCollapse: 'collapse',
              borderSpacing: 0,
              width: '100%',
            }}
          >
            <thead>
              <tr style={{ textAlign: 'center' }}>
                <th>Nombre del producto</th>
                <th>Imagen</th>
                <th>URL de compra</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {!productsFilter.length && (
                <tr>
                  <td colSpan="5" align="center">
                    No hay datos registrados
                  </td>
                </tr>
              )}
              {productsFilter.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  changeState={changeState}
                  setProductEdit={setProductEdit}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
