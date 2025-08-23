import { GrGrid } from 'react-icons/gr';
import { CiCircleList } from 'react-icons/ci';
import styles from '../style.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from './SelectBox';
function Filter() {
  const { containerFilter, boxIcon, show, sort, boxLeft, selectBox } = styles;
  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);
  const getValueSelect = (value, type) => {
    if (type === 'sort') {
      setSortId(value);
    } else {
      setShowId(value);
    }
  };
  const handleGetShowGrid = (type) => {
    setIsShowGrid(type === 'grid');
  };
  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type={'sort'}
        />
        <div className={boxIcon}>
          <GrGrid
            style={{
              fontSize: '27px',
              color: '#222',
              cursor: 'pointer'
            }}
            onClick={() => handleGetShowGrid('grid')}
          />
          <div
            style={{
              height: '25px',
              width: '1px',
              backgroundColor: '#e1e1e1'
            }}
          />
          <CiCircleList
            style={{
              fontSize: '27px',
              color: '#222',
              cursor: 'pointer'
            }}
            onClick={() => handleGetShowGrid('list')}
          />
        </div>
      </div>
      <div className={boxLeft}>
        <div
          style={{
            fontSize: '14px',
            color: '#555'
          }}
        >
          Show
        </div>
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type={'show'}
        />
      </div>
    </div>
  );
}

export default Filter;
