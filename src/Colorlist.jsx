import { nanoid } from 'nanoid'
import Values from 'values.js'

import SingleColor from './SingleColor'

const Colorlist = ({ colors }) => {
  const list = colors.length > 0 ? colors : new Values('#f15025').all(10)
  return (
    <div className="colors">
      {list.map((color) => (
        <SingleColor color={color} key={nanoid()} />
      ))}
    </div>
  )
}
export default Colorlist
