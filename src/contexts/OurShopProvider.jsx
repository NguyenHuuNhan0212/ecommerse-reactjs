import { createContext, useEffect, useState } from 'react';
import { getProduct } from '../apis/productsService';

export const OurShopContext = createContext();
export const OurShopProvider = ({ children }) => {
  const sortOptions = [
    {
      label: 'Default sorting',
      value: '0'
    },
    {
      label: 'Sort by popularity',
      value: '1'
    },
    {
      label: 'Sort by average rating',
      value: '2'
    },
    {
      label: 'Sort by latest',
      value: '3'
    },
    {
      label: 'Sort by price: low to high',
      value: '4'
    },
    {
      label: 'Sort by price: high to low',
      value: '5'
    }
  ];
  const showOptions = [
    { label: '8', value: '8' },
    { label: '12', value: '12' },
    { label: 'All', value: 'all' }
  ];
  const [sortId, setSortId] = useState('0');
  const [showId, setShowId] = useState('8');
  const [isShowGrid, setIsShowGrid] = useState(true);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const handleLoadMore = () => {
    const query = {
      sortType: sortId,
      page: page + 1,
      limit: showId
    };
    setIsLoadMore(true);
    getProduct(query)
      .then((res) => {
        setProducts((prev) => {
          return [...prev, ...res.contents];
        });
        setIsLoadMore(false);
        setPage(+res.page);
        setTotal(res.total);
      })
      .catch((err) => {
        console.log(err);
        setIsLoadMore(false);
      });
  };
  const values = {
    sortOptions,
    showOptions,
    setSortId,
    setShowId,
    setIsShowGrid,
    isShowGrid,
    products,
    isLoading,
    isLoadMore,
    handleLoadMore,
    total
  };
  useEffect(() => {
    const query = {
      sortType: sortId,
      page: 1,
      limit: showId
    };
    setIsLoading(true);
    getProduct(query)
      .then((res) => {
        setProducts(res.contents);
        setTotal(res.total);
        setPage(1);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [sortId, showId]);
  return (
    <OurShopContext.Provider value={values}>{children}</OurShopContext.Provider>
  );
};
