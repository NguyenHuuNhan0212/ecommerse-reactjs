import { GrGrid } from 'react-icons/gr';
import { CiCircleList } from 'react-icons/ci';
import styles from '../style.module.scss';
import classNames from 'classnames';
import { useContext } from 'react';
import { OurShopContext } from '@contexts/OurShopProvider';
import SelectBox from './SelectBox';
function Filter() {
  const { containerFilter, boxIcon, show, sort, boxLeft, selectBox } = styles;
  const { showOptions, sortOptions } = useContext(OurShopContext);
  const getValueSelect = (value) => {
    console.log(value);
  };
  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        {/* <select className={classNames(selectBox, sort)}>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
        </select> */}
        <SelectBox options={sortOptions} getValue={getValueSelect} />
        <div className={boxIcon}>
          <GrGrid
            style={{
              fontSize: '27px',
              color: '#222',
              cursor: 'pointer'
            }}
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
        {/* <select className={classNames(selectBox, show)}>
          <option value=''>1</option>
          <option value=''>2</option>
          <option value=''>3</option>
        </select> */}
        <SelectBox options={showOptions} getValue={getValueSelect} />
      </div>
    </div>
  );
}

export default Filter;
