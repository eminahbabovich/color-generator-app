import { toast } from 'react-toastify'
const SingleColor = ({ color }) => {
  const copyHexValue = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${color.hex}`)
        toast.success('Color copied to clipboard!')
      } catch (error) {
        toast.error('Failed to copy color to clipboard')
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }
  return (
    <article
      className={color.type === 'shade' ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${color.hex}` }}
      onClick={copyHexValue}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  )
}
export default SingleColor
