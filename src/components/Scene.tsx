import HumanBody from './HumanBody'
import Meridians from './Meridians'
import acupoints from '../data/acupoints.json'
import Acupoint from './Acupoint'

export default function Scene() {
  return (
    <>
      <HumanBody />
      <Meridians />
      {Object.values(acupoints).map((p: any, i) => (
        <Acupoint key={i} point={p} />
      ))}
    </>
  )
}
