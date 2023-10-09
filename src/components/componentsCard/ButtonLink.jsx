
const ButtonLink = ({ icon,colorRandom,link }) => {
  return (
    <a 
    className="btn"
    style={{backgroundColor:colorRandom, color:"#fff"}}
    href={link} target="_blank" rel="noopener noreferrer">{icon}</a>
  )
}

export default ButtonLink
