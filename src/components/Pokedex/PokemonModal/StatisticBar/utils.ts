import {BarColors, StatisticsTypes} from './constants'

export const getBarColorByStatName = (statName: string): BarColors => {

  switch (statName) {
    case StatisticsTypes.HP:
      return BarColors.success
    case StatisticsTypes.ATTACK:
      return BarColors.error
    case StatisticsTypes.DEFENSE:
      return BarColors.info
    case StatisticsTypes.SPECIALATTACK:
      return BarColors.warning
    case StatisticsTypes.SPECIALDEFENSE:
      return BarColors.secondary
    case StatisticsTypes.SPEED:
      return BarColors.inherit
    default:
      return BarColors.primary
  }
}
