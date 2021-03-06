import Yoga from 'yoga-layout';

const yogaValue = (prop, value) => {
  switch (value) {
    case 'flex':
      return Yoga.DISPLAY_FLEX;
    case 'none':
      return Yoga.DISPLAY_NONE;
    case 'row':
      return Yoga.FLEX_DIRECTION_ROW;
    case 'row-reverse':
      return Yoga.FLEX_DIRECTION_ROW_REVERSE;
    case 'column':
      return Yoga.FLEX_DIRECTION_COLUMN;
    case 'column-reverse':
      return Yoga.FLEX_DIRECTION_COLUMN_REVERSE;
    case 'stretch':
      return Yoga.ALIGN_STRETCH;
    case 'baseline':
      return Yoga.ALIGN_BASELINE;
    case 'space-around':
      return Yoga.ALIGN_SPACE_AROUND;
    case 'space-between':
      return Yoga.ALIGN_SPACE_BETWEEN;
    case 'around':
      return Yoga.JUSTIFY_SPACE_AROUND;
    case 'between':
      return Yoga.JUSTIFY_SPACE_BETWEEN;
    case 'flex-start':
      if (prop === 'justifyContent') {
        return Yoga.JUSTIFY_FLEX_START;
      } else if (prop === 'alignItems') {
        return Yoga.ALIGN_FLEX_START;
      }
      break;
    case 'flex-end':
      if (prop === 'justifyContent') {
        return Yoga.JUSTIFY_FLEX_END;
      } else if (prop === 'alignItems') {
        return Yoga.ALIGN_FLEX_END;
      }
      break;
    case 'center':
      if (prop === 'justifyContent') {
        return Yoga.JUSTIFY_CENTER;
      } else if (prop === 'alignItems') {
        return Yoga.ALIGN_CENTER;
      }
      break;
    default:
      return value;
  }
};

// These are not developed yet

// ALIGN_AUTO: 0,
// DIMENSION_WIDTH: 0,
// DIMENSION_HEIGHT: 1,
// DIRECTION_INHERIT: 0,
// DIRECTION_LTR: 1,
// DIRECTION_RTL: 2,
// EDGE_LEFT: 0,
// EDGE_TOP: 1,
// EDGE_RIGHT: 2,
// EDGE_BOTTOM: 3,
// EDGE_START: 4,
// EDGE_END: 5,
// EDGE_HORIZONTAL: 6,
// EDGE_VERTICAL: 7,
// EDGE_ALL: 8,
// MEASURE_MODE_UNDEFINED: 0,
// MEASURE_MODE_EXACTLY: 1,
// MEASURE_MODE_AT_MOST: 2,
// NODE_TYPE_DEFAULT: 0,
// NODE_TYPE_TEXT: 1,
// OVERFLOW_VISIBLE: 0,
// OVERFLOW_HIDDEN: 1,
// OVERFLOW_SCROLL: 2,
// POSITION_TYPE_RELATIVE: 0,
// POSITION_TYPE_ABSOLUTE: 1,
// PRINT_OPTIONS_LAYOUT: 1,
// PRINT_OPTIONS_STYLE: 2,
// PRINT_OPTIONS_CHILDREN: 4,
// UNIT_UNDEFINED: 0,
// UNIT_POINT: 1,
// UNIT_PERCENT: 2,
// UNIT_AUTO: 3,
// WRAP_NO_WRAP: 0,
// WRAP_WRAP: 1,
// WRAP_WRAP_REVERSE: 2,

export default yogaValue;
