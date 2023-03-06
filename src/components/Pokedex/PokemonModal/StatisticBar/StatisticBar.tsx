

import {LinearProgress} from '@mui/material'
import Box from '@mui/material/Box'
import {
  StatisticBarContainer,
  StatisticName,
  StatisticNameWrapper,
  StatisticValue,
} from './StatisticBarStyled';
import {getBarColorByStatName} from './utils';

interface PokemonStatisticsProps {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  }
}

export const StatisticBar = ({
  base_stat,
  effort,
  stat,
}: PokemonStatisticsProps): JSX.Element => {
  const barColor = getBarColorByStatName(stat.name)

  return (
    <StatisticBarContainer>
      <StatisticNameWrapper>
        <StatisticName>
          {stat.name}:
        </StatisticName>
      </StatisticNameWrapper>
      <Box sx={{width: '60%'}}>
        <LinearProgress variant="determinate" color={barColor} value={base_stat > 100 ? 100 : base_stat} style={{height: 17}} />
      </Box>
      <StatisticValue>
        {base_stat}
      </StatisticValue>
    </StatisticBarContainer>
  )
}
