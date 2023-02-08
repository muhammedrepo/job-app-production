import { useAppContext } from '../context/appContext';
import AreaChartBox from './AreaChartBox';
import BarChartBox from './BarChartBox';
import Wrapper from '../assets/wrappers/ChartsContainer';
import { useState } from 'react';
import Button from './Button';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useAppContext();
  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <Button outline onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </Button>
      {barChart ? <BarChartBox data={data} /> : <AreaChartBox data={data} />}
    </Wrapper>
  );
};
export default ChartsContainer;
